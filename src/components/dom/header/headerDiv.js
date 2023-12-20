import redberryLogoImg from "/src/assets/images/redberry-logo.png";
import blogLogoImg from "/src/assets/images/blog-logo.png";
import createLoginModal from "./createLoginModal";

export default function createHeaderDiv(loginStatus) {
  const header = document.createElement("div");
  header.setAttribute("id", "header-div");

  const upperHeader = document.createElement("div");
  upperHeader.classList.add("upper-header");
  header.appendChild(upperHeader);

  const redberryLogo = new Image();
  redberryLogo.src = redberryLogoImg;
  upperHeader.appendChild(redberryLogo);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-button");
  upperHeader.appendChild(entryBtn);

  const lowerHeader = document.createElement("div");
  lowerHeader.classList.add("lower-header");
  header.appendChild(lowerHeader);

  const blogText = document.createElement("h1");
  blogText.textContent = "ბლოგი";
  lowerHeader.appendChild(blogText);

  const blogLogo = new Image();
  blogLogo.src = blogLogoImg;
  lowerHeader.appendChild(blogLogo);

  const blogAdder = document.createElement("button");
  blogAdder.textContent = "დაამატე ბლოგი";
  blogAdder.classList.add("blog-adder-button");
  upperHeader.appendChild(blogAdder);

  if (loginStatus) entryBtn.classList.add("hidden");
  if (!loginStatus) blogAdder.classList.add("hidden");

  entryBtn.addEventListener("click", function () {
    createLoginModal();
  });

  return header;
}
