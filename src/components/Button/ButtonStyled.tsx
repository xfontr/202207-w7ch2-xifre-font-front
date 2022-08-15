import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  &.button--normal,
  &.button--submit {
    border: none;
    color: ${(props) => props.theme.primaryColor};
    padding: ${(props) => props.theme.containerPaddingSmall}
      calc(${(props) => props.theme.containerPaddingSmall} * 2);
    border-radius: ${(props) => props.theme.radBorgerSmall};
    background-color: ${(props) => props.theme.contrastColor};
  }

  &.button--icon-trash,
  &.button--icon-tool,
  &.button--icon-view {
    border-radius: 50%;
    border-color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.contrastColor};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    i {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default ButtonStyled;
