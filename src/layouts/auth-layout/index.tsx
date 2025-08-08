import { Box } from "@mui/material";
import { Header } from "../main-layout/header";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
