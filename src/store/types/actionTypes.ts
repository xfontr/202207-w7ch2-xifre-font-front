import IRobot from "./interfaces";

export interface IRobotLoad {
  type: string;
  payload: IRobot[];
}

export interface IRobotDelete {
  type: string;
  payload: IRobot;
}
