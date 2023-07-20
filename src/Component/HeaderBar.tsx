// import ThreeDot from "../assets/threeDot.svg";

import Left from "../assets/SVG/Left.svg";
import ThreeDot from "../assets/SVG/ThreeDot.svg";
import Share from "../assets/SVG/Share.svg";
import Edit from "../assets/SVG/Edit.svg";
import Remove from "../assets/SVG/Remove.svg";
import Info from "../assets/SVG/Info.svg";

function HeaderBar() {
  return (
    <>
      <div className="HeaderBar">
        <img src={Left} alt="" />
        <label htmlFor="#">Bitcoin Wallet</label>
        <div>
          <img src={ThreeDot} className="ThreeDot" alt="" />
        </div>
      </div>

      <div className="PopOver">
        <div className="popOverOptions">
          <div>
            <label>Edit</label>
            <img src={Edit} />
          </div>
          <div>
            <label>Courer Info</label>
            <img src={Info} />
          </div>
          <div>
            <label>Share</label>
            <img src={Share} />
          </div>
          <div>
            <label>Remove</label>
            <img src={Remove} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
