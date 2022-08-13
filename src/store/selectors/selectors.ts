import { RootState } from "../../app/store";
import IRobot from "../types/interfaces";

export const selectAllRobots = (state: RootState): { robots: IRobot[] } =>
  state;
