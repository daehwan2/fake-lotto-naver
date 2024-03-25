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
    const numbers: string[] = [];
    numbers.push(number1);
    numbers.push(number2);
    numbers.push(number3);
    numbers.push(number4);
    numbers.push(number5);
    numbers.push(number6);

    const ballList = document.querySelectorAll(".winning_number .ball");

    ballList.forEach((ballEl, idx) => {
      if (numbers[idx]) {
        ballEl.innerHTML = numbers[idx];
      }
    });
  }
);
