import phones from "../../phones.json";
import phonesTamplate from "../template.hbs";

const listRef = document.querySelector(".product-list");
const searchRef = document.querySelector(".search");

searchRef.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  localStorage.setItem("searchResult", value);

  render(value);
});
function render(value) {
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(value)
  );

  listRef.innerHTML = phonesTamplate({ phones: filteredPhones });
}
const savedValue = localStorage.getItem("searchResult") || "";

searchRef.value = savedValue;
render(savedValue);