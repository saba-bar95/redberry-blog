import validateFourLetters from "./fourLetters";
import validateTwoWords from "./twoWords";
import validateGeorgianAlph from "./georgianAlph";
import updateAuthor from "../../../../dom/blogAdder/author/update";

export default function validateAuthor(input, arr) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  if (value.length === 0) {
    updateAuthor(false, arr[0]);
    updateAuthor(false, arr[1]);
    updateAuthor(false, arr[2]);
    blogInfo.author = value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    return;
  }

  updateAuthor(validateFourLetters(value), arr[0]);
  updateAuthor(validateTwoWords(value), arr[1]);
  updateAuthor(validateGeorgianAlph(value), arr[2]);

  if (
    validateFourLetters(value) &&
    validateTwoWords(value) &&
    validateGeorgianAlph(value)
  ) {
    input.style.border = "1px solid #14D81C";
  } else input.style.border = "1px solid #EA1919";

  blogInfo.author = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}
