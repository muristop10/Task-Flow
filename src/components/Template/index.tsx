import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { GlobalStyle } from "./globalStyle";
import styled from "styled-components";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


const Template = () => {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Header />

          <Outlet />

        <Footer />
      </Layout>
    </>
  );
};

export default Template;