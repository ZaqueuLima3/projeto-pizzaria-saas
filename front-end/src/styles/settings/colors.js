import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-negative-light: rgba(0, 0, 0, 0.15);
    --color-base: #3A4042;
    --color-white: #FFF;
    --color-lighter: #DDD;
    --color-primary: #002e4d;
    --color-secondary: 	#ff1a53;
    --color-third: #EAE6DA;
  }
`;

export default Colors;
