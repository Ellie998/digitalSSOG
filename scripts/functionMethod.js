const functionMethodElements = document.querySelector("#description-app");

function makeAppListAtMethods() {
  for (const appName of functionObjectArray[0].app) {
    const newList = document.createElement("li");
    const newDetails = document.createElement("details");
    const newSummary = document.createElement("summary");
    const newOl = document.createElement("ol");

    newOl.classList.add("methodNumOl");
    newOl.classList.add("margin-left");
    newSummary.innerText = appName;

    newDetails.appendChild(newSummary);
    newDetails.appendChild(newOl);
    newList.appendChild(newDetails);
    functionMethodElements.appendChild(newList);
  }
}

function makeMethodListAtMethods() {
  const methodElementsInApp = document.querySelectorAll(".methodNumOl");
  // console.log(methodElementsInApp);

  for (const methods of functionObjectArray[0].method) {
    for (const method of methods.howto) {
      const newList = document.createElement("li");
      const newParagraph = document.createElement("p");
      const newOl = document.createElement("ol");

      newParagraph.textContent = `방법 ${method.methodNum}`;
      newOl.classList.add("margin-left");

      newList.appendChild(newParagraph);
      newList.appendChild(newOl);
      methodElementsInApp[method.methodNum - 1].appendChild(newList);
    }
  }
}
function makeMethodListContentAtMethods() {
  const methodElementsInApp = document.querySelectorAll(".methodNumOl ol");
  // console.log(methodElementsInApp);

  for (const methods of functionObjectArray[0].method) {
    for (const method of methods.howto) {
      for (const methodContent of method.methodContent) {
        const newList = document.createElement("li");

        newList.textContent = methodContent;
        newList.classList.add("list-hover");
        newList.classList.add("description-list");

        methodElementsInApp[method.methodNum - 1].appendChild(newList);
      }
    }
  }
}
