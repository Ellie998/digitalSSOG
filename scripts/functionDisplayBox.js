const mainWrapElement = document.getElementById("main-main-wrap");

// console.log(mainWrapElement);

// const newList = document.createElement("div");
// newList.innerHTML = "";
// mainWrapElement.appendChild(newList);

fetch("display.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    // document.querySelector("header").innerHTML = data;
    const newList = document.createElement("div");
    newList.innerHTML = data;
    mainWrapElement.appendChild(newList);

    const methodListElements = document.querySelectorAll(".description-list");
    const numberElements = document.querySelectorAll("#numbers li");
    const targetMethodElements = document.querySelectorAll(".target");
    const displayBox1Element = document.getElementById("display-box1");
    const displayBox2Element = document.getElementById("display-box2");
    const displayBox3Element = document.getElementById("display-box3");
    const numberBoxElement = document.getElementById("number-box");
    const cancelBtnElement = document.getElementById("cancel-btn");
    const displayBoxdElements = document.querySelectorAll(".displayBox");

    for (const liElement of methodListElements) {
      liElement.addEventListener("click", (data) => {
        // 모든 displayBox에 none class를 더한다.
        // 클릭된 Li의 innerText를 가져온다.
        // displayBox들 중에서 innerText와 동일한 data-method를 가진 displayBox를 찾는다.
        // 그 displayBox에 none class를 더한다.

        displayBoxdElements.forEach((displayBoxElement) => {
          displayBoxElement.classList.add("none");

          if (displayBoxElement.dataset.method == liElement.innerText) {
            displayBoxElement.classList.remove("none");
          }
        });
      });
    }

    for (const targetMethodElement of targetMethodElements) {
      targetMethodElement.addEventListener("click", (data) => {
        const appData = data.target.dataset.nextMethod;

        displayBoxdElements.forEach((displayBoxElement) => {
          displayBoxElement.classList.add("none");

          if (displayBoxElement.dataset.method == appData) {
            displayBoxElement.classList.remove("none");
          }
        });
      });
    }

    for (const numberElement of numberElements) {
      numberElement.addEventListener("click", (data) => {
        console.log(data.target.innerText);
        numberBoxElement.innerText += data.target.innerText;
      });
    }

    cancelBtnElement.addEventListener("click", () => {
      numberBoxElement.innerText = numberBoxElement.innerText.slice(
        0,
        numberBoxElement.innerText.length - 1
      );
    });
  });
