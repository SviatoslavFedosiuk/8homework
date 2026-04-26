import phones from "../../phones.json";
import phonesTamplate from "../template.hbs";

const listRef = document.querySelector(".product-list");
const search = document.querySelector(".search");

listRef.innerHTML = phonesTamplate({ phones });

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
const search = localStorage.setItem("searchResult", JSON.stringify(value));
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(value)
  );

  listRef.innerHTML = phonesTamplate({ phones: filteredPhones });
});

search.value = JSON.parse(localStorage.getItem("searchResult"));