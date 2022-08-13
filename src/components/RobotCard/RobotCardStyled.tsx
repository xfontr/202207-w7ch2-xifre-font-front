import styled from "styled-components";

const RobotCardStyled = styled.article`
  background-color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.containerPadding};
  border-radius: ${(props) => props.theme.radBorderBig};

  & .robot__date {
    display: block;
  }

  & .robot__data {
    display: flex;
    gap: ${(props) => props.theme.containerGap};
  }

  & .robot__data-item span {
    font-size: 1rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  & .robot__data-item {
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding: Small;
    border-radius: ${(props) => props.theme.radBorgerSmall};
    background-color: ${(props) => props.theme.contrastColor};
  }
`;

export default RobotCardStyled;
