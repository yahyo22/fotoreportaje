import styled from "styled-components";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <StyledHome>
      <div className="container">
        <Footer />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div``;
