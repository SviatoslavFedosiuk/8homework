const inputRef = document.querySelector("#bookmarkInput");
const buttonRef = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");
const text = document.querySelector("p");

function createBookmark(url) {
  const li = document.createElement("li");
  li.classList.add("bookmarkItem");

  const a = document.createElement("a");
  a.classList.add("bookmarkLink");
  a.href = url;
  a.textContent = url;
  localStorage.setItem("links", JSON.stringify(url));
  const buttonClose = document.createElement("button");
  buttonClose.classList.add("bookmarkButtonClose");
  buttonClose.textContent = "X";

  buttonClose.addEventListener("click", () => {
    li.remove();
    localStorage.removeItem("links");
  });

  li.appendChild(a);
  li.appendChild(buttonClose);

  return li;
}
const btn = document.getElementsByClassName("bookmarkButtonClose");

buttonRef.addEventListener("click", () => {
  const inputValue = inputRef.value;

  if (inputValue === "") {
    text.textContent = "Enter URL";
    return;
  }

  if (!inputValue.includes("https")) {
    text.textContent = "Enter correct URL";
    return;
  }

  text.textContent = "";

  inputRef.value = "";
  const bookmark = createBookmark(inputValue);
  listRef.appendChild(bookmark);
});
