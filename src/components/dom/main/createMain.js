import blogLogoImg from "/src/assets/images/blog-logo.png";

export default function createMain(status) {
  const main = document.createElement("div");
  main.setAttribute("id", "main-div");
  if (status) main.classList.add("hidden");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  main.appendChild(mainContent);

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main-info");
  mainContent.appendChild(mainInfo);

  const blogText = document.createElement("h1");
  blogText.textContent = "ბლოგი";
  mainInfo.appendChild(blogText);

  const blogLogo = new Image();
  blogLogo.src = blogLogoImg;
  mainInfo.appendChild(blogLogo);

  return main;
}
