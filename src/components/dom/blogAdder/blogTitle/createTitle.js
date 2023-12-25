import validateTitle from "../../../logic/blogAdder/validations/title/validateTitle";
import updateTwoLetters from "./updateTwoLetters";

export default function createTitle(blogInfo) {
  const validations = ["მინიმუმ 2 სიმბოლო"];

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "სათაური";
  titleLabel.setAttribute("for", "title-input");
  titleContainer.appendChild(titleLabel);

  const titleLabelSpan = document.createElement("span");
  titleLabelSpan.textContent = "*";
  titleLabel.appendChild(titleLabelSpan);

  const titleInput = document.createElement("input");
  titleInput.classList.add("title-input");
  titleInput.setAttribute("id", "title-input");
  titleInput.setAttribute("placeholder", "შეიყვანეთ ავტორი");
  titleContainer.appendChild(titleInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  titleContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    const validationContainer = document.createElement("div");
    validationContainer.classList.add(
      "validation-container",
      "title-validation-container"
    );
    validationTexts.appendChild(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  titleInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    validateTitle(this);
  });

  titleInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  titleInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      updateTwoLetters("init");
    }
  });

  return titleContainer;
}
