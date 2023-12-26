import folderImg from "/src/assets/images/folder-add.png";
import removeImgPng from "/src/assets/images/remove.png";
import updateImageUploader from "./updateImageUploader";

export default function createImageUploader(blogInfo) {
  const div = document.createElement("div");
  div.classList.add("img-uploader-container");

  const text = document.createElement("p");
  text.textContent = "ატვირთეთ ფოტო";
  div.appendChild(text);

  const uploader = document.createElement("div");
  uploader.setAttribute("id", "image-uploader");
  uploader.classList.add("image-uploader");
  div.appendChild(uploader);

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
  span.classList.add("image-text-span");
  span.textContent = "ჩააგდეთ ფაილი აქ ან";
  texts.appendChild(span);

  const label = document.createElement("label");
  label.setAttribute("for", "image-input");
  label.classList.add("image-input-label");
  label.textContent = "აირჩიეთ ფაილი";
  texts.appendChild(label);

  const removeImg = new Image();
  removeImg.src = removeImgPng;
  removeImg.classList.add("remove-img", "hidden");
  texts.appendChild(removeImg);

  if (blogInfo && blogInfo.imageURL) {
    updateImageUploader(
      input,
      blogInfo,
      uploader,
      texts,
      label,
      span,
      img,
      removeImg,
      input,
      true
    );
  }

  input.addEventListener("change", function (e) {
    updateImageUploader(
      e.target,
      blogInfo,
      uploader,
      texts,
      label,
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
      label,
      span,
      img,
      removeImg,
      input,
      false
    );
  });

  return div;
}
