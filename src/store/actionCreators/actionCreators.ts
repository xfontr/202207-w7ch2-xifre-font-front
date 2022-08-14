import { createAction } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes/actionTypes";
import IRobot from "../types/interfaces";

export const getRobotsActionNew = createAction<IRobot[]>(actionTypes.getAll);

export const getRobotByIdActionNew = createAction<IRobot>(actionTypes.getById);

export const addRobotActionNew = createAction<IRobot>(actionTypes.add);

export const deleteRobotActionNew = createAction<IRobot>(actionTypes.delete);
