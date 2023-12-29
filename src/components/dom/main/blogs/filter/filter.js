export default function filterBlogs(target) {
  let selected = JSON.parse(localStorage.getItem("selected"));
  const blogs = document.querySelectorAll(".blog-container");

  if (target) {
    const categoryContainer = target.closest(".category");
    let num = +categoryContainer.classList[1].split("-").pop();
    if (categoryContainer.classList.contains("selected")) {
      categoryContainer.classList.remove("selected");
      selected = selected.filter((value) => value !== num);
      localStorage.setItem("selected", JSON.stringify(selected));
    } else {
      categoryContainer.classList.add("selected");
      selected.push(+num);
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }

  blogs.forEach((el) => {
    const categories = el.querySelectorAll(".main-category");
    const categoriesArr = Array.from(categories).map(function (element) {
      return +element.classList[1].split("-")[2];
    });

    const isContained = categoriesArr.some((element) =>
      selected.includes(element)
    );

    if (selected.length < 1) {
      el.classList.remove("hidden");
      return;
    }

    if (!isContained) el.classList.add("hidden");
    else el.classList.remove("hidden");
  });
}
