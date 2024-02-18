import type { NextApiRequest, NextApiResponse } from 'next';
import foodData from '../../public/foodData/data.json';
import cors from 'cors';

export type Food = {
  id: string;
  name: string;
  calories: number;
  cholesterol: number;
};

export type ApiResponse = {
  food: Food | undefined;
};

const corsHandler = cors({
  origin: 'http://localhost:3001', // Allow requests from this origin
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  await new Promise((resolve) => corsHandler(req, res, resolve));

  if (req.method === 'GET') {
    const { name } = req.query;
    const food = foodData.find((item) => typeof name === 'string' && item.name.toLowerCase() === name?.toLowerCase());

    res.status(200).json({ food });
  } else {
    res.status(405).json({ food: undefined });
  }
}
