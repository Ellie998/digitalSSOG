const functionMethodElements = document.querySelector("#description-app");

function makeAppListAtMethods() {
  for (const methods of functionObjectArray[0].method) {
    const newList = document.createElement("li");
    const newDetails = document.createElement("details");
    const newSummary = document.createElement("summary");
    const newOl = document.createElement("ol");

    newOl.classList.add("methodNumOl");
    newOl.classList.add("margin-left");
    newSummary.innerText = methods.methodAppName;

    newDetails.appendChild(newSummary);
    newDetails.appendChild(newOl);
    newList.appendChild(newDetails);
    functionMethodElements.appendChild(newList);

    //새로 생긴 카테고리 하위에 그 카테고리에 해당하는 method 설명 더하기
    for (const method of methods.howto) {
      const newMethodList = document.createElement("li");
      const newMethodParagraph = document.createElement("p");
      const newMethodOl = document.createElement("ol");

      newMethodParagraph.textContent = `방법 ${method.methodNum}`;
      newMethodOl.classList.add("margin-left");

      newMethodList.appendChild(newMethodParagraph);
      newMethodList.appendChild(newMethodOl);
      newOl.appendChild(newMethodList);

      // newMethodOl에 method description 내용이 담긴 list 생성
      for (const methodContent of method.methodContent) {
        const newDescriptionList = document.createElement("li");

        newDescriptionList.textContent = methodContent;
        newDescriptionList.classList.add("list-hover");
        newDescriptionList.classList.add("description-list");

        newMethodOl.appendChild(newDescriptionList);
      }
    }
  }
}
