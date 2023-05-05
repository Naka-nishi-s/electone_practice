const MESSAGE_1 = "テスト1";
const MESSAGE_2 = "テスト2";

const element = document.getElementById("click-point");
element.addEventListener("click", () => {
  if (element.innerHTML === MESSAGE_1) {
    element.innerHTML = MESSAGE_2;
  } else {
    element.innerHTML = MESSAGE_1;
  }
});

element.click();
