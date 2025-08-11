import { palette } from "@/theme/palette";
import { shadows } from "@/theme/shadows";
import { typography } from "@/theme/typography";
import { Theme } from "@emotion/react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

export const UiThemeProvider = (props: any) => {
  const { children } = props;
  const themeOptions: Theme = {
    palette,
    typography,
    shadows,
    spacing: 10,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1920,
      },
    },
  };

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={() => ({
          "& ::selection": {
            // backgroundColor: theme?.palette?.primary?.main,
            // color: theme?.palette?.common?.black,
          },
        })}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
