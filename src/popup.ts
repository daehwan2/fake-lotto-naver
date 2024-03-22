console.log("popup");

const changeBtn = document.querySelector("#change-btn");

changeBtn?.addEventListener("click", () => {
  const number1 = (document.querySelector("#number1") as HTMLInputElement)
    .value;
  const number2 = (document.querySelector("#number2") as HTMLInputElement)
    .value;
  const number3 = (document.querySelector("#number3") as HTMLInputElement)
    .value;
  const number4 = (document.querySelector("#number4") as HTMLInputElement)
    .value;
  const number5 = (document.querySelector("#number5") as HTMLInputElement)
    .value;
  const number6 = (document.querySelector("#number6") as HTMLInputElement)
    .value;

  chrome.storage.sync.set(
    { number1, number2, number3, number4, number5, number6 },
    () => {}
  );
});
