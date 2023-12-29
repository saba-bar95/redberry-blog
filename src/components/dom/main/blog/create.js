import backArrowImg from "/src/assets/images/back-arrow.png";
import fetchBlog from "../../../logic/blog/fetch";
import expandImg from "/src/assets/images/expand.png";

export default function createBlogContent(data, infoID) {
  if (!data) return;
  const body = document.querySelector("body");
  const mainDiv = document.querySelector("#main-div");
  mainDiv.classList.add("hidden");

  const blog = document.createElement("div");
  blog.setAttribute("id", "blog");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = backArrowImg;
  blog.appendChild(backArrow);

  const content = document.createElement("div");
  content.classList.add("blog-content");
  blog.appendChild(content);

  const image = new Image();
  image.src = data.image;
  content.appendChild(image);

  const info = document.createElement("div");
  info.classList.add("blog-info");
  content.appendChild(info);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper-div");
  info.appendChild(wrapper);

  const author = document.createElement("h2");
  author.textContent = data.author;
  wrapper.appendChild(author);

  let emailText;
  if (data.email) {
    emailText = `• ${data.email}`;
  } else emailText = "";

  const dateEmail = document.createElement("p");
  dateEmail.textContent = `${data.publish_date}${emailText}`;
  wrapper.appendChild(dateEmail);

  const title = document.createElement("h1");
  title.textContent = data.title;
  info.appendChild(title);

  const categories = document.createElement("div");
  categories.classList.add("categories");
  info.appendChild(categories);

  data.categories.forEach((el) => {
    const category = document.createElement("div");
    category.textContent = el.title;
    category.style.color = el.text_color;
    category.style.backgroundColor = el.background_color;
    category.classList.add("category", `category-${el.id}`);
    categories.appendChild(category);
  });

  const description = document.createElement("p");
  description.textContent = data.description;
  description.classList.add("description-para");
  content.appendChild(description);

  backArrow.addEventListener("click", function () {
    mainDiv.classList.remove("hidden");
    blog.remove();
  });

  body.appendChild(blog);

  //= SLIDER =====================================

  const container = document.createElement("div");
  container.classList.add("slider-container");
  blog.appendChild(container);

  const upper = document.createElement("div");
  upper.classList.add("upper");
  container.appendChild(upper);

  const text = document.createElement("h1");
  text.textContent = "მსგავსი სტატიები";
  upper.appendChild(text);

  // const leftsvg = createLeftSVG();
  // const rightsvg = createRightSVG();

  // const buttons = document.createElement("div");
  // buttons.classList.add("buttons");
  // buttons.appendChild(leftsvg);
  // buttons.appendChild(rightsvg);
  // upper.appendChild(buttons);

  const lower = document.createElement("div");
  lower.classList.add("lower");
  container.appendChild(lower);

  const slider = document.createElement("div");
  slider.classList.add("slider");
  lower.appendChild(slider);

  const selectedArr = [];
  data.categories.forEach((el) => {
    selectedArr.push(el.id);
  });
  const blogs = document.querySelectorAll(".blog-container");
  blogs.forEach((el) => {
    const categories = el.querySelectorAll(".main-category");
    const categoriesArr = Array.from(categories).map(function (element) {
      return +element.classList[1].split("-")[2];
    });
    const isContained = categoriesArr.some((element) =>
      selectedArr.includes(element)
    );
    if (isContained) {
      function getAfterDash(input) {
        const index = input.indexOf("-");
        return input.slice(index + 1);
      }
      const blogId = +getAfterDash(el.classList[1]);
      fetchBlog(blogId).then((data) => {
        if (blogId === infoID) return;
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.setAttribute("id", `${data.id}`);
        slider.appendChild(slide);

        const image = new Image();
        image.src = data.image;
        slide.appendChild(image);

        const info = document.createElement("div");
        info.classList.add("info");
        slide.appendChild(info);

        const author = document.createElement("h2");
        author.textContent = data.author;
        info.appendChild(author);

        const date = document.createElement("p");
        date.textContent = data.publish_date;
        info.appendChild(date);

        const title = document.createElement("h1");
        title.textContent = data.title;
        info.appendChild(title);

        const categories = document.createElement("div");
        categories.classList.add("categories");
        info.appendChild(categories);

        data.categories.forEach((el) => {
          const category = document.createElement("div");
          category.classList.add("category");
          category.style.backgroundColor = el.background_color;
          categories.appendChild(category);

          const para = document.createElement("p");
          para.textContent = el.title;
          para.style.color = el.text_color;
          category.appendChild(para);
        });

        const description = document.createElement("h4");
        description.classList.add("description");
        description.textContent = data.description;
        info.appendChild(description);

        const expand = document.createElement("div");
        expand.classList.add("expand-blog");
        info.appendChild(expand);

        const text1 = document.createElement("p");
        text1.classList.add("text1");
        text1.textContent = "სრულად ნახვა";
        expand.appendChild(text1);

        const img = new Image();
        img.classList.add("expand1-img");
        img.src = expandImg;
        expand.appendChild(img);

        expand.addEventListener("click", function () {
          const newID = +this.closest(".slide").getAttribute("id");

          fetchBlog(newID).then((data) => {
            createBlogContent(data, newID);
            blog.remove();
          });
        });
      });
    }
  });
}

// function createLeftSVG() {
//   let svgNS = "http://www.w3.org/2000/svg";
//   let svg = document.createElementNS(svgNS, "svg");
//   svg.setAttribute("width", "44");
//   svg.setAttribute("height", "44");
//   svg.setAttribute("viewBox", "0 0 44 44");
//   svg.setAttribute("fill", "none");
//   svg.classList.add("prev");

//   let rect = document.createElementNS(svgNS, "rect");
//   rect.setAttribute("width", "44");
//   rect.setAttribute("height", "44");
//   rect.setAttribute("rx", "22");
//   rect.setAttribute("fill", "#E4E3EB");
//   svg.appendChild(rect);

//   let path = document.createElementNS(svgNS, "path");
//   path.setAttribute(
//     "d",
//     "M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
//   );
//   path.setAttribute("fill", "#F3F2FA");
//   svg.appendChild(path);
//   return svg;
// }

// function createRightSVG() {
//   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   svg.setAttribute("width", "44");
//   svg.setAttribute("height", "44");
//   svg.setAttribute("viewBox", "0 0 44 44");
//   svg.setAttribute("fill", "none");
//   svg.classList.add("next");

//   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   rect.setAttribute("x", "44");
//   rect.setAttribute("y", "44");
//   rect.setAttribute("width", "44");
//   rect.setAttribute("height", "44");
//   rect.setAttribute("rx", "22");
//   rect.setAttribute("transform", "rotate(180 44 44)");
//   rect.setAttribute("fill", "#E4E3EB");
//   svg.appendChild(rect);

//   const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   path.setAttribute(
//     "d",
//     "M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z"
//   );
//   path.setAttribute("fill", "white");
//   svg.appendChild(path);

//   return svg;
// }
