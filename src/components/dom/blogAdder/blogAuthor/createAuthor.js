import validateAuthor from "../../../logic/blogAdder/validations/author/validateAuthor";
import updateFourLetters from "./updateFourLetters";
import updateTwoWordsVal from "./updateTwoWordsVal";
import updateGeorgianVal from "./updateGeorgianVal";

const validations = [
  "მინიმუმ 4 სიმბოლო",
  "მინიმუმ 2 სიტყვა",
  "მხოლოდ ქართული სიმბოლოები",
];
const validationArr = [];

export default function createAuthor(blogInfo) {
  const authorContainer = document.createElement("div");
  authorContainer.classList.add("author-container");

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "ავტორი";
  authorLabel.setAttribute("for", "author-input");
  authorContainer.appendChild(authorLabel);

  const authorLabelSpan = document.createElement("span");
  authorLabelSpan.textContent = "*";
  authorLabel.appendChild(authorLabelSpan);

  const authorInput = document.createElement("input");
  authorInput.classList.add("author-input");
  authorInput.setAttribute("id", "author-input");
  authorInput.setAttribute("placeholder", "შეიყვანეთ ავტორი");
  authorContainer.appendChild(authorInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  authorContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    const validationContainer = document.createElement("div");
    validationContainer.classList.add("validation-container");
    validationTexts.appendChild(validationContainer);
    validationArr.push(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  if (blogInfo && blogInfo.author) {
    authorInput.value = blogInfo.author;
    validateAuthor(authorInput, validationArr);
  }

  authorInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  authorInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    validateAuthor(this, validationArr);
  });

  authorInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      updateFourLetters("init", validationArr[0]);
      updateGeorgianVal("init", validationArr[1]);
      updateTwoWordsVal("init", validationArr[2]);
    }
  });

  return authorContainer;
}
