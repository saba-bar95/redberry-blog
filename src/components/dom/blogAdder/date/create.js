import validateDate from "../../../logic/blogAdder/validations/date/date";

export default function createDate(blogInfo) {
  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "გამოქვეყნების თარიღი";
  label.setAttribute("for", "date-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  const input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("id", "date-input");
  div.appendChild(input);

  if (blogInfo && blogInfo.date) {
    input.value = blogInfo.date;
    validateDate(input);
  }

  input.addEventListener("change", function () {
    validateDate(input);
  });

  input.addEventListener("focus", function () {
    if (!input.value) input.style.border = "1px solid #EA1919";
  });

  input.addEventListener("blur", function () {
    if (!input.value) input.style.border = "1px solid #e4e3eb";
  });

  return div;
}
