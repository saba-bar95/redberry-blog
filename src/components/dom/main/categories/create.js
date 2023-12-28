export default function createCategories(data) {
  const content = document.querySelector("#main-div");

  const categories = document.createElement("div");
  categories.classList.add("categories-container");
  content.appendChild(categories);

  data.data.forEach((el) => {
    const category = document.createElement("div");
    category.classList.add("category", `category-${el.id}`);
    category.style.backgroundColor = el.background_color;
    categories.appendChild(category);

    const text = document.createElement("p");
    text.textContent = el.title;
    text.style.color = el.text_color;
    category.appendChild(text);
  });
}
