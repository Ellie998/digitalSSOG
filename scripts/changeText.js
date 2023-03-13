const h1Element = document.querySelector("h1");
const appCharacteristicElement = document.getElementById(
  "description-characteristic"
);
const ulElementForAppList = document.getElementById("list-ul");
const appFunctionCoreElement = document.querySelector("#use ul");

const appData = new Array();
const url = decodeURI(window.location.href);
const functionName = url.substring(url.indexOf("#") + 1, url.length);

function getFunctionObjectInArray(array) {
  for (const object of array) {
    const functionNameArray = object.core;
    for (const functionNameItem of functionNameArray) {
      if (functionNameItem == functionName) {
        appData.push(object);
      }
    }
  }
}

function makeAppList(data) {
  for (const object of appData) {
    const newList = document.createElement("li");
    const newAnchor = document.createElement("a");
    const newAttribute = document.createAttribute("href");

    newAnchor.innerText = object.name;
    newAttribute.value = `./app.html#${object.name}`;

    ulElementForAppList.appendChild(newList);
    newList.appendChild(newAnchor);
    newAnchor.setAttributeNode(newAttribute);
  }
}

function changeHTML() {
  //change html text using object data
  h1Element.innerText = `${functionName} 기능 소개`;
  makeAppList();
  // appCharacteristicElement.innerText = appData[0].특징;
  // console.dir();
}

// read local JSON file in javascript
fetch("../data/appData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    getFunctionObjectInArray(data);
    console.log(appData);
    changeHTML();
  });
