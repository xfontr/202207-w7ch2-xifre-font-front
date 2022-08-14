import { createReducer } from "@reduxjs/toolkit";
import actionTypes from "../actionTypes/actionTypes";
import { IRobotDelete, IRobotGet, IRobotGetById } from "../types/actionTypes";
import IRobot from "../types/interfaces";

const initialState: IRobot[] = [
  {
    _id: "0",
    name: "Bender",
    image:
      "https://www.paredro.com/wp-content/uploads/2014/05/sorayama-sexy-robot-2.jpg",
    creationDate: "13/08/2022",
    speed: 9,
    endurance: 3,
  },
];

const robotsReducer = createReducer<IRobot[]>(initialState, (builder) => {
  builder.addCase(actionTypes.getAll, (state: IRobot[], action: IRobotGet) => [
    ...action.payload,
  ]);

  builder.addCase(
    actionTypes.getById,
    (state: IRobot[], action: IRobotGetById) => [action.payload]
  );

  builder.addCase(actionTypes.delete, (state: IRobot[], action: IRobotDelete) =>
    state.filter((robot) => robot._id !== action.payload._id)
  );

  builder.addDefaultCase((state: IRobot[]) => [...state]);
});

export default robotsReducer;
