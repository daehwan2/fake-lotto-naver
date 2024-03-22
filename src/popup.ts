const changeBtn = document.querySelector("#change-btn");
chrome.storage.sync.get(
  ["number1", "number2", "number3", "number4", "number5", "number6"],
  (result) => {
    const number1 = result?.number1;
    const number2 = result?.number2;
    const number3 = result?.number3;
    const number4 = result?.number4;
    const number5 = result?.number5;
    const number6 = result?.number6;

    (document.querySelector("#number1") as HTMLInputElement).value = number1;
    (document.querySelector("#number2") as HTMLInputElement).value = number2;
    (document.querySelector("#number3") as HTMLInputElement).value = number3;
    (document.querySelector("#number4") as HTMLInputElement).value = number4;
    (document.querySelector("#number5") as HTMLInputElement).value = number5;
  }
);

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
    () => {
      // @ts-ignore
      Swal.fire({
        icon: "success",
        title: "속일 준비 완료 😇",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  );
});
