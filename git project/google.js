const showBtn = document.getElementById("add");
const dialog = document.getElementById("dialog-url");
const jsCloseBtn = dialog.querySelector("#done");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});