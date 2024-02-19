import foodData from '../../public/foodData/data.json';
import cors from 'cors';

import type { NextApiRequest, NextApiResponse } from "next";

type Food = { id: string; name: string; calories: number; cholesterol: number; };

const corsMiddleware = cors({ origin: "http://localhost:3001", });

export default async function handler( req: NextApiRequest, res: NextApiResponse<string[]> ) 
{ corsMiddleware(req, res, () => { 
    const foodData: Food[] = require("../../public/foodData/data.json"); 
    const foodNames = foodData.map((food) => food.name); res.status(200).json(foodNames); }); }