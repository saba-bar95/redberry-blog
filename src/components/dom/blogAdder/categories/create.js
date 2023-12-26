import fetchCategories from "../../../logic/categories/fetch";

import dipslayBlogCategories from "./display";

export default function createBlogCategories(blogInfo) {
  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "კატეგორია";
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  const container = document.createElement("div");
  div.appendChild(container);

  const text = document.createElement("p");
  text.textContent = "აირჩიეთ კატეგორია";

  // const select = document.createElement("select");
  // select.setAttribute("id", "blog-categories-select");
  // div.appendChild(select);

  // const span2 = document.createElement("span");
  // span2.textContent = "ss";
  // select.appendChild(span2);

  // const placeholder = document.createElement("option");
  // placeholder.textContent = "აირჩიეთ კატეგორია";
  // placeholder.setAttribute("value", "");
  // placeholder.setAttribute("disabled", "");
  // placeholder.setAttribute("selected", "");
  // placeholder.setAttribute("hidden", "");

  // select.appendChild(placeholder);

  // fetchCategories("https://api.blog.redberryinternship.ge/api").then((data) => {
  //   data.data.forEach((cat) => {
  //     const option = document.createElement("option");
  //     option.textContent = cat.title;
  //     option.setAttribute("value", cat.id);
  //     select.appendChild(option);
  //   });
  // });

  // select.addEventListener("change", function () {
  //   dipslayBlogCategories(select.value);
  // });

  return div;
}
