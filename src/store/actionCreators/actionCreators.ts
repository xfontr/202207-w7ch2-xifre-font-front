import { createAction } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes/actionTypes";
import IRobot from "../types/interfaces";

export const getRobotsActionNew = createAction<IRobot[]>(actionTypes.getAll);
