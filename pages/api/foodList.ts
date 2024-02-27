import { NextApiRequest, NextApiResponse } from 'next';
import foodData from '../../public/foodData/datac.json';
import cors from 'cors';
import NextCors from 'nextjs-cors';


// Define types
type Food = {
  id: number;
  name: string;
  calories: number;
  cholesterol: number;
};

// CORS options
const corsOptions = {
  origin: ['http://localhost:3001', 'https://eten-ui.vercel.app'],
};

// Initialize CORS middleware
const corsMiddleWare = cors(corsOptions);

// API handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  // Enable CORS
  NextCors(req, res, ()=> {
    // Use foodData directly, no need to require it again
  const foodNames = foodData.map((food: Food) => food.name);
  res.status(200).json(foodNames);
  });
}