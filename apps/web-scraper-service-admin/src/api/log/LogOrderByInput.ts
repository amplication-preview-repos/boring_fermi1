import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  logType?: SortOrder;
  createdOn?: SortOrder;
  message?: SortOrder;
};
