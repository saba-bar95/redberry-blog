import validateEmail from "../../../logic/blogAdder/validations/email/email";

export default function createEmail() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container", "email-container");

  const label = document.createElement("label");
  label.textContent = "ელ-ფოსტა";
  label.setAttribute("for", "email-input");
  div.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("placeholder", "Example@redberry.ge");
  input.setAttribute("type", "email");
  input.setAttribute("id", "email-input");
  div.appendChild(input);

  if (blogInfo && blogInfo.email) {
    input.value = blogInfo.email;
    if (validateEmail(input)) input.style.border = "1px solid #14D81C";
    else input.style.border = "1px solid #EA1919";
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("input", function () {
    if (validateEmail(this)) this.style.border = "1px solid #14D81C";
    else this.style.border = "1px solid #EA1919";

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.email = this.value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  });

  input.addEventListener("blur", function () {
    if (!input.value) this.style.border = "1px solid  #e4e3eb";
  });

  return div;
}
