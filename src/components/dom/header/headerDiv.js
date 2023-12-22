import redberryLogoImg from "/src/assets/images/redberry-logo.png";
import createLoginModal from "./loginModal/createLoginModal";

export default function createHeaderDiv(loginStatus) {
  const header = document.createElement("div");
  header.setAttribute("id", "header-div");

  const headerContent = document.createElement("div");
  headerContent.classList.add("header-content");
  header.appendChild(headerContent);

  const redberryLogo = new Image();
  redberryLogo.src = redberryLogoImg;
  headerContent.appendChild(redberryLogo);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-button");
  headerContent.appendChild(entryBtn);

  const blogAdderBtn = document.createElement("button");
  blogAdderBtn.textContent = "დაამატე ბლოგი";
  blogAdderBtn.classList.add("blog-adder-button");
  headerContent.appendChild(blogAdderBtn);

  if (loginStatus) entryBtn.classList.add("hidden");
  if (!loginStatus) blogAdderBtn.classList.add("hidden");

  entryBtn.addEventListener("click", createLoginModal);

  // blogAdderBtn.addEventListener("click", displayBlogAdderModal);

  return header;
}
