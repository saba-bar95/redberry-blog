import validateTitle from "../../../logic/blogAdder/validations/title/title";
import updateTitle from "./update";

const validations = ["მინიმუმ 2 სიმბოლო"];
let container;
let input;

export default function createTitle() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "სათაური";
  label.setAttribute("for", "title-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  input = document.createElement("input");
  input.classList.add("title-input");
  input.setAttribute("id", "title-input");
  input.setAttribute("placeholder", "შეიყვანეთ სათაური");
  div.appendChild(input);

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

  if (blogInfo && blogInfo.title) {
    input.value = blogInfo.title;
    validateTitle(input, container);
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    validateTitle(this, container);
  });

  input.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      updateTitle("init", container);
    }
  });

  return div;
}

export { input, container };
