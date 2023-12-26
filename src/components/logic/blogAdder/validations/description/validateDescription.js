import validateTwoLetters from "../title/validateTwoLetters";
import updateTwoLetters from "../../../../dom/blogAdder/blogTitle/updateTwoLetters";

export default function validateDescription(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  updateTwoLetters(validateTwoLetters(value), div);

  if (validateTwoLetters(value)) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.description = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}
