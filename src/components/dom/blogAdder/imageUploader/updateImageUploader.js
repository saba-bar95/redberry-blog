export default function updateImageUploader(
  e,
  blogInfo,
  uploader,
  texts,
  label,
  span,
  img,
  removeImg,
  input,
  refreshPage
) {
  if (refreshPage && e.id === "image-input") {
    image();
    label.textContent = blogInfo.imageName;
    return;
  }

  if (!refreshPage && e.id === "image-input") {
    if (!input.files[0]) return;
    image();
    label.textContent = input.files[0].name;

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.imageURL = input.value;
    blogInfo.imageName = input.files[0].name;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    return;
  }

  if (e.classList.contains("remove-img")) {
    noImage();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.imageURL = null;
    blogInfo.imageName = null;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  }

  function image() {
    uploader.style.padding = "20px";
    texts.style.justifyContent = "space-between";
    label.style.textDecoration = "none";
    label.style.fontWeight = "500";
    span.classList.add("hidden");
    img.classList.add("hidden");
    removeImg.classList.remove("hidden");
  }

  function noImage() {
    uploader.style.padding = "80px 100px";
    texts.style.justifyContent = "center";
    label.textContent = "აირჩიეთ ფაილი";
    label.style.textDecoration = "underline";
    label.style.fontWeight = "700";
    span.classList.remove("hidden");
    img.classList.remove("hidden");
    removeImg.classList.add("hidden");
    input.value = "";
  }
}
