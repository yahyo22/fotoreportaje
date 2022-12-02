import styled from "styled-components";

// Components
import Footer from "../../components/footer/Footer";
import Establishment from "../../components/establishments/Establishment";

export default function Home() {
  return (
    <StyledHome>
      <div className="container">
        <Establishment />
        <Footer />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div``;
