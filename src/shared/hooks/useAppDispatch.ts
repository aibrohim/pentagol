import { useDispatch } from "react-redux";
import { AppDispatch } from "@/global/providers/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
