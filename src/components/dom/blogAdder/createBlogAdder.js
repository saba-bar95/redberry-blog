import backArrowImg from "/src/assets/images/back-arrow.png";
import displayMainDiv from "../main/displayMainDiv";
import folderAdderImg from "/src/assets/images/folder-add.png";
import removeImgPng from "/src/assets/images/remove.png";
import updateImageUploader from "./updateImageUploader";
import validateBlogInfo from "../../logic/blogAdder/validateBlogInfo";

export default function createBlogAdder(status, blogInfo) {
  const blogAdder = document.createElement("div");
  blogAdder.setAttribute("id", "blog-adder");
  if (!status) blogAdder.classList.add("hidden");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = backArrowImg;
  blogAdder.appendChild(backArrow);

  const blogAdderContent = document.createElement("div");
  blogAdderContent.classList.add("blog-adder-content");
  blogAdder.appendChild(blogAdderContent);

  const blogAdderText = document.createElement("h1");
  blogAdderText.textContent = "ბლოგის დამატება";
  blogAdderContent.appendChild(blogAdderText);

  const blogAdderForm = document.createElement("form");
  blogAdderForm.classList.add("blog-form");
  blogAdderForm.setAttribute("id", "blog-form");
  blogAdderContent.appendChild(blogAdderForm);

  const imageInputContainer = document.createElement("div");
  imageInputContainer.classList.add("img-input-container");
  blogAdderForm.appendChild(imageInputContainer);

  const uploadImageText = document.createElement("p");
  uploadImageText.textContent = "ატვირთეთ ფოტო";
  imageInputContainer.appendChild(uploadImageText);

  const imageUploader = document.createElement("div");
  imageUploader.setAttribute("id", "image-uploader");
  imageUploader.classList.add("image-uploader");
  imageInputContainer.appendChild(imageUploader);

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

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  blogAdderForm.appendChild(addBlogBtn);

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

  backArrow.addEventListener("click", function (e) {
    displayMainDiv();

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

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    // console.log(validateBlogInfo(blogInfo));
    validateBlogInfo(blogInfo);
  });
  return blogAdder;
}
