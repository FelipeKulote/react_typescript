import { createGlobalStyle, css } from "styled-components";

const RobotoSlab = css`
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100;200;300;400;500;700;800;900&display=swap");
`
export const GlobalStyle = createGlobalStyle`
${RobotoSlab}
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
    html, #root, body {
    font: 1rem Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width:100%;
    height: var(--vh, 100vh);
    background-color: ${(props) => props.theme.darkTheme.bg};
    color: ${(props) => props.theme.darkTheme.fg};
}`;

export const theme = {
  lightTheme: {
    bg: "rgba(255, 255, 255, 0.90)",
    fg: "rgba(0, 0, 0, 0.90)",
  },
  darkTheme: {
    bg: "rgba(0, 0, 0, 0.50)",
    fg: "rgba(255, 255, 255, 0.90)",
  },
};

export interface Theme {
  bg: string;
  fg: string;
}
