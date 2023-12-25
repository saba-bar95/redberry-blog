export default function createCategories(data) {
  const mainContent = document.querySelector(".main-content");

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("categories-container");
  mainContent.appendChild(categoriesContainer);

  data.data.forEach((el) => {
    const category = document.createElement("div");
    category.classList.add("category", `category-${el.id}`);
    category.style.backgroundColor = el.background_color;
    categoriesContainer.appendChild(category);

    const titleText = document.createElement("p");
    titleText.textContent = el.title;
    titleText.style.color = el.text_color;
    category.appendChild(titleText);
  });
}
