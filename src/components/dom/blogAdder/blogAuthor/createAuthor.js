import validateAuthor from "../../../logic/blogAdder/validations/author/validateAuthor";
import updateFourLetters from "./updateFourLetters";
import updateTwoWordsVal from "./updateTwoWordsVal";
import updateGeorgianVal from "./updateGeorgianVal";

export default function createAuthor(blogInfo) {
  const validations = [
    "მინიმუმ 4 სიმბოლო",
    "მინიმუმ 2 სიტყვა",
    "მხოლოდ ქართული სიმბოლოები",
  ];

  const authorContainer = document.createElement("div");
  authorContainer.classList.add("author-container");

  const authorText = document.createElement("label");
  authorText.textContent = "ავტორი";
  authorText.setAttribute("for", "author-input");
  authorContainer.appendChild(authorText);

  const authorTextSpan = document.createElement("span");
  authorTextSpan.textContent = "*";
  authorText.appendChild(authorTextSpan);

  const authorInput = document.createElement("input");
  authorInput.classList.add("author-input");
  authorInput.setAttribute("id", "author-input");
  authorInput.setAttribute("placeholder", "შეიყვანეთ ავტორი");
  authorContainer.appendChild(authorInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  authorContainer.appendChild(validationTexts);

  validations.forEach((el, i) => {
    i++;
    const validationContainer = document.createElement("div");
    validationContainer.classList.add(
      "validation-container",
      `validation-container--${i}`
    );
    validationTexts.appendChild(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  authorInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    validateAuthor(this);
  });

  authorInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      updateGeorgianVal("init");
      updateTwoWordsVal("init");
      updateFourLetters("init");
    }
  });

  return authorContainer;
}
