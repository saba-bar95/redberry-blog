import validateDate from "../../../logic/blogAdder/validations/date/validateDate";

export default function createDate(blogInfo) {
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "გამოქვეყნების თარიღი";
  dateLabel.setAttribute("for", "date-input");
  dateContainer.appendChild(dateLabel);

  const dateLabelSpan = document.createElement("span");
  dateLabelSpan.textContent = "*";
  dateLabel.appendChild(dateLabelSpan);

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date-input");
  dateContainer.appendChild(dateInput);

  if (blogInfo && blogInfo.date) {
    dateInput.value = blogInfo.date;
    validateDate(dateInput);
  }

  dateInput.addEventListener("change", function () {
    validateDate(dateInput);
  });

  dateInput.addEventListener("focus", function () {
    if (!dateInput.value) dateInput.style.border = "1px solid red";
  });

  dateInput.addEventListener("blur", function () {
    if (!dateInput.value) dateInput.style.border = "1px solid #e4e3eb";
  });

  return dateContainer;
}
