import { AppThunk } from "@/global/providers/store";
import { selectCount } from "../selectors/selectCount";
import { incrementByAmount } from "../slice";

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch: any, getState: any) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
