import styled from "styled-components";

const RobotCardStyled = styled.article`
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.containerPadding};
  border-radius: ${(props) => props.theme.radBorderBig};

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.containerGapSmall};

  & .robot__name {
    line-height: 0;
  }

  & .robot__date {
    display: block;
  }

  & .robot__image {
    object-fit: cover;
    border-radius: ${(props) => props.theme.radBorgerSmall};
  }

  & .robot__data {
    display: flex;
    justify-content: center;
    gap: ${(props) => props.theme.containerGap};
  }

  & .robot__data-item span {
    font-size: 1rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  & .robot__data-item {
    color: ${(props) => props.theme.primaryColor};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: ${(props) => props.theme.containerPaddingSmall};
    border-radius: ${(props) => props.theme.radBorgerSmall};
    background-color: ${(props) => props.theme.contrastColor};
  }
  .robot__data-button {
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

export default RobotCardStyled;
