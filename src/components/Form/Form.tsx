import FormStyled from "./FormStyled";
import { useState } from "react";
import useAPI from "../../hooks/useAPI";
import IRobot from "../../store/types/interfaces";

interface Input {
  name: string;
  image: string;
  speed: string | number;
  endurance: string | number;
}

const Form = (): JSX.Element => {
  const { postRobot } = useAPI();

  const handleInputObject = () => {
    input.speed = Number(input.speed);
    input.endurance = Number(input.endurance);
    const newRobot: Partial<IRobot> = {
      name: input.name,
      image: input.image,
      creationDate: new Date().toString(),
      speed: input.speed,
      endurance: input.endurance,
    };
    postRobot(newRobot);
  };

  const inputField = {
    name: "",
    image: "",
    speed: "",
    endurance: "",
  };
  const [input, setInput] = useState<Input>(inputField);
  return (
    <FormStyled className="create-robot">
      <form className="create-robot__form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          autoComplete="off"
          type="text"
          value={input.name}
          onChange={(event) => setInput({ ...input, name: event.target.value })}
        ></input>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          autoComplete="off"
          type="text"
          value={input.image}
          onChange={(event) =>
            setInput({ ...input, image: event.target.value })
          }
        ></input>
        <label htmlFor="speed">Speed</label>
        <input
          id="speed"
          autoComplete="off"
          type="text"
          value={input.speed}
          onChange={(event) =>
            setInput({ ...input, speed: event.target.value })
          }
        ></input>
        <label htmlFor="endurance">Endurance</label>
        <input
          id="endurance"
          autoComplete="off"
          type="text"
          value={input.endurance}
          onChange={(event) =>
            setInput({ ...input, endurance: event.target.value })
          }
        ></input>
        <button onClick={() => handleInputObject()}>Create</button>
      </form>
    </FormStyled>
  );
};

export default Form;
