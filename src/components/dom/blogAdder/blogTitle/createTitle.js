export default function createTitle(blogInfo) {
  const validations = ["მინიმუმ 2 სიმბოლო"];

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");

  const titleText = document.createElement("p");
  titleText.textContent = "ავტორი";
  titleContainer.appendChild(titleText);

  const titleTextSpan = document.createElement("span");
  titleTextSpan.textContent = "*";
  titleText.appendChild(titleTextSpan);

  const titleInput = document.createElement("input");
  titleInput.classList.add("title-input");
  titleInput.setAttribute("placeholder", "შეიყვანეთ ავტორი");
  titleContainer.appendChild(titleInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  titleContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    const validationContainer = document.createElement("div");
    validationContainer.classList.add("validation-container");
    validationTexts.appendChild(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  titleInput.addEventListener("input", function () {
    console.log("ss");
  });

  return titleContainer;
}
