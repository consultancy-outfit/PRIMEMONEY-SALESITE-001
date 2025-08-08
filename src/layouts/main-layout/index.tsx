import Footer from "./footer";
import { Header } from "./header";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main >{children}</main>
      <Footer />
    </>
  );
};
