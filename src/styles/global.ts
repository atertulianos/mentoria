import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F5F5F5;
    --primary: #00205B;
    --black: #000000;
    --white: #ffffff
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat" !important;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }

  // font-size: 16px (Desktop)

  html {
    // REM = 1rem = 16px
    @media (max-width: 1366px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .description > p {
    font-size: 15px;
  }
`;