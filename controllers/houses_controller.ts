import { Request, Response } from "express";
import { fetchAllHouses } from "../services/houses_service";
import { filterHousesByName } from "../helpers/filters";

export const getFilteredHouses = async (req: Request, res: Response) => {
  const name = req.query.name?.toString();

  try {
    const houses = await fetchAllHouses();
    const filtered = filterHousesByName(houses, name);
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: "Failed to load houses" });
  }
};
