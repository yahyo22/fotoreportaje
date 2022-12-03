import styled from "styled-components";

// Components
import Footer from "../../components/footer/Footer";
import Establishment from "../../components/establishments/Establishment";
import Header from "../../components/head/Header";
import CardAbout from "../../components/cardAbout/CardAbout";

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <div className="container">
        <CardAbout />
        <Establishment />
        <Footer />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div``;
