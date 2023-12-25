export default function updateImageUploader(
  e,
  blogInfo,
  imageUploader,
  imageTexts,
  imageInputLabel,
  imageTextSpan,
  folderAdder,
  removeImg,
  imageInput,
  refreshPage
) {
  if (refreshPage && e.id === "image-input") {
    image();
    imageInputLabel.textContent = blogInfo.imageName;
    return;
  }

  if (!refreshPage && e.id === "image-input") {
    if (!imageInput.files[0]) return;
    image();
    imageInputLabel.textContent = imageInput.files[0].name;

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.imageURL = imageInput.value;
    blogInfo.imageName = imageInput.files[0].name;
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

  if (e.classList.contains("back-arrow")) {
    noImage();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    for (let [key, value] of Object.entries(blogInfo)) {
      blogInfo[key] = null;
    }
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  }

  function image() {
    imageUploader.style.padding = "20px";
    imageTexts.style.justifyContent = "space-between";
    imageInputLabel.style.textDecoration = "none";
    imageInputLabel.style.fontWeight = "500";
    imageTextSpan.classList.add("hidden");
    folderAdder.classList.add("hidden");
    removeImg.classList.remove("hidden");
  }

  function noImage() {
    imageUploader.style.padding = "80px 100px";
    imageTexts.style.justifyContent = "center";
    imageInputLabel.textContent = "აირჩიეთ ფაილი";
    imageInputLabel.style.textDecoration = "underline";
    imageInputLabel.style.fontWeight = "700";
    imageTextSpan.classList.remove("hidden");
    folderAdder.classList.remove("hidden");
    removeImg.classList.add("hidden");
    imageInput.value = "";
  }
}
