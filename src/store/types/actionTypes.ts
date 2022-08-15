import IRobot from "./interfaces";

export interface Action {
  type: string;
}
interface RobotAction extends Action {
  payload: IRobot;
}

interface RobotsAction extends Action {
  payload: IRobot[];
}

export interface IRobotGet extends RobotsAction {}

export interface IRobotGetById extends RobotAction {}

export interface IRobotAdd extends RobotAction {}

export interface IRobotDelete extends RobotAction {}
