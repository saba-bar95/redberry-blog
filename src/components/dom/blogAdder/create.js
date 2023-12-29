import backArrowImg from "/src/assets/images/back-arrow.png";
import displayMainDiv from "/src/components/dom/main/display.js";
import createImageUploader from "./image/create";
import createAuthor from "./author/create";
import createTitle from "./title/create";
import createDescription from "./description/create";
import createDate from "./date/create";
import createBlogCategories from "./categories/create";
import createEmail from "./email/create";
import validateForm from "../../logic/blogAdder/validations/form/form";

export default function createBlogAdder() {
  const status = JSON.parse(localStorage.getItem("blog-adder-status"));

  const blogAdder = document.createElement("div");
  blogAdder.setAttribute("id", "blog-adder");

  if (!status) blogAdder.classList.add("hidden");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = backArrowImg;
  blogAdder.appendChild(backArrow);

  const content = document.createElement("div");
  content.classList.add("blog-adder-content");
  blogAdder.appendChild(content);

  const text = document.createElement("h1");
  text.textContent = "ბლოგის დამატება";
  content.appendChild(text);

  const form = document.createElement("form");
  form.classList.add("blog-form");
  form.setAttribute("id", "blog-form");
  content.appendChild(form);

  form.appendChild(createImageUploader());

  const title = document.createElement("div");
  title.classList.add("author-title-container");
  form.appendChild(title);
  title.appendChild(createAuthor());
  title.appendChild(createTitle());

  form.appendChild(createDescription());

  const dateCategory = document.createElement("div");
  dateCategory.classList.add("date-category-container");
  form.appendChild(dateCategory);
  dateCategory.appendChild(createDate());
  dateCategory.appendChild(createBlogCategories());

  form.appendChild(createEmail());

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  content.appendChild(addBlogBtn);

  backArrow.addEventListener("click", displayMainDiv);

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validateForm();
  });
  return blogAdder;
}
