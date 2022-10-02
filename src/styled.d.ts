import 'styled-components';
import * as Theme from './theme.config';

type ProjectDefaultTheme = typeof Theme;

declare module 'styled-components' {
    export interface DefaultTheme extends ProjectDefaultTheme {}
}
