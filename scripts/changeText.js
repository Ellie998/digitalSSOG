const h1Element = document.querySelector("h1");
const appCharacteristicElement = document.getElementById(
  "app-description-characteristic"
);
const appIMGElement = document.getElementById("app-description-img");
const appFunctionCoreElmenet = document.querySelector("#app-use ul");
const appDownSectionElement = document.getElementById("app-download");
const appDownNumElement = document.getElementById("app-description-downNum");
const appStarElement = document.getElementById("app-description-star");

const appData = new Array();
const url = decodeURI(window.location.href);
const appName = url.substring(url.indexOf("#") + 1, url.length);

// read local JSON file in javascript
fetch("../data/appData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // get app object and save to array appName
    for (const item of data) {
      if (item.name == appName) {
        appData.push(item);
      }
    }
    //change html text using object data
    h1Element.innerText = `${appData[0].name} 어플 소개`;
    appDownNumElement.innerText = `다운로드 횟수 : ${appData[0].downNum}`;
    appStarElement.innerText = `별점 : ${appData[0].star}`;
    appCharacteristicElement.innerText = appData[0].특징;
    // console.dir();
    appIMGElement.outerHTML = appData[0].imgLink;

    // appFunctionCoreElmenet.innerText = appData[0].core;
    // appDownSectionElement.innerText = appData[0].downLink;
  });
