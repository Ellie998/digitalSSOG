const methodListElement = document.querySelectorAll("#main-main-wrap ol li");
const displayBox1Element = document.getElementById("display-box1");
const displayBox2Element = document.getElementById("display-box2");
const displayBox3Element = document.getElementById("display-box3");

for (const liElement of methodListElement) {
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
