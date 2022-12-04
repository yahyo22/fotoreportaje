import styled from "styled-components";

export default function SimpleMap() {
  return (
    <StyledMap>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            frameBorder="0"
            width="670px"
            height="381px"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=IT Park yashnobod&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </StyledMap>
  );
}
const StyledMap = styled.div`
  @media (max-width: 680px) {
    width: 100%;

    .mapouter {
      width: 100%;

      .gmap_canvas {
        width: 100%;

        .gmap_iframe {
          width: 100%;
        }
      }
    }
  }
`;
