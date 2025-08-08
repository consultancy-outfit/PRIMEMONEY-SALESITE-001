"use client";
import Footer from "./footer";
import { Header } from "./header";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />

      <main style={{ backgroundColor: "#ffffff" }}>{children}</main>
      <Footer />
    </>
  );
};
