import "/src/index.scss";
import createHeader from "./components/dom/header/createHeader";
import createMain from "./components/dom/main/createMain";
import createBlogAdder from "./components/dom/blogAdder/createBlogAdder";
import fetchCategories from "./components/logic/categories/fetchCategories";
import createCategories from "./components/dom/main/createCategories";

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

body.appendChild(createHeader(login));
body.appendChild(createMain(status));
body.appendChild(createBlogAdder(status, blogInfo));

fetchCategories(url).then((data) => {
  createCategories(data);
});
