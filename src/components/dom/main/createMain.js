import logoImg from "/src/assets/images/blog-logo.png";

export default function createMain(status) {
  const main = document.createElement("div");
  main.setAttribute("id", "main-div");
  if (status) main.classList.add("hidden");

  const content = document.createElement("div");
  content.classList.add("main-content");
  main.appendChild(content);

  const info = document.createElement("div");
  info.classList.add("main-info");
  content.appendChild(info);

  const text = document.createElement("h1");
  text.textContent = "ბლოგი";
  info.appendChild(text);

  const logo = new Image();
  logo.src = logoImg;
  info.appendChild(logo);

  return main;
}
