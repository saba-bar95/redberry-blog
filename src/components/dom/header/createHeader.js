import logoImg from "/src/assets/images/redberry-logo.png";
import createLoginModal from "./loginModal/createLoginModal";
import displayBlogAdder from "../blogAdder/displayBlogAdder";

export default function createHeader(status) {
  const header = document.createElement("div");
  header.setAttribute("id", "header-div");

  const content = document.createElement("div");
  content.classList.add("header-content");
  header.appendChild(content);

  const logo = new Image();
  logo.src = logoImg;
  content.appendChild(logo);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-button");
  content.appendChild(entryBtn);

  const adderBtn = document.createElement("button");
  adderBtn.textContent = "დაამატე ბლოგი";
  adderBtn.classList.add("blog-adder-button");
  content.appendChild(adderBtn);

  if (status) entryBtn.classList.add("hidden");
  if (!status) adderBtn.classList.add("hidden");

  entryBtn.addEventListener("click", createLoginModal);

  adderBtn.addEventListener("click", displayBlogAdder);

  return header;
}
