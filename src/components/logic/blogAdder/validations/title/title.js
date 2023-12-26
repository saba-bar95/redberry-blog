import validateTwoLetters from "./twoLetters";
import updateTitle from "../../../../dom/blogAdder/title/update";

export default function validateTitle(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  updateTitle(validateTwoLetters(value), div);

  if (validateTwoLetters(value)) {
    input.style.border = "1px solid #14D81C";
  } else input.style.border = "1px solid #EA1919";

  blogInfo.title = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}
