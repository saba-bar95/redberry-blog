import backArrowImg from "/src/assets/images/back-arrow.png";
import validateForm from "../../logic/blogAdder/validateForm";
import createImageUploader from "./imageUploader/createImageUploader";
import createAuthor from "./blogAuthor/createAuthor";
import createTitle from "./blogTitle/createTitle";
import displayMainDiv from "/src/components/dom/main/displayMainDiv.js";

export default function createBlogAdder(status, blogInfo) {
  const blogAdder = document.createElement("div");
  blogAdder.setAttribute("id", "blog-adder");

  if (!status) blogAdder.classList.add("hidden");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = backArrowImg;
  blogAdder.appendChild(backArrow);

  const blogAdderContent = document.createElement("div");
  blogAdderContent.classList.add("blog-adder-content");
  blogAdder.appendChild(blogAdderContent);

  const blogAdderText = document.createElement("h1");
  blogAdderText.textContent = "ბლოგის დამატება";
  blogAdderContent.appendChild(blogAdderText);

  const blogAdderForm = document.createElement("form");
  blogAdderForm.classList.add("blog-form");
  blogAdderForm.setAttribute("id", "blog-form");
  blogAdderContent.appendChild(blogAdderForm);

  blogAdderForm.appendChild(createImageUploader(blogInfo));

  const authorTitleContainer = document.createElement("div");
  authorTitleContainer.classList.add("author-title-container");
  blogAdderForm.appendChild(authorTitleContainer);

  authorTitleContainer.appendChild(createAuthor(blogInfo));
  authorTitleContainer.appendChild(createTitle(blogInfo));

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  blogAdderForm.appendChild(addBlogBtn);

  backArrow.addEventListener("click", displayMainDiv);

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    validateForm(blogInfo);
  });
  return blogAdder;
}
