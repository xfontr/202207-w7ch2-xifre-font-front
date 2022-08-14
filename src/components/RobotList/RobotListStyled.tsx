import styled from "styled-components";

const RobotListStyled = styled.section`
  width: 90%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .robot-gallery {
    &__title {
      text-align: center;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: ${(props) => props.theme.containerGap};

      & li {
        width: 100%;

        @media (min-width: ${(props) => props.theme.bigBreakpoint}) {
          width: 45%;
        }
      }
    }
  }
`;

export default RobotListStyled;
