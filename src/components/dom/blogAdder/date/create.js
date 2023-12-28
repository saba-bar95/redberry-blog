import validateDate from "../../../logic/blogAdder/validations/date/date";

let input;
export default function createDate() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "გამოქვეყნების თარიღი";
  label.setAttribute("for", "date-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("id", "date-input");
  div.appendChild(input);

  if (blogInfo && blogInfo.date) {
    input.value = blogInfo.date;
    validateDate(input);
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("change", function () {
    validateDate(input);
  });

  input.addEventListener("blur", function () {
    if (!input.value) input.style.border = "1px solid #e4e3eb";
  });

  return div;
}

export { input };
