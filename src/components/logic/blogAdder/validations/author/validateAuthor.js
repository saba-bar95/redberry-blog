import validateFourLetters from "./validateFourLetters";
import validateTwoWords from "./validateTwoWords";
import validateGeorgianAlph from "./validateGeorgianAlph";
import updateFourLetters from "../../../../dom/blogAdder/blogAuthor/updateFourLetters";
import updateTwoWordsVal from "../../../../dom/blogAdder/blogAuthor/updateTwoWordsVal";
import updateGeorgianVal from "../../../../dom/blogAdder/blogAuthor/updateGeorgianVal";

export default function validateAuthor(input, arr) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  if (value.length === 0) {
    updateFourLetters(false, arr[0]);
    updateTwoWordsVal(false, arr[1]);
    updateGeorgianVal(false, arr[2]);
    blogInfo.author = value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    return;
  }

  updateFourLetters(validateFourLetters(value), arr[0]);
  updateTwoWordsVal(validateTwoWords(value), arr[1]);
  updateGeorgianVal(validateGeorgianAlph(value), arr[2]);

  if (
    validateFourLetters(value) &&
    validateTwoWords(value) &&
    validateGeorgianAlph(value)
  ) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.author = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}
