const extraFunctionUlElement = document.getElementById("function-extra");
const extraFunctionObjectArray = new Array();

function getExtraFunctionObjectInArray(extraFunctionData) {
  for (const extraFunctionObjectData of extraFunctionData) {
    const functionObjectCategory = extraFunctionObjectData.category; // object.functions is array and contain objects
    if (functionCategory == functionObjectCategory) {
      extraFunctionObjectArray.push(extraFunctionObjectData);
      return;
    }
  }
}

function makeExtraFunctionList() {
  for (const extraFunctionName of extraFunctionObjectArray[0].function) {
    const newList = document.createElement("li");
    const newDetails = document.createElement("details");
    const newSummary = document.createElement("summary");
    const newOl = document.createElement("ol");

    newOl.classList.add("extraFunctionNumOl");
    newSummary.innerText = extraFunctionName;

    newDetails.appendChild(newSummary);
    newDetails.appendChild(newOl);
    newList.appendChild(newDetails);
    extraFunctionUlElement.appendChild(newList);
  }
}

function makeExtraMethodListAtMethods() {
  const extraFunctionElementsInApp = document.querySelectorAll(
    ".extraFunctionNumOl"
  );
  // console.log(methodElementsInApp);

  for (const methods of extraFunctionObjectArray[0].method) {
    for (const method of methods.howto) {
      const newList = document.createElement("li");
      const newParagraph = document.createElement("p");
      const newOl = document.createElement("ol");

      newParagraph.textContent = `방법 ${method.methodNum}`;

      newList.appendChild(newParagraph);
      newList.appendChild(newOl);
      extraFunctionElementsInApp[method.methodNum - 1].appendChild(newList);
    }
  }
}
function makeMethodListContentAtExtraMethods() {
  const methodElementsInApp = document.querySelectorAll(
    ".extraFunctionNumOl ol"
  );
  // console.log(methodElementsInApp);

  for (const methods of extraFunctionObjectArray[0].method) {
    for (const method of methods.howto) {
      for (const methodContent of method.methodContent) {
        const newList = document.createElement("li");

        newList.textContent = methodContent;

        methodElementsInApp[method.methodNum - 1].appendChild(newList);
      }
    }
  }
}

fetch(
  "https://gist.githubusercontent.com/Ellie998/490162e93ad71f777d70c2a91e1a7623/raw/9d2cb753d30654746d296d7bf0413672f632933e/extraFunction.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (extraFunctionData) {
    getExtraFunctionObjectInArray(extraFunctionData);
    makeExtraFunctionList();
    makeExtraMethodListAtMethods();
    makeMethodListContentAtExtraMethods();
  });
