import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  manufacturer?: SortOrder;
  weight?: SortOrder;
  countryOfOrigin?: SortOrder;
  minPurchaseQuantity?: SortOrder;
  quantity?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  length?: SortOrder;
  quantityInBatch?: SortOrder;
  color?: SortOrder;
};
