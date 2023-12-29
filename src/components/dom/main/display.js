export default function displayMainDiv() {
  const mainDiv = document.querySelector("#main-div");
  const blogAdder = document.querySelector("#blog-adder");
  const blog = document.querySelector("#blog");

  blogAdder.classList.add("hidden");

  if (blog) {
    blog.classList.remove("hidden");
  } else mainDiv.classList.remove("hidden");

  localStorage.setItem("blog-adder-status", JSON.stringify(false));
}
