import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Components
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function UserPage() {
  return (
    <StyledUserPage>
      <div className="container">
        <Navbar />
        
        <Outlet />
        <Footer />
      </div>
    </StyledUserPage>
  );
}

const StyledUserPage = styled.div``;
