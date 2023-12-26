import backArrowImg from "/src/assets/images/back-arrow.png";
import displayMainDiv from "/src/components/dom/main/displayMainDiv.js";
import createImageUploader from "./imageUploader/createImageUploader";
import createAuthor from "./blogAuthor/createAuthor";
import createTitle from "./blogTitle/createTitle";
import createDescription from "./blogDescription/createDescription";
import validateForm from "../../logic/blogAdder/validateForm";
import createDate from "./blogDate /createDate";
import createBlogCategories from "./blogCategories/createBlogCategories";

export default function createBlogAdder(status, blogInfo) {
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

  form.appendChild(createImageUploader(blogInfo));

  const authorTitle = document.createElement("div");
  authorTitle.classList.add("author-title-container");
  form.appendChild(authorTitle);
  authorTitle.appendChild(createAuthor(blogInfo));
  authorTitle.appendChild(createTitle(blogInfo));

  form.appendChild(createDescription(blogInfo));

  const dateCategory = document.createElement("div");
  dateCategory.classList.add("date-category-container");
  form.appendChild(dateCategory);

  dateCategory.appendChild(createDate(blogInfo));
  dateCategory.appendChild(createBlogCategories(blogInfo));

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  form.appendChild(addBlogBtn);

  // form.addEventListener("input", function () {
  //   console.log("ss");
  // });

  backArrow.addEventListener("click", displayMainDiv);

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    validateForm(blogInfo);
  });
  return blogAdder;
}
