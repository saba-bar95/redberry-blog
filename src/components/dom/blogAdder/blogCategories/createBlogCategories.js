import fetchCategories from "../../../logic/categories/fetchCategories";

export default function createBlogCategories(blogInfo) {
  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "კატეგორია";
  label.setAttribute("for", "blog-categories-select");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  const select = document.createElement("select");
  select.setAttribute("id", "blog-categories-select");
  div.appendChild(select);

  const placeholder = document.createElement("option");
  placeholder.textContent = "აირჩიეთ კატეგორია";
  placeholder.setAttribute("value", "");
  placeholder.setAttribute("disabled", "");
  placeholder.setAttribute("selected", "");
  placeholder.setAttribute("hidden", "");
  select.appendChild(placeholder);

  fetchCategories("https://api.blog.redberryinternship.ge/api").then((data) => {
    // console.log(data[1]);
    data.data.forEach((cat) => {
      // console.log(cat);

      const option = document.createElement("option");
      option.textContent = cat.title;
      select.appendChild(option);
    });
  });

  return div;
}
