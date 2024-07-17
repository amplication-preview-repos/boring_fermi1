import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  manufacturer?: StringNullableFilter;
  weight?: IntNullableFilter;
  countryOfOrigin?: StringNullableFilter;
  minPurchaseQuantity?: IntNullableFilter;
  quantity?: IntNullableFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  length?: IntNullableFilter;
  quantityInBatch?: IntNullableFilter;
  color?: StringNullableFilter;
};
