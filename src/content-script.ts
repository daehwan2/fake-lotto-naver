console.log("content-script");

chrome.storage.sync.get(
  ["number1", "number2", "number3", "number4", "number5", "number6"],
  (result) => {
    console.log(result);
    const number1 = result?.number1;
    const number2 = result?.number2;
    const number3 = result?.number3;
    const number4 = result?.number4;
    const number5 = result?.number5;
    const number6 = result?.number6;

    const ballEl1 = document.querySelector(".winning_number .ball.type1");
    const ballEl2 = document.querySelector(".winning_number .ball.type2");
    const ballEl3 = document.querySelector(".winning_number .ball.type3");
    const ballEl4 = document.querySelector(".winning_number .ball.type4");
    const ballEl5 = document.querySelectorAll(".winning_number .ball.type5")[0];
    const ballEl6 = document.querySelectorAll(".winning_number .ball.type5")[1];

    if (ballEl1 && number1) ballEl1.innerHTML = number1;
    if (ballEl2 && number2) ballEl2.innerHTML = number2;
    if (ballEl3 && number3) ballEl3.innerHTML = number3;
    if (ballEl4 && number4) ballEl4.innerHTML = number4;
    if (ballEl5 && number5) ballEl5.innerHTML = number5;
    if (ballEl6 && number6) ballEl6.innerHTML = number6;
  }
);
