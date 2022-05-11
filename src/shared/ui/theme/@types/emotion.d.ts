import '@emotion/react';
import { defaultTheme } from '../default';

type def = typeof defaultTheme;

declare module '@emotion/react' {
  export interface Theme extends def {}
}
