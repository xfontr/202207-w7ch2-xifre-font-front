import { createReducer } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes/actionTypes";
import { IRobotLoad } from "../types/actionTypes";
import IRobot from "../types/interfaces";

const initialState: IRobot[] = [
  {
    name: "Bender",
    imag: "#",
    creationDate: "13/08/2022",
    speed: 9,
    endurance: 3,
  },
];

const robotsReducer = createReducer<IRobot[]>(initialState, (builder) => {
  builder.addCase(actionTypes.getAll, (state: IRobot[], action: IRobotLoad) => [
    ...action.payload,
  ]);

  builder.addDefaultCase((state: IRobot[]) => [...state]);
});

export default robotsReducer;
