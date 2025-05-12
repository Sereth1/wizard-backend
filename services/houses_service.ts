import axios from "axios";
import { House } from "../types/house";

export const fetchAllHouses = async (): Promise<House[]> => {
  const res = await axios.get<House[]>(
    "https://wizard-world-api.herokuapp.com/houses"
  );

  if (res.status !== 200) {
    throw new Error("API failed");
  }

  return res.data;
};
