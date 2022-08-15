import FormStyled from "./FormStyled";
import { FormEvent, useState } from "react";
import useAPI from "../../hooks/useAPI";
import IRobot from "../../store/types/interfaces";
import Button from "../Button/Button";

interface Input {
  name: string;
  image: string;
  speed: string | number;
  endurance: string | number;
}

interface FormProps {
  typeOfForm: "create" | "update";
  robot?: IRobot;
}

const Form = ({ typeOfForm, robot }: FormProps): JSX.Element => {
  const { postRobot } = useAPI();

  const handleInputObject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    input.speed = Number(input.speed);
    input.endurance = Number(input.endurance);

    const newRobot: Partial<IRobot> = {
      name: input.name,
      image: input.image,
      creationDate: new Date().toString(),
      speed: input.speed,
      endurance: input.endurance,
    };

    if (typeOfForm === "create") {
      await postRobot(newRobot);
    } else if (typeOfForm === "update") {
      return undefined;
    }
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
      <form
        className="create-robot__form"
        onSubmit={(event) => handleInputObject(event)}
      >
        <label htmlFor="name">Name</label>
        <input
          data-testid="name"
          id="name"
          autoComplete="off"
          type="text"
          value={input.name}
          onChange={(event) => setInput({ ...input, name: event.target.value })}
        ></input>
        <label htmlFor="image">Image</label>
        <input
          data-testid="image"
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
          data-testid="speed"
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
          data-testid="endurance"
          id="endurance"
          autoComplete="off"
          type="text"
          value={input.endurance}
          onChange={(event) =>
            setInput({ ...input, endurance: event.target.value })
          }
        ></input>
        {typeOfForm === "create" && (
          <Button content="Create" buttonType="submit" action={() => {}} />
        )}
        {typeOfForm === "update" && (
          <Button content="Update" buttonType="submit" action={() => {}} />
        )}
      </form>
    </FormStyled>
  );
};

export default Form;
