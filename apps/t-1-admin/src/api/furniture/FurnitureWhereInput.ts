import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FurnitureWhereInput = {
  id?: StringFilter;
  color?: StringNullableFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  material?: StringNullableFilter;
  dimensions?: StringNullableFilter;
  inStock?: BooleanNullableFilter;
  category?: StringNullableFilter;
  materialUsed?: StringNullableFilter;
  sizeDimensions?: StringNullableFilter;
  available?: BooleanNullableFilter;
};
