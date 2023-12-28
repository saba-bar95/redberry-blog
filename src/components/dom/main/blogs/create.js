import expandImg from "/src/assets/images/expand.png";

export default function createBlogs(data) {
  //   console.log(data);
  const main = document.querySelector("#main-div");

  const container = document.createElement("div");
  container.classList.add("blogs-container");
  main.appendChild(container);

  data.data.forEach((info) => {
    const blog = document.createElement("div");
    blog.classList.add("blog-container");
    container.appendChild(blog);

    const image = new Image();
    image.src = info.image;
    blog.appendChild(image);

    const content = document.createElement("div");
    content.classList.add("blog-content");
    blog.appendChild(content);

    const author = document.createElement("h2");
    author.textContent = info.author;
    content.appendChild(author);

    const date = document.createElement("p");
    date.textContent = info.publish_date;
    content.appendChild(date);

    const title = document.createElement("h1");
    title.textContent = info.title;
    content.appendChild(title);

    const categories = document.createElement("div");
    categories.classList.add("main-categories");
    content.appendChild(categories);

    info.categories.forEach((el) => {
      const category = document.createElement("div");
      category.classList.add("main-category", `main-category-${el.id}`);
      category.textContent = el.title;
      category.style.backgroundColor = el.background_color;
      category.style.color = el.text_color;
      categories.appendChild(category);
    });

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = info.description;
    content.appendChild(description);

    const expand = document.createElement("div");
    expand.classList.add("expand-blog");
    content.appendChild(expand);

    const text = document.createElement("p");
    text.textContent = "სრულად ნახვა";
    expand.appendChild(text);

    const img = new Image();
    img.src = expandImg;
    expand.appendChild(img);
  });

  return container;
}
