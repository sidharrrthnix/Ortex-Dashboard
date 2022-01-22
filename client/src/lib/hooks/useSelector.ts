import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../reducers";

// hook used to obtain types from useSelector
export const typedSelector: TypedUseSelectorHook<RootState> = useSelector;
