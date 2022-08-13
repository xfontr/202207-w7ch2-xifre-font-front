import styled from "styled-components";

const RobotListStyled = styled.section`
  width: 90%;
  min-height: 100%;
  .robot-gallery {
    &__title {
      text-align: center;
    }

    &__list {
      display: flex;
      gap: ${(props) => props.theme.containerGap};
    }
  }
`;

export default RobotListStyled;
