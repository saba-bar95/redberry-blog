import validateTwoLetters from "./validateTwoLetters";
import updateTwoLetters from "../../../../dom/blogAdder/blogTitle/updateTwoLetters";

export default function validateTitle(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  updateTwoLetters(validateTwoLetters(value), div);

  if (validateTwoLetters(value)) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.title = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}
