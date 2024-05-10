import { FurnitureWhereInput } from "./FurnitureWhereInput";
import { FurnitureOrderByInput } from "./FurnitureOrderByInput";

export type FurnitureFindManyArgs = {
  where?: FurnitureWhereInput;
  orderBy?: Array<FurnitureOrderByInput>;
  skip?: number;
  take?: number;
};
