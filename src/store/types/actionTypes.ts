import IRobot from "./interfaces";

export interface IRobotLoad {
  type: string;
  payload: IRobot[];
}
