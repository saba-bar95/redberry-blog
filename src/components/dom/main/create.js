import logoImg from "/src/assets/images/blog-logo.png";

export default function createMain() {
  const status = JSON.parse(localStorage.getItem("blog-adder-status"));

  const main = document.createElement("div");
  main.setAttribute("id", "main-div");
  if (status) main.classList.add("hidden");

  const info = document.createElement("div");
  info.classList.add("main-info");
  main.appendChild(info);

  const text = document.createElement("h1");
  text.textContent = "ბლოგი";
  info.appendChild(text);

  const logo = new Image();
  logo.src = logoImg;
  info.appendChild(logo);

  return main;
}
