import { Ttt as TTtt } from "../api/ttt/Ttt";

export const TTT_TITLE_FIELD = "id";

export const TttTitle = (record: TTtt): string => {
  return record.id?.toString() || String(record.id);
};
