import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const fadeUpDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const fadeInLarge = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeLeft = keyframes`
  from {
    opacity: 0;
    margin-left: -100%;
  }

  to {
    opacity: 1;
    margin-left: 0%;
  }
`;

export const fadeRight = keyframes`
  from {
    opacity: 0;
    margin-right: -100%;
  }

  to {
    opacity: 1;
    margin-right: 0%;
  }
`;
