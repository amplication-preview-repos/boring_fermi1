import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SettingsWhereInput = {
  id?: StringFilter;
  priceAdjustment?: IntNullableFilter;
};
