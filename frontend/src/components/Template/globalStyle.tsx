import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  theme: "light" | "dark";
}>`

  :root {
    --primary: ${({ theme }) =>
      theme === "dark" ? "#818CF8" : "#6366F1"};

    --primary-dark: ${({ theme }) =>
      theme === "dark" ? "#6366F1" : "#4F46E5"};

    --background: ${({ theme }) =>
      theme === "dark" ? "#0F172A" : "#F8FAFC"};

    --surface: ${({ theme }) =>
      theme === "dark" ? "#1E293B" : "#FFFFFF"};

    --text-primary: ${({ theme }) =>
      theme === "dark" ? "#F8FAFC" : "#0F172A"};

    --text-secondary: ${({ theme }) =>
      theme === "dark" ? "#CBD5E1" : "#64748B"};

    --border: ${({ theme }) =>
      theme === "dark" ? "#334155" : "#E2E8F0"};

    --success: #10B981;
    --error: #EF4444;
    --warning: #F59E0B;

    --shadow:
      ${({ theme }) =>
        theme === "dark"
          ? "0 10px 20px rgba(0,0,0,.35)"
          : "0 10px 20px rgba(15,23,42,.06)"};

    --shadow-hover:
      ${({ theme }) =>
        theme === "dark"
          ? "0 15px 40px rgba(0,0,0,.5)"
          : "0 15px 40px rgba(15,23,42,.12)"};
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

    transition:
      background-color 0.3s ease,
      color 0.3s ease;

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
    background: var(--primary);
    color: white;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--surface);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      theme === "dark" ? "#475569" : "#CBD5E1"};

    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) =>
      theme === "dark" ? "#64748B" : "#94A3B8"};
  }
`