import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Components
import Footer from "../../components/footer/Footer";
import Header from "../../components/head/Header";

export default function MainPage() {
  return (
    <StyledUserPage>
      <Header />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </StyledUserPage>
  );
}

const StyledUserPage = styled.div``;
