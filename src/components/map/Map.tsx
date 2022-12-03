export default function SimpleMap() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          width="700px"
          height="381px"
          scrolling="no"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=IT Park yashnobod&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
