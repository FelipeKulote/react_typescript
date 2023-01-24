import "styled-components";
import { Theme } from "./global-style";

declare module "styled-components" {
  export interface DefaultTheme {
    lightTheme: Theme;
    darkTheme: Theme;
  }
}
