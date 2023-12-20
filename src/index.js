import "/src/index.scss";
import createHeaderDiv from "./components/dom/header/headerDiv";
import createMainDiv from "./components/dom/main/mainDiv";
import fetchCategories from "./components/logic/fetchCategories";
import displayCategories from "./components/dom/main/displayCategories";
import checkLogin from "./components/logic/checkLogin";

const url = "https://api.blog.redberryinternship.ge/api";
const token =
  "fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a";

const loginStatus = JSON.parse(localStorage.getItem("login"));
if (!loginStatus) localStorage.setItem("login", JSON.stringify(false));

const body = document.querySelector("body");

body.appendChild(createHeaderDiv(loginStatus));
body.appendChild(createMainDiv());

fetchCategories(url).then((data) => {
  displayCategories(data);
});

// checkLogin("gigagiorgadze@redberry.ge").then((data) => {
//   console.log(data);
// });
