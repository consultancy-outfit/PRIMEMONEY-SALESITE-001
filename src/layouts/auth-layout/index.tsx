import { Header } from "../main-layout/header";
import Footer from "../main-layout/footer";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
