import styled from "styled-components";

const ButtonStyled = styled.button`
  &.button--icon {
    cursor: pointer;
    border-radius: 50%;
    border-color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.contrastColor};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 23%;
    left: 11%;
    i {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default ButtonStyled;
