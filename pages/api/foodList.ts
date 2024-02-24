import { NextApiRequest, NextApiResponse } from "next";
import cors from "cors";
import foodData from "../../public/foodData/data.json";

// Define types
type Food = {
  id: string;
  name: string;
  calories: number;
  cholesterol: number;
};

// CORS options
const corsOptions = {
  origin: "http://localhost:3001",
};

// Initialize CORS middleware
const corsMiddleware = cors(corsOptions);

// API handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  // Invoke CORS middleware
  corsMiddleware(req, res, () => {
    // Use foodData directly, no need to require it again
    const foodNames = foodData.map((food: Food) => food.name);
    res.status(200).json(foodNames);
  });
}
