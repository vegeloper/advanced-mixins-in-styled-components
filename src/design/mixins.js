//Imports
import { css } from "styled-components";

//Code
export const colors = {
  primary: "#ce0f45",
  border: "#b28451",
};

export const borders = {
  myBorderDesk: () => css`
    border: 6px solid ${colors.border};
  `,
  myBorderMob: () => css`
    border: 3px solid ${colors.border};
  `,
};


export const responsive = {
  mobile: {
    standard: (...args) => css`
      @media (max-width: 600px) {
        ${css(...args)};
      }
    `,
  },
};