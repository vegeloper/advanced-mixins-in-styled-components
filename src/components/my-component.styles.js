//Imports
import styled from "styled-components";
import { colors, borders, responsive } from "../design/mixins";

//Code
export const MyComponent = styled.div`
  ${borders.myBorderDesk};
  background: transparent;

  ${responsive.mobile.standard`
     ${borders.myBorderMob};
     background: ${colors.primary};
  `};
`;
