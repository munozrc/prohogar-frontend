import { ToastContainer } from "react-toastify";
import styled, { createGlobalStyle } from "styled-components";

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  .Toastify__toast--success {
    background: #2cb978;
  }

  .Toastify__toast--warning {
    background: #ed733f;
  }

  .Toastify__toast--error {
    background: #c03546;
  }
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
