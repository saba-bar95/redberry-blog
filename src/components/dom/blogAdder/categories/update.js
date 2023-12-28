import fetchCategories from "../../../logic/categories/fetch";
import image from "/src/assets/images/white-remove.png";

const categoryArr = [];

export default function updateCategories(
  select,
  selectContainer,
  selected,
  placeholder,
  options,
  idArr
) {
  if (idArr.length >= 1) {
    placeholder.textContent = "";
    selected.classList.remove("hidden");
    select.value = "";
  }

  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const url = "https://api.blog.redberryinternship.ge/api";

  options.forEach((el) => {
    if (el.hasAttribute("disabled")) return;
    const valueNum = +el.getAttribute("value");

    if (idArr.includes(valueNum)) {
      categoryArr.push(valueNum);
      el.setAttribute("hidden", "");

      blogInfo.categories = categoryArr;
      localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    }
  });

  fetchCategories(url).then((data) => {
    data.data.forEach((el) => {
      if (idArr.includes(+el.id)) {
        const container = document.createElement("div");
        container.classList.add("category-container", `category-${el.id}`);
        container.style.backgroundColor = el.background_color;
        selected.appendChild(container);

        const text = document.createElement("p");
        text.textContent = el.title;
        text.style.color = el.text_color;
        container.appendChild(text);

        const img = new Image();
        img.src = image;
        container.appendChild(img);

        selectContainer.style.gridTemplateColumns = "auto minmax(30px, 1fr)";
        selectContainer.style.border = "1px solid #14D81C";

        if (categoryArr.length > 1) selected.style.overflowX = "scroll";

        img.addEventListener("click", function (event) {
          const parent = event.target.closest(".category-container");
          parent.remove();

          let index = parent.classList[1].indexOf("-");
          const catNum = +parent.classList[1].substring(index + 1);

          let arrIndex = categoryArr.indexOf(catNum);
          if (arrIndex !== -1) categoryArr.splice(arrIndex, 1);

          if (categoryArr.length < 1) {
            selectContainer.style.border = "1px solid #EA1919";
            selected.classList.add("hidden");
            placeholder.textContent = "აირჩიეთ კატეგორია";
            selectContainer.style.gridTemplateColumns = "auto";
          }

          if (categoryArr.length <= 1) selected.style.overflow = "auto";

          blogInfo.categories = categoryArr;
          localStorage.setItem("blog-info", JSON.stringify(blogInfo));

          options.forEach((el) => {
            if (el.hasAttribute("disabled")) return;
            if (+el.getAttribute("value") === catNum)
              el.removeAttribute("hidden");
          });
        });
      }
    });
  });
}
