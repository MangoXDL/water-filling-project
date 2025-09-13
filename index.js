function changeBackground() {
  // const color1 = `rgb(${6}, ${80}, ${199})`;
  // const color2 = `rgb(${6}, ${80}, ${199})`;

  console.log(color1, color2);

  const root = document.querySelector(":root");
  // root.style.setProperty("--color-top", color1);
  // root.style.setProperty("--color-bottom", color2);
}

const TFPLiquid = document.querySelector(".TFPLiquid");
const FPLiquid = document.querySelector(".FPLiquid");
const SFPLiquid = document.querySelector(".SFPLiquid");
const OPLiquid = document.querySelector(".OPLiquid");
const jarLid = document.querySelector(".jarLid");
const button = document.querySelector(".button");
const jarStatus = document.querySelector(".jar-status");
const liquid = document.querySelector(".liquid");
const liquid2 = document.querySelector(".liquid2");
const liquid3 = document.querySelector(".liquid3");
const liquid4 = document.querySelector(".liquid4");

let clicks = 0;

const clickingButton = button.addEventListener("click", async function () {
  clicks++;
  console.log(clicks);

  if (clicks === 1) {
    TFPLiquid.style.setProperty("--tip", "100%");
    if (TFPLiquid === null) {
      return;
    }
    TFPLiquid.addEventListener("transitionend", function transitionCheck() {
      TFPLiquid.removeEventListener("transitionend", transitionCheck);

      window.TFPLiquidComplete = true;
    });
  }

  // TFPLiquid.style.setProperty("--color-top", `rgb(${6}, ${80}, ${199})`);
  // TFPLiquid.style.setProperty("--color-bottom", `rgb(${6}, ${80}, ${199})`);
  if (clicks === 2) {
    const checkComplete = () => {
      if (window.TFPLiquidComplete) {
        FPLiquid.style.setProperty("--tip", "100%");
      } else {
        setTimeout(checkComplete);
      }
    };
    checkComplete();

    FPLiquid.addEventListener("transitionend", function transitionCheck() {
      FPLiquid.removeEventListener("transitionend", transitionCheck);
      window.FPLiquidComplete = true;
    });
  }

  if (clicks === 3) {
    const checkComplete = () => {
      if (window.FPLiquidComplete) {
        SFPLiquid.style.setProperty("--tip", "100%");
      } else {
        setTimeout(checkComplete);
      }
    };
    checkComplete();

    SFPLiquid.addEventListener("transitionend", function transitionCheck() {
      SFPLiquid.removeEventListener("transitionend", transitionCheck);
      window.SFPLiquidComplete = true;
    });
  }

  if (clicks === 4) {
    const checkComplete = () => {
      if (window.SFPLiquidComplete) {
        OPLiquid.style.setProperty("--tip", "100%");
      } else {
        setTimeout(checkComplete);
      }
    };
    checkComplete();
    jarStatus.textContent = "jar is full";
  }

  if (clicks === 5) {
    OPLiquid.style.setProperty("--tip", "0%");
    setTimeout(() => {
      SFPLiquid.style.setProperty("--tip", "0%");
    }, 3000);
    setTimeout(() => {
      FPLiquid.style.setProperty("--tip", "0%");
    }, 6000);
    setTimeout(() => {
      TFPLiquid.style.setProperty("--tip", "0%");
    }, 9000);
    jarStatus.textContent = "jar is empty";
    clicks = 0;
    window.TFPLiquidComplete = false;
    window.FPLiquidComplete = false;
    window.SFPLiquidComplete = false;
  }
});

// jarLid.classList.toggle("jarAnim");
// liquid.classList.toggle("liquidAnim");
// liquid.style.setProperty("--color-top", `rgb(${6}, ${80}, ${199})`);
// liquid.style.setProperty("--color-bottom", `rgb(${6}, ${80}, ${199})`);
// liquid2.classList.toggle("liquidAnim2");
// liquid2.style.setProperty("--color-top", `rgb(${6}, ${80}, ${199})`);
// liquid2.style.setProperty("--color-bottom", `rgb(${6}, ${80}, ${199})`);
// liquid3.classList.toggle("liquidAnim3");
// liquid3.style.setProperty("--color-top", `rgb(${6}, ${80}, ${199})`);
// liquid3.style.setProperty("--color-bottom", `rgb(${6}, ${80}, ${199})`);
// liquid4.classList.toggle("liquidAnim4");
// liquid4.style.setProperty("--color-top", `rgb(${6}, ${80}, ${199})`);
// liquid4.style.setProperty("--color-bottom", `rgb(${6}, ${80}, ${199})`);
