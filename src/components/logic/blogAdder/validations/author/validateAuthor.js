import validateFourLetters from "./validateFourLetters";
import validateTwoWords from "./validateTwoWords";
import validateGeorgianAlph from "./validateGeorgianAlph";
import updateFourLetters from "../../../../dom/blogAdder/blogAuthor/updateFourLetters";
import updateTwoWordsVal from "../../../../dom/blogAdder/blogAuthor/updateTwoWordsVal";
import updateGeorgianVal from "../../../../dom/blogAdder/blogAuthor/updateGeorgianVal";

export default function validateAuthor(input) {
  if (input.value.length === 0) {
    updateFourLetters(false);
    updateTwoWordsVal(false);
    updateGeorgianVal(false);
    return;
  }

  updateFourLetters(validateFourLetters(input.value));
  updateTwoWordsVal(validateTwoWords(input.value));
  updateGeorgianVal(validateGeorgianAlph(input.value));

  if (
    validateFourLetters(input.value) &&
    validateTwoWords(input.value) &&
    validateGeorgianAlph(input.value)
  ) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";
}
