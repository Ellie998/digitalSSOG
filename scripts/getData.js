const appArray = new Array();
const categoryElements = document.querySelectorAll("#function-categorys h3");

function addList(categoryElement, functionName) {
  const newList = document.createElement("li");
  const newAnchor = document.createElement("a");
  const newAttribute = document.createAttribute("href");

  newAnchor.innerText = functionName;
  newAttribute.value = `../function.html#${functionName}`;

  categoryElement.nextElementSibling.appendChild(newList);
  newList.appendChild(newAnchor);
  newAnchor.setAttributeNode(newAttribute);
}

function findSameCategory(categoryName) {
  // 카테고리명을 받는다.
  // 받아온 카테고리명과 동일한 카테고리 이름을 가진 h3 element를 찾아 return한다.
  for (const categoryElement of categoryElements) {
    if (categoryElement.textContent == categoryName) {
      return categoryElement;
    }
  }
}

// 카테고리 element 내에 function 내용과 동일한 이름을 가진 list가 있으면 return 1, 없으면 0
function isSameListInCategory(categoryElement, functionName) {
  // category element h3의 nextElementSibling의 child인 모든 list를 가져온다.
  // 그 list들의 child인 a의 innerText와 functionName이 동일한지 확인한다.
  let result = 0;
  const functionList = categoryElement.nextElementSibling.children;
  for (const list of functionList) {
    if (list.firstChild.innerText == functionName) {
      result++;
    }
  }
  return result;
}

// read local JSON file in javascript
fetch("../data/app.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (appArrayData) {
    for (const appObjectData of appArrayData) {
      // 가져온 appArrayData의 appObjectData를 하나씩 가져와 appObjectDataCategory와 functions를 변수에 저장한다.
      const appObjectDataCategory = appObjectData.category;
      const functionsArrayData = appObjectData.functions; // appObjectData.functions is array and contain

      // 카테고리와 동일한 카테고리 element를 찾는다.
      const categoryH3Element = findSameCategory(appObjectDataCategory);

      // functions array의 function object들을 꺼낸다.
      for (const functionObjectData of functionsArrayData) {
        // array의 object들은 function이고, nextElementSibling인 ol에 function.name과 이미 동일한 innerText를 가진 li > a가 존재하는지 확인한다.
        const isSameListResult = isSameListInCategory(
          categoryH3Element,
          functionObjectData.category
        );
        // 동일한 list가 이미 존재하지 않는다면 해당 functionName을 가지는 list를 추가한다.
        if (isSameListResult == 0) {
          addList(categoryH3Element, functionObjectData.name);
        }
      }
    }
  });
