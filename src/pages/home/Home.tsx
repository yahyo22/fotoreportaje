import styled from "styled-components";

// Components
import Footer from "../../components/footer/Footer";
import Establishment from "../../components/establishments/Establishment";
import Header from "../../components/head/Header";

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <div className="container">
        <Establishment />
        <Footer />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div``;
