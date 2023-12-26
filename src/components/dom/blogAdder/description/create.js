import validateDescription from "../../../logic/blogAdder/validations/description/description";
import updateTitle from "../title/update";

const validations = ["მინიმუმ 2 სიმბოლო"];
let container;

export default function createDescription(blogInfo) {
  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "აღწერა";
  label.setAttribute("for", "description-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  const textarea = document.createElement("textarea");
  textarea.setAttribute("placeholder", "შეიყვანეთ აღწერა");
  textarea.setAttribute("rows", 6);
  textarea.setAttribute("spellcheck", "off");
  textarea.setAttribute("id", "description-input");
  textarea.style.resize = "none";

  div.appendChild(textarea);

  const texts = document.createElement("ul");
  texts.classList.add("validation-texts");
  div.appendChild(texts);

  validations.forEach((el) => {
    container = document.createElement("div");
    container.classList.add("validation-container");
    texts.appendChild(container);

    const before = document.createElement("span");
    before.classList.add("validation-before");
    container.appendChild(before);

    const text = document.createElement("li");
    text.textContent = el;
    container.appendChild(text);
  });

  if (blogInfo && blogInfo.description) {
    textarea.value = blogInfo.description;
    validateDescription(textarea, container);
  }

  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  textarea.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    validateDescription(this, container);
  });

  textarea.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      updateTitle("init", container);
    }
  });

  return div;
}
