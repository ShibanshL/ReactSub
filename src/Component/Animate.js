const collapseDiv = () => {
  let buttonCollapse = document.querySelector(".MainBody .TickerInfo button");

  let tickInfo = document.querySelector(".MainBody .TickerInfo");

  let tickerinfoButtonImg = document.querySelector(
    ".MainBody .TickerInfo button img"
  );
  let i = 0;

  let timeFrame = document.querySelectorAll(".TickerTimeFrame button");

  let test = document.querySelectorAll(".TickerOptions .buySellOptions label");

  buttonCollapse.addEventListener("touchstart", (e) => {
    i++;

    e.currentTarget.addEventListener("click", () => {
      for (let j = 0; j < test.length; j++) {
        test[0].innerHTML = "working";
      }
      console.log("I got it");
    });
    e.stopPropagation();

    if (i % 2 != 0) {
      for (let j = 0; j < timeFrame.length; j++) {
        timeFrame[j].style.zIndex = 0;
      }
      tickInfo.style.height = "35vh";
      tickerinfoButtonImg.style.rotate = "90deg";
    }
    if (i % 2 == 0) {
      tickInfo.style.height = "25vh";
      tickerinfoButtonImg.style.rotate = "-90deg";
      setTimeout(() => {
        for (let j = 0; j < timeFrame.length; j++) {
          timeFrame[j].style.zIndex = 1;
        }
      }, 500);
    }
  });
};

const popupMenuNavbar = () => {
  let navButtn = document.querySelector(".HeaderBar div .ThreeDot ");
  let i = 0;

  let popUp = document.querySelector(".PopOver");

  let popUpMenu = document.querySelector(".PopOver .popOverOptions");

  navButtn.addEventListener("touchstart", () => {
    popUp.style.opacity = 1;
    popUp.style.left = "0%";
  });

  popUp.addEventListener("touchstart", () => {
    popUp.style.opacity = 0;
    popUp.style.left = "100%";
  });
};

window.addEventListener("load", () => {
  collapseDiv();
  popupMenuNavbar();
});
