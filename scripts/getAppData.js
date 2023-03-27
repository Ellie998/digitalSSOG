const appCategoryElements = document.querySelector("#app-categorys");

function addAppCategoryList(appCategory) {
  console.log(appCategoryElements);
  const newList = document.createElement("li");
  const newDetails = document.createElement("details");
  const newSummary = document.createElement("summary");
  const newH3 = document.createElement("h3");
  const newOl = document.createElement("ol");

  // newList.classList.add("background-grey");
  newList.classList.add("border-radius-round");
  newList.classList.add("hover-box-shadow");
  newSummary.innerText = appCategory;
  newH3.innerText = appCategory;
  newH3.classList.add("none");

  newDetails.appendChild(newSummary);
  newDetails.appendChild(newH3);
  newDetails.appendChild(newOl);
  newList.appendChild(newDetails);
  appCategoryElements.appendChild(newList);
  return newH3;
}
// function addAppCategoryList(appCategory) {
//   const newList = document.createElement("li");
//   const newH3 = document.createElement("h3");
//   const newOl = document.createElement("ol");

//   // newList.classList.add("background-grey");
//   newList.classList.add("border-radius-round");
//   newList.classList.add("hover-box-shadow");
//   newH3.innerText = appCategory;

//   newList.appendChild(newH3);
//   newList.appendChild(newOl);
//   appCategoryElements.appendChild(newList);
//   return newH3;
// }

function addAppList(categoryElement, appName) {
  const newList = document.createElement("li");
  const newAnchor = document.createElement("a");
  const newAttribute = document.createAttribute("href");

  newAnchor.innerText = appName;
  newAttribute.value = `../app.html#${appName}`;
  newList.classList.add("animate-scale-up");

  categoryElement.nextElementSibling.appendChild(newList);
  newList.appendChild(newAnchor);
  newAnchor.setAttributeNode(newAttribute);
}

function findSameCategoryElement(categoryName) {
  const appElements = document.querySelectorAll("#app-categorys h3");
  let result = 0;
  // 카테고리명을 받는다.
  // 받아온 카테고리명과 동일한 카테고리 이름을 가진 h3 element를 찾아 return한다.
  for (const categoryElement of appElements) {
    if (categoryElement.textContent == categoryName) {
      return categoryElement;
    }
  }
  return false;
}

// 카테고리 element 내에 function 내용과 동일한 이름을 가진 list가 있으면 return 1, 없으면 0
function isSameAppInCategory(categoryElement, appName) {
  // category element h3의 nextElementSibling의 child인 모든 list를 가져온다.
  // 그 list들의 child인 a의 innerText와 functionName이 동일한지 확인한다.
  let result = 0;
  const appList = categoryElement.nextElementSibling.children;
  if (appList == false) {
    return;
  }

  for (const list of appList) {
    if (list.firstChild.innerText == appName) {
      result++;
    }
  }
  return result;
}

// read local JSON file in javascript
fetch(
  "https://gist.githubusercontent.com/Ellie998/490162e93ad71f777d70c2a91e1a7623/raw/9d2cb753d30654746d296d7bf0413672f632933e/app.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (appData) {
    for (const appObjectData of appData) {
      const appObjectDataCategorys = appObjectData.category;
      for (const appObjectDataCategory of appObjectDataCategorys) {
        let categoryH3Element = findSameCategoryElement(appObjectDataCategory);

        if (categoryH3Element === false) {
          categoryH3Element = addAppCategoryList(appObjectDataCategory);
        }

        const isSameListResult = isSameAppInCategory(
          categoryH3Element,
          appObjectData.category
        );

        if (isSameListResult == 0) {
          addAppList(categoryH3Element, appObjectData.name);
        }
      }
    }
  });
