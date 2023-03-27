const functionCategoryElements = document.querySelector("#function-categorys");

function addFunctionCategoryList(functionCategory) {
  //   <details>
  //   <summary></summary>
  //    <h3>제목입니다.</h3>
  //   <ol></ol>
  // </details>
  const newList = document.createElement("li");
  const newDetails = document.createElement("details");
  const newSummary = document.createElement("summary");
  const newH3 = document.createElement("h3");
  const newOl = document.createElement("ol");

  // newList.classList.add("background-grey");
  newList.classList.add("border-radius-round");
  newList.classList.add("hover-box-shadow");
  newSummary.innerText = functionCategory;
  newH3.innerText = functionCategory;
  newH3.classList.add("none");

  newDetails.appendChild(newSummary);
  newDetails.appendChild(newH3);
  newDetails.appendChild(newOl);
  newList.appendChild(newDetails);
  functionCategoryElements.appendChild(newList);
  // newList.appendChild(newH3);
  // newList.appendChild(newOl);

  // functionCategoryElements.appendChild(newList);
  return newH3;
}

function addFunctionList(categoryElement, functionName) {
  const newList = document.createElement("li");
  const newAnchor = document.createElement("a");
  const newAttribute = document.createAttribute("href");

  newAnchor.innerText = functionName;
  newAttribute.value = `../function.html#${functionName}`;
  newList.classList.add("animate-scale-up");

  categoryElement.nextElementSibling.appendChild(newList);
  newList.appendChild(newAnchor);
  newAnchor.setAttributeNode(newAttribute);
}

function findSameCategoryElement(categoryName) {
  const functionElements = document.querySelectorAll("#function-categorys h3");
  let result = 0;
  // 카테고리명을 받는다.
  // 받아온 카테고리명과 동일한 카테고리 이름을 가진 h3 element를 찾아 return한다.
  for (const categoryElement of functionElements) {
    if (categoryElement.textContent == categoryName) {
      return categoryElement;
    }
  }
  return false;
}

// 카테고리 element 내에 function 내용과 동일한 이름을 가진 list가 있으면 return 1, 없으면 0
function isSameFunctionInCategory(categoryElement, functionName) {
  // category element h3의 nextElementSibling의 child인 모든 list를 가져온다.
  // 그 list들의 child인 a의 innerText와 functionName이 동일한지 확인한다.
  let result = 0;
  const functionList = categoryElement.nextElementSibling.children;
  if (functionList == false) {
    return;
  }

  for (const list of functionList) {
    if (list.firstChild.innerText == functionName) {
      result++;
    }
  }
  return result;
}

// read local JSON file in javascript
fetch(
  "https://gist.githubusercontent.com/Ellie998/490162e93ad71f777d70c2a91e1a7623/raw/9d2cb753d30654746d296d7bf0413672f632933e/function.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (functionData) {
    for (const functionObjectData of functionData) {
      const functionObjectDataCategory = functionObjectData.category;

      let categoryH3Element = findSameCategoryElement(
        functionObjectDataCategory
      );

      if (categoryH3Element === false) {
        categoryH3Element = addFunctionCategoryList(functionObjectDataCategory);
      }

      const isSameListResult = isSameFunctionInCategory(
        categoryH3Element,
        functionObjectData.category
      );

      if (isSameListResult == 0) {
        addFunctionList(categoryH3Element, functionObjectData.name);
      }
    }
  });
