import styled from "styled-components";

const FormStyled = styled.section`
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: 25px;
  width: 75%;
  height: 70vh;
  align-self: center;
  display: flex;
  justify-content: center;
  .create-robot__form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    label {
      align-self: center;
      font-weight: 900;
    }
    input {
      align-self: right;
      border-radius: 5px;
    }
    button {
      border-radius: 5px;
      height: 8%;
      width: 60%;
      align-self: center;
    }
  }
`;

export default FormStyled;
