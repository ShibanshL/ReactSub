const collapseDiv = () => {
  let buttonCollapse = document.querySelector(".MainBody .TickerInfo button");

  let tickInfo = document.querySelector(".MainBody .TickerInfo");

  let tickerinfoButtonImg = document.querySelector(
    ".MainBody .TickerInfo button img"
  );
  let i = 0;

  let timeFrame = document.querySelectorAll(".TickerTimeFrame button");

  buttonCollapse.addEventListener("click", () => {
    i++;

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

  navButtn.addEventListener("click", () => {
    popUp.style.opacity = 1;
    popUp.style.left = "0%";
  });

  popUp.addEventListener("click", () => {
    popUp.style.opacity = 0;
    popUp.style.left = "100%";
  });
};

window.addEventListener("load", () => {
  collapseDiv();
  popupMenuNavbar();
});
