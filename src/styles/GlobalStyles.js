import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, sans-serif;
  }


  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 10px;
  }


  a, button {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }


`;
