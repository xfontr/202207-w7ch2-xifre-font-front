import { createAction } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes/actionTypes";
import IRobot from "../types/interfaces";

export const loadRobotsActionNew = createAction<IRobot[]>(actionTypes.getAll);
