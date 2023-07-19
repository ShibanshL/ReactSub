import HeaderBar from "./HeaderBar";
import MainBody from "./MainBody";
import BottomNavBar from "./BottomNavBar";
import "./AllCSSFiles.css";

function PhoneMain() {
  return (
    <div className="PhoneMain">
      <HeaderBar />
      {/* <div className="MainScreen"> */}
      <MainBody />
      {/* </div> */}
      <BottomNavBar />
    </div>
  );
}

export default PhoneMain;
