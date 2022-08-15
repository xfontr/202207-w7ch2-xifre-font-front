import { configureStore, createReducer } from "@reduxjs/toolkit";
import IRobot from "../../store/types/interfaces";

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

const mockReducer = createReducer<IRobot[]>(initialState, (builder) => {
  builder.addDefaultCase((state: IRobot[]) => [...state]);
});

const mockStore = configureStore({ reducer: { robots: mockReducer } });

export default mockStore;
