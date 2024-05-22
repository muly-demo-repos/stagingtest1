import { TttWhereInput } from "./TttWhereInput";
import { TttOrderByInput } from "./TttOrderByInput";

export type TttFindManyArgs = {
  where?: TttWhereInput;
  orderBy?: Array<TttOrderByInput>;
  skip?: number;
  take?: number;
};
