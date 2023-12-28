import validateImg from "../image/image";
import validateAuthor from "../author/author";
import validateTitle from "../title/title";
import validateDescription from "../description/description";
import validateDate from "../date/date";

import {
  input as authorInput,
  validationArr as authorValidationArr,
} from "../../../../dom/blogAdder/author/create";
import {
  input as titleInput,
  container as titleContainer,
} from "../../../../dom/blogAdder/title/create";
import {
  textarea as descriptonTextarea,
  container as descriptionContainer,
} from "../../../../dom/blogAdder/description/create";
import { input as dateInput } from "../../../../dom/blogAdder/date/create";
import { container as categoriesContainer } from "../../../../dom/blogAdder/categories/create";
import sendBlog from "../../../blogs/send";

export default function validateForm() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  if (!validateAuthor(authorInput, authorValidationArr))
    authorInput.style.border = "1px solid #EA1919";
  if (!validateTitle(titleInput, titleContainer))
    titleInput.style.border = "1px solid #EA1919";
  if (!validateDescription(descriptonTextarea, descriptionContainer))
    descriptonTextarea.style.border = "1px solid #EA1919";
  if (!validateDate(dateInput)) dateInput.style.border = "1px solid #EA1919";
  if (blogInfo.categories.length < 1)
    categoriesContainer.style.border = "1px solid #EA1919";

  if (
    validateImg() &&
    validateAuthor(authorInput, authorValidationArr) &&
    validateTitle(titleInput, titleContainer) &&
    validateDescription(descriptonTextarea, descriptionContainer) &&
    validateDate(dateInput) &&
    blogInfo.categories.length > 0
  )
    sendBlog();
}
