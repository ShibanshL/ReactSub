import GGear from "../assets/SVG/Setting.svg";
import GBell from "../assets/SVG/Bell.svg";
import GWallet from "../assets/SVG/wallet.svg";
import GCompass from "../assets/SVG/Compass.svg";

function BottomNavBar() {
  return (
    <>
      <div className="BottomNavBar">
        <img src={GWallet} alt="" />
        <img src={GBell} alt="" />
        <img src={GCompass} alt="" />

        <img src={GGear} alt="" />
      </div>
    </>
  );
}

export default BottomNavBar;
