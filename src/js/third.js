import phones from "../../phones.json";
import phonesTamplate from "../template.hbs";

const listRef = document.querySelector(".product-list");
const searchRef = document.querySelector(".search");

listRef.innerHTML = phonesTamplate({ phones });

searchRef.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
const search = localStorage.setItem("searchResult", JSON.stringify(value));
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(value)
  );

  listRef.innerHTML = phonesTamplate({ phones: filteredPhones });
});

searchRef.value = JSON.parse(localStorage.getItem("searchResult"));