const methodListElements = document.querySelectorAll("#description-app li");
const numberElements = document.querySelectorAll("#numbers li");
const targetMethodElements = document.querySelectorAll(".target");
const displayBox1Element = document.getElementById("display-box1");
const displayBox2Element = document.getElementById("display-box2");
const displayBox3Element = document.getElementById("display-box3");
const numberBoxElement = document.getElementById("number-box");
const cancelBtnElement = document.getElementById("cancel-btn");

for (const liElement of methodListElements) {
  liElement.addEventListener("click", (data) => {
    const appData = data.target.dataset.method;
    switch (appData) {
      case "전화어플 누른다":
        displayBox2Element.classList.add("none");
        displayBox3Element.classList.add("none");
        displayBox1Element.classList.remove("none");
        break;
      case "전화번호 누른다":
        displayBox1Element.classList.add("none");
        displayBox3Element.classList.add("none");
        displayBox2Element.classList.remove("none");
        break;
      case "통화버튼 누른다":
        displayBox1Element.classList.add("none");
        displayBox2Element.classList.add("none");
        displayBox3Element.classList.remove("none");
        break;
      default:
        console.log(`Sorry, we are out of ${appData}.`);
    }
  });
}
for (const targetMethodElement of targetMethodElements) {
  targetMethodElement.addEventListener("click", (data) => {
    const appData = data.target.dataset.method;
    switch (appData) {
      case "전화어플 누른다":
        displayBox2Element.classList.add("none");
        displayBox3Element.classList.add("none");
        displayBox1Element.classList.remove("none");
        break;
      case "전화번호 누른다":
        displayBox1Element.classList.add("none");
        displayBox3Element.classList.add("none");
        displayBox2Element.classList.remove("none");
        break;
      case "통화버튼 누른다":
        displayBox1Element.classList.add("none");
        displayBox2Element.classList.add("none");
        displayBox3Element.classList.remove("none");
        break;
      default:
        console.log(`Sorry, we are out of ${appData}.`);
    }
  });
}

for (const numberElement of numberElements) {
  numberElement.addEventListener("click", (data) => {
    console.log(data.target.innerText);
    numberBoxElement.innerText += data.target.innerText;
    console.log(numberBoxElement.innerText);
  });
}

cancelBtnElement.addEventListener("click", () => {
  console.log(numberBoxElement.innerText);
  numberBoxElement.innerText = numberBoxElement.innerText.slice(
    0,
    numberBoxElement.innerText.length - 1
  );
});
