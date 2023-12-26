import validateDescription from "../../../logic/blogAdder/validations/description/validateDescription";
import updateTwoLetters from "../blogTitle/updateTwoLetters";

const validations = ["მინიმუმ 2 სიმბოლო"];
let validationContainer;

export default function createDescription(blogInfo) {
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "აღწერა";
  descriptionLabel.setAttribute("for", "description-input");
  descriptionContainer.appendChild(descriptionLabel);

  const descriptionLabelSpan = document.createElement("span");
  descriptionLabelSpan.textContent = "*";
  descriptionLabel.appendChild(descriptionLabelSpan);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("rows", 6);
  descriptionInput.classList.add("description-input");
  descriptionInput.setAttribute("id", "description-input");
  descriptionInput.setAttribute("placeholder", "შეიყვანეთ აღწერა");
  descriptionContainer.appendChild(descriptionInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  descriptionContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    validationContainer = document.createElement("div");
    validationContainer.classList.add("validation-container");
    validationTexts.appendChild(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  if (blogInfo && blogInfo.description) {
    descriptionInput.value = blogInfo.description;
    validateDescription(descriptionInput, validationContainer);
  }

  descriptionInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  descriptionInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    validateDescription(this, validationContainer);
  });

  descriptionInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      updateTwoLetters("init", validationContainer);
    }
  });

  return descriptionContainer;
}
