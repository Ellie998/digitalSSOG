const mainWrapElement = document.getElementById("main-main-wrap");
let targetLinkElement;

function changeTargetListBackground(descriptionLists) {
  for (const descriptionList of descriptionLists) {
    if (descriptionList.innerText === targetLinkElement) {
      descriptionList.classList.add("target-list");
    } else {
      descriptionList.classList.remove("target-list");
    }
  }
}

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

    const numberBoxElement = document.getElementById("number-box");
    const cancelBtnElement = document.getElementById("cancel-btn");
    const displayBoxdElements = document.querySelectorAll(".displayBox");

    for (const liElement of methodListElements) {
      liElement.addEventListener("click", (data) => {
        // 모든 displayBox에 none class를 더한다.
        // 클릭된 Li의 innerText를 가져온다.
        // displayBox들 중에서 innerText와 동일한 data-method를 가진 displayBox를 찾는다.
        // 그 displayBox에 none class를 더한다.
        targetLinkElement = data.target.innerText;
        changeTargetListBackground(methodListElements);

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
        targetLinkElement = appData;
        changeTargetListBackground(methodListElements);

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
