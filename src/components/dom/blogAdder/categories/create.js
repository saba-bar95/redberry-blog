import fetchCategories from "../../../logic/categories/fetch";
import updateCategories from "./update";

let container;
export default function createBlogCategories() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const body = document.querySelector("body");

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "კატეგორია";
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  container = document.createElement("div");
  container.classList.add("select-container");
  div.appendChild(container);

  const selected = document.createElement("div");
  selected.classList.add("selected-category", "hidden");
  container.appendChild(selected);

  const select = document.createElement("select");
  select.setAttribute("id", "blog-categories-select");
  container.appendChild(select);

  const placeholder = document.createElement("option");
  placeholder.textContent = "აირჩიეთ კატეგორია";
  placeholder.classList.add("placeholder-option");
  placeholder.setAttribute("value", "");
  placeholder.setAttribute("disabled", "");
  placeholder.setAttribute("selected", "");
  placeholder.setAttribute("hidden", "");
  select.appendChild(placeholder);

  fetchCategories("https://api.blog.redberryinternship.ge/api").then((data) => {
    data.data.forEach((cat) => {
      const option = document.createElement("option");
      option.textContent = cat.title;
      option.setAttribute("value", cat.id);
      select.appendChild(option);
    });

    const options = document.querySelectorAll("option");

    if (blogInfo && blogInfo.categories) {
      const categories = blogInfo.categories;
      updateCategories(
        select,
        container,
        selected,
        placeholder,
        options,
        categories
      );
    }
  });

  select.addEventListener("keydown", function (e) {
    e.preventDefault();
  });

  select.addEventListener("change", function () {
    const options = document.querySelectorAll("option");
    updateCategories(select, container, selected, placeholder, options, [
      +this.value,
    ]);
  });

  body.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-blog-btn")) return;
    if (!event.target.closest(".select-container")) {
      const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
      if (blogInfo.categories.length < 1)
        container.style.border = "1px solid #e4e3eb";
    }
  });

  return div;
}

export { container };
