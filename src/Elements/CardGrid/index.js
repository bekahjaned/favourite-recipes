import styled from "styled-components";

export const CardGrid = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: repeat(2, 425px);
  grid-gap: 25px 50px;
  justify-content: center;
  grid-auto-flow: row;
`;
