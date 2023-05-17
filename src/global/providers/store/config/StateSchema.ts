import { AxiosInstance } from "axios";
import { To } from "history";
import { NavigateOptions } from "react-router";

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
