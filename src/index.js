import "/src/index.scss";
import createHeader from "./components/dom/header/create";
import createMain from "./components/dom/main/create";
import createBlogAdder from "./components/dom/blogAdder/create";
import fetchCategories from "./components/logic/categories/fetch";
import createCategories from "./components/dom/main/categories/create";
import fetchBlogs from "./components/logic/blogs/fetch";
import createBlogs from "./components/dom/main/blogs/create";

const body = document.querySelector("body");
const url = "https://api.blog.redberryinternship.ge/api";
const token =
  "fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a";

const login = JSON.parse(localStorage.getItem("login"));
if (!login) localStorage.setItem("login", JSON.stringify(false));

const status = JSON.parse(localStorage.getItem("blog-adder-status"));
if (!status) localStorage.setItem("blog-adder-status", JSON.stringify(false));

const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
if (!blogInfo) localStorage.setItem("blog-info", JSON.stringify({}));

body.appendChild(createHeader());
body.appendChild(createMain());
body.appendChild(createBlogAdder());

fetchCategories(url).then((data) => {
  createCategories(data);

  setTimeout(() => {
    fetchBlogs(url, token).then((data) => {
      createBlogs(data);
    });
  }, 1000);
});
