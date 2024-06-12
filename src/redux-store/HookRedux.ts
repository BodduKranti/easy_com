import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./Store";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppState = useSelector.withTypes<AppState>()