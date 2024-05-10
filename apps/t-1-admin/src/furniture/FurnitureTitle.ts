import { Furniture as TFurniture } from "../api/furniture/Furniture";

export const FURNITURE_TITLE_FIELD = "name";

export const FurnitureTitle = (record: TFurniture): string => {
  return record.name?.toString() || String(record.id);
};
