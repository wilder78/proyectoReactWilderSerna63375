import "./AboutUs.css";
import OurLocation from "./OurLocation/OurLocation";
import OurMission from "./OurMission/OurMission";
import OurVision from "./OurVision/OurVision";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Map from "./Map/Map";

function AboutUs() {
  return (
    <>
      <WhoWeAre />
      <hr></hr>
      <OurMission />
      <hr></hr>
      <OurVision />
      <hr></hr>
      <OurLocation />
      <Map />
    </>
  );
}

export default AboutUs;
