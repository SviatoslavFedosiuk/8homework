const username = document.querySelector("#username");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", () => {
  const inputNameValue = username.value;
  const inputPswValue = password.value;
  const newName =  localStorage.setItem("username", JSON.stringify(inputNameValue));
  const newPsw = localStorage.setItem("password", JSON.stringify(inputPswValue));
});
username.value = JSON.parse(localStorage.getItem("username"));
password.value = JSON.parse(localStorage.getItem("password"));