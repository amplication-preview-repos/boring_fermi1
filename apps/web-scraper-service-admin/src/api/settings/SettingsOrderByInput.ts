import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  priceAdjustment?: SortOrder;
};
