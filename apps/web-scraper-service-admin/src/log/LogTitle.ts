import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "logType";

export const LogTitle = (record: TLog): string => {
  return record.logType?.toString() || String(record.id);
};
