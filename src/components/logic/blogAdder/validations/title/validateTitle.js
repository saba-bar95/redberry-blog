import updateTwoLetters from "../../../../dom/blogAdder/blogTitle/updateTwoLetters";
import validateTwoLetters from "./validateTwoLetters";

export default function validateTitle(input) {
  updateTwoLetters(validateTwoLetters(input.value));

  if (validateTwoLetters(input.value)) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";
}
