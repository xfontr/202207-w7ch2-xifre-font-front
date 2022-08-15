import { createReducer } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes/actionTypes";
import {
  IRobotAdd,
  IRobotDelete,
  IRobotGet,
  IRobotGetById,
  IRobotModify,
} from "../types/actionTypes";
import IRobot from "../types/interfaces";

const initialState: IRobot[] = [];

const robotsReducer = createReducer<IRobot[]>(initialState, (builder) => {
  builder.addCase(actionTypes.getAll, (state: IRobot[], action: IRobotGet) => [
    ...action.payload,
  ]);

  builder.addCase(
    actionTypes.getById,
    (state: IRobot[], action: IRobotGetById) => [action.payload]
  );

  builder.addCase(actionTypes.add, (state: IRobot[], action: IRobotAdd) => [
    ...state,
    action.payload,
  ]);

  builder.addCase(actionTypes.delete, (state: IRobot[], action: IRobotDelete) =>
    state.filter((robot) => robot._id !== action.payload._id)
  );

  builder.addCase(actionTypes.modify, (state: IRobot[], action: IRobotModify) =>
    state.map((robot) =>
      robot._id === action.payload._id ? action.payload : robot
    )
  );

  builder.addDefaultCase((state: IRobot[]) => [...state]);
});

export default robotsReducer;
