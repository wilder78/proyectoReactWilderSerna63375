import "./Contacts.css";
import AdministrativeStaff from "./CorporateStaff/AdministrativeStaff";
import CorporateStaff from "./CorporateStaff/CorporateStaff";
import Presentation from "./Presentation/presentation";
import PresentationTwo from "./Presentation/PresentationTwo";

function Contacts() {
  return (
    <>
      <Presentation />
      <CorporateStaff />
      <PresentationTwo />
      <AdministrativeStaff />
    </>
  );
}

export default Contacts;
