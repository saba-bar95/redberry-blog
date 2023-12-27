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

    const base64String = "your base64 string";
    const fileType = blogInfo.image.type;
    const fileName = blogInfo.image.name;
    const file = base64StringToFile(base64String, fileType, fileName);
    // console.log(file);
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

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    getBase64(files)
      .then(function (base64) {
        blogInfo.image = {};
        blogInfo.image.base64 = base64;
        blogInfo.image.name = files.name;
        blogInfo.image.type = files.type;
        localStorage.setItem("blog-info", JSON.stringify(blogInfo));
      })
      .catch(function (error) {
        console.log("Failed to get base64 string: ", error);
      });

    return;
  }

  if (e.classList.contains("remove-img")) {
    noImage();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.image = null;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  }

  function base64StringToFile(base64String, fileType, fileName) {
    // Convert base64 string to byte array
    const byteCharacters = atob(base64String);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    // Convert byte array to Blob
    const blob = new Blob(byteArrays, { type: fileType });

    // Convert Blob to File
    const file = new File([blob], fileName, { type: fileType });

    return file;
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
