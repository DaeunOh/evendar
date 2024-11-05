/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
}

interface ColorOpacity {
  100: string;
  70: string;
  50: string;
  40: string;
  20: string;
}

export interface EvendarTheme {
  color: {
    system: { primary: string };
    white: ColorOpacity & { 0: string };
    gray: ColorScale & { 800: string; 900: string };
    black: ColorOpacity & { 80: string; 30: string; 10: string; 6: string; 4: string };
    validation: { negative: string };
  };
  text: {
    xxxxl: {
      bold: string;
    };
    xxxl: {
      bold: string;
    };
    xxl: {
      bold: string;
      light: string;
    };
    xl: {
      medium: string;
    };
    l: {
      bold: string;
      medium: string;
      regular: string;
    };
    m: {
      bold: string;
      medium: string;
      regular: string;
      regular_line: string;
    };
    s: {
      bold: string;
      medium: string;
      regular: string;
      regular_line: string;
    };
    xs: {
      bold: string;
      medium: string;
      regular: string;
      regular_line: string;
    };
    xxs: {
      bold: string;
      medium: string;
      regular: string;
    };
    xxxs: {
      regular: string;
    };
    xxxxs: {
      medium: string;
    };
  };
}

declare module '@mui/material/styles' {
  interface Theme extends EvendarTheme {}
  interface ThemeOptions extends EvendarTheme {}
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
