import styled from "styled-components";

// Components
<<<<<<< HEAD:src/pages/home/Home.tsx
import Footer from "../../components/footer/Footer";
import Establishment from "../../components/establishments/Establishment";
import Header from "../../components/head/Header";
import CardAbout from "../../components/cardAbout/CardAbout";
=======
import Footer from "../components/footer/Footer";
import Establishment from "../components/cards/Cards";
import Header from "../components/head/Header";
import { TabTitle } from "../utils/Utils";
>>>>>>> b1aa2285db447dc79f222d4a167fa5ae17fb952e:src/pages/Main.tsx

export default function Home() {
  TabTitle("Home")
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
