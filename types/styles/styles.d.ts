import { IThemeInterface } from "styles/theme";

declare module "styled-components" {
    interface DefaultTheme extends IThemeInterface {}
}
