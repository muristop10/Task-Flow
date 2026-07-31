import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary: #6366F1;
    --primary-dark: #4F46E5;

    --background: #F8FAFC;
    --surface: #FFFFFF;

    --text-primary: #0F172A;
    --text-secondary: #64748B;

    --border: #E2E8F0;

    --success: #10B981;
    --error: #EF4444;
    --warning: #F59E0B;

    --shadow:
      0 10px 20px rgba(15, 23, 42, 0.06);

    --shadow-hover:
      0 15px 40px rgba(15, 23, 42, 0.12);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;

    background: var(--background);
    color: var(--text-primary);

    font-family: "Inter", sans-serif;

    line-height: 1.5;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  ::selection {
    background: rgba(99, 102, 241, 0.2);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: #CBD5E1;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #94A3B8;
  }
`;