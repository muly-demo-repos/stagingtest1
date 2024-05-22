import { SortOrder } from "../../util/SortOrder";

export type FurnitureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  color?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  material?: SortOrder;
  dimensions?: SortOrder;
  inStock?: SortOrder;
  category?: SortOrder;
  materialUsed?: SortOrder;
  sizeDimensions?: SortOrder;
  available?: SortOrder;
};
