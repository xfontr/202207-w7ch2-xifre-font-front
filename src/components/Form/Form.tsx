import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled className="create-robot">
      <form className="create-robot__form">
        <label htmlFor="name">Name</label>
        <input id="name" autoComplete="off"></input>
        <label htmlFor="image">Image</label>
        <input id="image" autoComplete="off"></input>
        <label htmlFor="speed">Speed</label>
        <input id="speed" autoComplete="off"></input>
        <label htmlFor="endurance">Endurance</label>
        <input id="endurance" autoComplete="off"></input>
        <button>Create</button>
      </form>
    </FormStyled>
  );
};

export default Form;
