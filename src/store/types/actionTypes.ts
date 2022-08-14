import IRobot from "./interfaces";

export interface IRobotGet {
  type: string;
  payload: IRobot[];
}

export interface IRobotGetById {
  type: string;
  payload: string | number;
}

export interface IRobotDelete {
  type: string;
  payload: IRobot;
}
