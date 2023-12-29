export default function displayBlogAdder() {
  const blogAdder = document.querySelector("#blog-adder");
  const mainDiv = document.querySelector("#main-div");
  const blog = document.querySelector("#blog");

  if (blog) blog.classList.add("hidden");

  if (blogAdder.classList.contains("hidden")) {
    blogAdder.classList.remove("hidden");
    mainDiv.classList.add("hidden");
  }

  localStorage.setItem("blog-adder-status", JSON.stringify(true));
}
