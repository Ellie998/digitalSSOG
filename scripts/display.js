const methodListElement = document.querySelectorAll("#main-main-wrap ol li");

for (const liElement of methodListElement) {
  liElement.addEventListener("click", (data) => {
    console.dir(data.target.dataset.method);
  });
}
