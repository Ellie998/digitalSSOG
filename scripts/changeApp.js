const h1Element = document.querySelector("h1");
const appCharacteristicElement = document.getElementById(
  "description-characteristic"
);
const appIMGElement = document.getElementById("description-img");
const appFunctionCoreElmenet = document.querySelector("#use ul");
const appDownSectionElement = document.getElementById("download");
const appDownNumElement = document.getElementById("description-downNum");
const appStarElement = document.getElementById("description-star");
const ulElementForFunctionList = document.querySelector("#use ul");

const appData = new Array();
const url = decodeURI(window.location.href);
const appName = url.substring(url.indexOf("#") + 1, url.length);

function getAppObjectInArray(array) {
  for (const object of array) {
    if (object.name == appName) {
      appData.push(object);
    }
  }
}

function changeHTML() {
  //change html text using object data
  h1Element.innerText = `${appName} 어플 소개`;

  appDownNumElement.innerText = `다운로드 횟수 : ${appData[0].downNum}`;
  appStarElement.innerText = `별점 : ${appData[0].star}`;
  appCharacteristicElement.innerText = appData[0].특징;
  // console.dir();
  appIMGElement.outerHTML = appData[0].imgLink;

  // appFunctionCoreElmenet.innerText = appData[0].core;
  // appDownSectionElement.innerText = appData[0].downLink;
}

function makeFunctionList() {
  const functionNames = appData[0].core;
  for (const functionName of functionNames) {
    const newList = document.createElement("li");
    const newAnchor = document.createElement("a");
    const newAttribute = document.createAttribute("href");

    newAnchor.innerText = functionName;
    newAttribute.value = `./function.html#${functionName}`;

    ulElementForFunctionList.appendChild(newList);
    newList.appendChild(newAnchor);
    newAnchor.setAttributeNode(newAttribute);
  }
}

// read local JSON file in javascript
fetch("../data/app.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    getAppObjectInArray(data);
    changeHTML();
    makeFunctionList();
    // add function list
  });
