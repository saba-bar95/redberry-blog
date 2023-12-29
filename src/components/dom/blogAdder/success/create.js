import xSvg from "/src/assets/images/x-icon.svg";
import successImg from "/src/assets/images/success-circle.png";
import displayMainDiv from "/src/components/dom/main/display.js";

export default function createSuccessModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const container = document.createElement("div");
  container.setAttribute("id", "success-container");
  body.appendChild(container);

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const xImg = new Image();
  xImg.src = xSvg;
  xImg.classList.add("x-img");
  content.appendChild(xImg);

  const success = new Image();
  success.src = successImg;
  success.classList.add("success-img");
  content.appendChild(success);

  const text = document.createElement("h1");
  text.textContent = "ჩანაწერი წარმატებით დაემატა";
  content.appendChild(text);

  const button = document.createElement("button");
  button.textContent = "მთავარ გვერდზე დაბრუნება";
  content.appendChild(button);

  xImg.addEventListener("click", function () {
    container.remove();
    normalBody();
    location.reload();
  });

  button.addEventListener("click", function () {
    displayMainDiv();
    container.remove();
    normalBody();
    location.reload();
  });

  function normalBody() {
    container.remove();
    body.style.overflow = "visible";
  }
}
