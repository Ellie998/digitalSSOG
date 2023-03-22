const methodListElement = document.querySelectorAll("#main-main-wrap ol li");

for (const liElement of methodListElement) {
  liElement.addEventListener("click", (data) => {
    const appData = data.target.dataset.method;

    switch (appData) {
      case "전화어플 누른다":
        console.log(appData);
        break;
      case "전화번호 누른다":
        console.log(appData);
        break;
      case "통화버튼 누른다":
        console.log(appData);
        break;
      default:
        console.log(`Sorry, we are out of ${appData}.`);
    }
  });
}
