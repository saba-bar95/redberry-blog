import folderImg from "/src/assets/images/folder-add.png";
import removeImgPng from "/src/assets/images/remove.png";
import updateImageUploader from "./update";

export default function createImageUploader(blogInfo) {
  const label = document.createElement("label");
  label.setAttribute("for", "image-input");
  label.classList.add("img-uploader-container");

  const text = document.createElement("p");
  text.textContent = "ატვირთეთ ფოტო";
  label.appendChild(text);

  const uploader = document.createElement("div");
  uploader.setAttribute("id", "image-uploader");
  uploader.classList.add("image-uploader");
  label.appendChild(uploader);

  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "image-input");
  input.setAttribute("accept", "image/*");
  input.setAttribute("hidden", "");
  uploader.appendChild(input);

  const img = new Image();
  img.classList.add("folder-adder-img");
  img.src = folderImg;
  uploader.appendChild(img);

  const texts = document.createElement("div");
  texts.classList.add("image-texts");
  uploader.appendChild(texts);

  const span = document.createElement("span");
  span.textContent = "ჩააგდეთ ფაილი აქ ან";
  texts.appendChild(span);

  const para = document.createElement("p");
  para.textContent = "აირჩიეთ ფაილი";
  texts.appendChild(para);

  const removeImg = new Image();
  removeImg.src = removeImgPng;
  removeImg.classList.add("remove-img", "hidden");
  texts.appendChild(removeImg);

  if (blogInfo && blogInfo.image) {
    updateImageUploader(
      input,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      true
    );
  }

  label.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-img")) e.preventDefault();
  });

  label.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  label.addEventListener("drop", function (e) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    updateImageUploader(
      e.target,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      false,
      files
    );
  });

  input.addEventListener("change", function (e) {
    updateImageUploader(
      e.target,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      false
    );
  });

  removeImg.addEventListener("click", (e) => {
    updateImageUploader(
      e.target,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      false
    );
  });

  return label;
}
