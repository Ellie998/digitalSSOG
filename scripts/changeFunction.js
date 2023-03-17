const h1Element = document.querySelector("h1");
const functionCharacteristicElement = document.getElementById(
  "description-characteristic"
);
const ulElementForAppList = document.getElementById("list-ul");

const functionObjectArray = new Array();
const url = decodeURI(window.location.href);
const functionName = url.substring(url.indexOf("#") + 1, url.length);

function getFunctionObjectInArray(functionData) {
  for (const functionObjectData of functionData) {
    const functionObjectName = functionObjectData.name; // object.functions is array and contain objects
    if (functionName == functionObjectName) {
      functionObjectArray.push(functionObjectData);
      return;
    }
  }
}

function makeAppList() {
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
  makeMethodListAtMethods();
  makeMethodListContentAtMethods();
  // appCharacteristicElement.innerText = functionData[0].특징;
  // console.dir();
}

// read local JSON file in javascript
fetch("../data/function.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (functionData) {
    getFunctionObjectInArray(functionData);
    console.log(functionObjectArray);
    changeHTML();
  });
