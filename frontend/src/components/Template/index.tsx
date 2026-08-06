import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { GlobalStyle } from "./globalStyle";
import styled from "styled-components";
import ScrollToTop from "../ScrollToTop";
import { Toaster } from "sonner";
import { useTheme } from "../../stores/themeStore";
import { useAuth } from "../../stores/userStore";
import { useEffect } from "react";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


const Template = () => {

  const { checkAuth } = useAuth()
  const { theme } = useTheme();

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <>
      <Toaster
        richColors
        theme="dark" />
      <GlobalStyle theme={theme}/>
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