import fetchBlogs from "../../../logic/blogs/fetch";
import relatedBlogs from "./relatedBlogs/create";
import backArrowImg from "/src/assets/images/back-arrow.png";

export default function createBlogContent(data) {
  const body = document.querySelector("body");
  const mainDiv = document.querySelector("#main-div");
  mainDiv.classList.add("hidden");

  const blog = document.createElement("div");
  blog.setAttribute("id", "blog");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = backArrowImg;
  blog.appendChild(backArrow);

  const content = document.createElement("div");
  content.classList.add("blog-content");
  blog.appendChild(content);

  const image = new Image();
  image.src = data.image;
  content.appendChild(image);

  const info = document.createElement("div");
  info.classList.add("blog-info");
  content.appendChild(info);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper-div");
  info.appendChild(wrapper);

  const author = document.createElement("h2");
  author.textContent = data.author;
  wrapper.appendChild(author);

  const dateEmail = document.createElement("p");
  dateEmail.textContent = `${data.publish_date}  •  ${data.email}`;
  wrapper.appendChild(dateEmail);

  const title = document.createElement("h1");
  title.textContent = data.title;
  info.appendChild(title);

  const categories = document.createElement("div");
  categories.classList.add("categories");
  info.appendChild(categories);

  data.categories.forEach((el) => {
    const category = document.createElement("div");
    category.textContent = el.title;
    category.style.color = el.text_color;
    category.style.backgroundColor = el.background_color;
    category.classList.add("category", `category-${el.id}`);
    categories.appendChild(category);
  });

  const description = document.createElement("p");
  description.textContent = data.description;
  description.classList.add("description-para");
  content.appendChild(description);

  const related = document.createElement("div");
  related.classList.add("related");
  blog.appendChild(related);

  const upper = document.createElement("div");
  upper.classList.add("upper");
  related.appendChild(upper);

  const text = document.createElement("h1");
  text.textContent = "მსგავსი სტატიები";
  upper.appendChild(text);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons-div");
  upper.appendChild(buttons);

  buttons.appendChild(createLeftSVG());
  buttons.appendChild(createRightSVG());

  const lower = document.createElement("div");
  lower.classList.add("lower");
  related.appendChild(lower);

  fetchBlogs(
    "https://api.blog.redberryinternship.ge/api",
    "fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a"
  ).then((data2) => {
    relatedBlogs(data, data2, lower);
  });

  backArrow.addEventListener("click", function () {
    mainDiv.classList.remove("hidden");
    blog.remove();
  });

  body.appendChild(blog);
}

function createLeftSVG() {
  let svgNS = "http://www.w3.org/2000/svg"; //namespace
  let svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "44");
  svg.setAttribute("height", "44");
  svg.setAttribute("viewBox", "0 0 44 44");
  svg.setAttribute("fill", "none");

  let rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", "44");
  rect.setAttribute("height", "44");
  rect.setAttribute("rx", "22");
  rect.setAttribute("fill", "#E4E3EB");
  svg.appendChild(rect);

  let path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
  );
  path.setAttribute("fill", "#F3F2FA");
  svg.appendChild(path);
  return svg;
}

function createRightSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "44");
  svg.setAttribute("height", "44");
  svg.setAttribute("viewBox", "0 0 44 44");
  svg.setAttribute("fill", "none");

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "44");
  rect.setAttribute("y", "44");
  rect.setAttribute("width", "44");
  rect.setAttribute("height", "44");
  rect.setAttribute("rx", "22");
  rect.setAttribute("transform", "rotate(180 44 44)");
  rect.setAttribute("fill", "#E4E3EB");
  svg.appendChild(rect);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z"
  );
  path.setAttribute("fill", "white");
  svg.appendChild(path);

  return svg;
}
