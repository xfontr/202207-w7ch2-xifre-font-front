import styled from "styled-components";

const AppStyled = styled.div`
  color: ${(props) => props.theme.secondaryColor};
  max-width: ${(props) => props.theme.smallBreakpoint};
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.bigBreakpoint}) {
    max-width: ${(props) => props.theme.bigBreakpoint};
  }
`;

export default AppStyled;
