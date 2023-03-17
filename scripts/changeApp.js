const h1Element = document.querySelector("h1");
const appCharacteristicElement = document.getElementById(
  "description-characteristic"
);
const appIMGElement = document.getElementById("description-img");
const appDownSectionElement = document.getElementById("download");
const appDownNumElement = document.getElementById("description-downNum");
const appStarElement = document.getElementById("description-star");
const functionsUlElement = document.querySelector("#main-main ul");

const functionCategoryElements = document.querySelector("#function-categorys");

const choicedAppObject = new Array();
const choicedFunctionObject = new Array();
let appCategory;

const url = decodeURI(window.location.href);
const appUrlName = url.substring(url.indexOf("#") + 1, url.length);

function getAppObjectInArray(appData) {
  for (const appObjectData of appData) {
    if (appObjectData.name == appUrlName) {
      choicedAppObject.push(appObjectData);
    }
  }
}

function getObjectInDataAndPush(data, array, property) {
  for (const objectData of data) {
    if (property == "app") {
      for (const item of objectData[property]) {
        if (item == appUrlName) {
          array.push(objectData);
        }
      }
    } else {
      if (objectData[property] == appUrlName) {
        array.push(objectData);
      }
    }
  }
}

function changeHTML() {
  //change html text using object data
  h1Element.innerText = `${appUrlName} 어플 소개`;

  appDownNumElement.innerText = `다운로드 횟수 : ${choicedAppObject[0].downNum}`;
  appStarElement.innerText = `별점 : ${choicedAppObject[0].star}`;
  appCharacteristicElement.innerText = choicedAppObject[0].charateristic;
  // console.dir();
  appIMGElement.outerHTML = choicedAppObject[0].imgLink;

  // appFunctionCoreElmenet.innerText = appData[0].core;
  // appDownSectionElement.innerText = appData[0].downLink;
}

///
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
  // newList.classList.add("border-radius-round");
  // newList.classList.add("hover-box-shadow");
  newSummary.innerText = functionCategory;
  newH3.innerText = functionCategory;

  newDetails.appendChild(newSummary);
  newDetails.appendChild(newH3);
  newDetails.appendChild(newOl);
  newList.appendChild(newDetails);
  functionCategoryElements.appendChild(newList);
  return newH3;
}

function addFunctionList(categoryElement, functionName) {
  const newList = document.createElement("li");
  const newAnchor = document.createElement("a");
  const newAttribute = document.createAttribute("href");

  newAnchor.innerText = functionName;
  newAttribute.value = `../function.html#${functionName}`;

  categoryElement.nextElementSibling.appendChild(newList);
  newList.appendChild(newAnchor);
  newAnchor.setAttributeNode(newAttribute);
}

function findSameCategoryElement(categoryName) {
  const functionElements = document.querySelectorAll("#function-categorys h3");
  // 카테고리명을 받는다.
  // 받아온 카테고리명과 동일한 카테고리 이름을 가진 h3 element를 찾아 return한다.
  for (const categoryElement of functionElements) {
    console.dir(categoryElement);
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
fetch("../data/app.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (appData) {
    // getAppObjectInArray(appData);
    getObjectInDataAndPush(appData, choicedAppObject, "name");
    changeHTML();
  });

// // read local JSON file in javascript
fetch("../data/function.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (functionData) {
    getObjectInDataAndPush(functionData, choicedFunctionObject, "app");
    // 동일한 object가 존재한다면 해당하는 functionData.name을 더한다.

    for (const item of choicedFunctionObject) {
      const functionCategory = item.category;
      appCategory = item.category;
      const functionName = item.name;

      let sameCategoryH3Element = findSameCategoryElement(functionCategory);

      if (sameCategoryH3Element === false) {
        sameCategoryH3Element = addFunctionCategoryList(functionCategory);
      }

      const isSameListResult = isSameFunctionInCategory(
        sameCategoryH3Element,
        functionCategory
      );

      if (isSameListResult == 0) {
        addFunctionList(sameCategoryH3Element, functionName);
      }
    }
  });
