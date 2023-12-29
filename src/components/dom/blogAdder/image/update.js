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
  refreshPage,
  filez
) {
  if (refreshPage && e.id === "image-input") {
    image();
    label.textContent = blogInfo.image.name;
    return;
  }

  if (
    !e.classList.contains("remove-img") &&
    !refreshPage &&
    (e.id === "image-input" || e.closest("#image-uploader"))
  ) {
    if (!input.files[0] && e.id === "image-input") return;

    let files;
    if (input.files[0]) files = input.files[0];
    else files = filez[0];

    image();
    label.textContent = files.name;

    async function handleFile() {
      const base64 = await fileToBase64(files);

      const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
      blogInfo.image = {};
      blogInfo.image.base64 = base64;
      blogInfo.image.name = files.name;
      blogInfo.image.type = files.type;
      localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    }

    async function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          const base64 = event.target.result;
          resolve(base64);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    }

    handleFile();
    return;
  }

  if (e.classList.contains("remove-img")) {
    noImage();
    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.image = null;
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
