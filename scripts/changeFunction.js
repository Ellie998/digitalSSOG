const h1Element = document.querySelector("h1");
const functionCharacteristicElement = document.getElementById(
  "description-characteristic"
);
const ulElementForAppList = document.getElementById("list-ul");

const functionObjectArray = new Array();
const url = decodeURI(window.location.href);
const functionName = url.substring(url.indexOf("#") + 1, url.length);
let functionCategory;

function getFunctionObjectInArray(functionData) {
  for (const functionObjectData of functionData) {
    const functionObjectName = functionObjectData.name; // object.functions is array and contain objects
    if (functionName == functionObjectName) {
      functionObjectArray.push(functionObjectData);
      functionCategory = functionObjectData.category;
      // console.log(functionObjectData);
      return;
    }
  }
}

function makeAppList() {
  console.log();
  for (const appName of functionObjectArray[0].app) {
    const newList = document.createElement("li");
    const newAnchor = document.createElement("a");
    const newAttribute = document.createAttribute("href");

    newAnchor.innerText = appName;
    newAttribute.value = `./app.html#${appName}`;

    ulElementForAppList.appendChild(newList);
    newList.appendChild(newAnchor);
    newAnchor.setAttributeNode(newAttribute);
  }
}

function changeHTML() {
  //change html text using object data
  h1Element.innerText = `${functionName} 기능 소개`;
  makeAppList();
  makeAppListAtMethods();
}

// read local JSON file in javascript
fetch("../data/function.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (functionData) {
    getFunctionObjectInArray(functionData);
    changeHTML();
  });
