import { NextApiRequest, NextApiResponse } from "next";
import cors from "cors";
import foodData from "../../public/foodData/datac.json";

// Define types
type Food = {
  id: number;
  name: string;
  calories: number;
  cholesterol: number;
};

// CORS options
const corsOptions = {
  origin: ["http://localhost:3001", "https://eten-ui.vercel.app"]
};

// Initialize CORS middleware
const corsMiddleware = cors(corsOptions);

// API handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  // Invoke CORS middleware
  await new Promise((resolve) => {
    corsMiddleware(req, res, () => {
      // Use foodData directly, no need to require it again
      const foodNames = foodData.map((food: Food) => food.name);
      res.status(200).json(foodNames);
      resolve(null);
    });
  });
}