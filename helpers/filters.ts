import { House } from "../types/house";

export const filterHousesByName = (houses: House[], name?: string): House[] => {
  if (!name) return houses;
  return houses.filter((house) =>
    house.name.toLowerCase().includes(name.toLowerCase())
  );
};
