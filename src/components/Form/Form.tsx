import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled className="create-robot">
      <form className="create-robot__form">
        <label htmlFor="name">Name</label>
        <input name="name" autoComplete="off"></input>
        <label>Image</label>
        <input name="image" autoComplete="off"></input>
        <label>Speed</label>
        <input name="speed" autoComplete="off"></input>
        <label>Endurance</label>
        <input name="endurance" autoComplete="off"></input>
        <button>Create</button>
      </form>
    </FormStyled>
  );
};

export default Form;
