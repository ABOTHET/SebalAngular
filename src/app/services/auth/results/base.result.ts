import {AccessTokenResult} from "./access-token.result";

export interface BaseResult extends AccessTokenResult {
  id: number;
  email: string;
}
