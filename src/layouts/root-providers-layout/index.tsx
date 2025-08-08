"use client";

import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { SnackBarProvider } from "@/providers/snackbar.provider";
import { UiThemeProvider } from "@/providers/ui-theme-provider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function RootProvidersLayout(props: any) {
  const { children } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <UiThemeProvider>
          <SnackBarProvider>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </SnackBarProvider>
        </UiThemeProvider>
      </LocalizationProvider>
    </>
  );        
}
