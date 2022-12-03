import styled from "styled-components";

// Components
import Footer from "../components/footer/Footer";
import Establishment from "../components/cards/Cards";
import Header from "../components/head/Header";
import { TabTitle } from "../utils/Utils";

export default function Home() {
  TabTitle("Home")
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
