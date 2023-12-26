export default function dipslayBlogCategories(id) {
  const div = document.createElement("div");
  div.classList.add("category-container");

  document.querySelectorAll("option").forEach((el) => {
    if (el.hasAttribute("disabled")) return;
    if (el.hasAttribute("hidden")) el.removeAttribute("hidden");
    if (el.getAttribute("value") === id) el.setAttribute("hidden", "");
  });
}
