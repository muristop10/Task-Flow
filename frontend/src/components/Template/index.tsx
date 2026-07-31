import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { GlobalStyle } from "./globalStyle";
import styled from "styled-components";
import ScrollToTop from "../ScrollToTop";
import { Toaster } from "sonner";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


const Template = () => {
  return (
    <>
      <Toaster
        richColors
        theme="dark" />
      <GlobalStyle />
      <ScrollToTop />

      <Layout>
        <Header />

        <Outlet />

        <Footer />
      </Layout>
    </>
  );
};

export default Template;