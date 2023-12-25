import folderAdderImg from "/src/assets/images/folder-add.png";
import removeImgPng from "/src/assets/images/remove.png";
import updateImageUploader from "./updateImageUploader";

export default function createImageUploader(blogInfo) {
  const imageUploaderContainer = document.createElement("div");
  imageUploaderContainer.classList.add("img-uploader-container");

  const uploadImageText = document.createElement("p");
  uploadImageText.textContent = "ატვირთეთ ფოტო";
  imageUploaderContainer.appendChild(uploadImageText);

  const imageUploader = document.createElement("div");
  imageUploader.setAttribute("id", "image-uploader");
  imageUploader.classList.add("image-uploader");
  imageUploaderContainer.appendChild(imageUploader);

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "file");
  imageInput.setAttribute("id", "image-input");
  imageInput.setAttribute("accept", "image/*");
  imageInput.setAttribute("hidden", "");
  imageUploader.appendChild(imageInput);

  const folderAdder = new Image();
  folderAdder.classList.add("folder-adder-img");
  folderAdder.src = folderAdderImg;
  imageUploader.appendChild(folderAdder);

  const imageTexts = document.createElement("div");
  imageTexts.classList.add("image-texts");
  imageUploader.appendChild(imageTexts);

  const imageTextSpan = document.createElement("span");
  imageTextSpan.classList.add("image-text-span");
  imageTextSpan.textContent = "ჩააგდეთ ფაილი აქ ან";
  imageTexts.appendChild(imageTextSpan);

  const imageInputLabel = document.createElement("label");
  imageInputLabel.setAttribute("for", "image-input");
  imageInputLabel.classList.add("image-input-label");
  imageInputLabel.textContent = "აირჩიეთ ფაილი";
  imageTexts.appendChild(imageInputLabel);

  const removeImg = new Image();
  removeImg.src = removeImgPng;
  removeImg.classList.add("remove-img", "hidden");
  imageTexts.appendChild(removeImg);

  if (blogInfo && blogInfo.imageURL) {
    updateImageUploader(
      imageInput,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      true
    );
  }

  imageInput.addEventListener("change", function (e) {
    updateImageUploader(
      e.target,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      false
    );
  });

  removeImg.addEventListener("click", (e) => {
    updateImageUploader(
      e.target,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      false
    );
  });

  return imageUploaderContainer;
}
