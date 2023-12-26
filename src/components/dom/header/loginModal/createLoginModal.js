import xSvg from "/src/assets/images/x-icon.svg";
import redCircleImg from "/src/assets/images/info-circle.png";
import greenSuccessImg from "/src/assets/images/success-circle.png";
import loginUser from "../../../logic/loginUser/loginUser";
import updateLoginModalUI from "./updateLoginModalUI";

let removeLoginModal;

export default function createLoginModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const container = document.createElement("div");
  container.setAttribute("id", "modal-container");
  body.appendChild(container);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  container.appendChild(modalContent);

  const xImg = new Image();
  xImg.classList.add("x-img");
  xImg.src = xSvg;
  modalContent.appendChild(xImg);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  modalContent.appendChild(inputContainer);

  const text = document.createElement("h1");
  text.textContent = "შესვლა";
  inputContainer.appendChild(text);

  const label = document.createElement("label");
  label.textContent = "ელ-ფოსტა";
  label.setAttribute("for", "email");
  inputContainer.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", "email");
  input.setAttribute("placeholder", "Example@redberry.ge");
  input.setAttribute("required", "");
  inputContainer.appendChild(input);
  input.focus();

  const successContainer = document.createElement("div");
  successContainer.classList.add("success-container", "hidden");
  modalContent.appendChild(successContainer);

  const successImg = new Image();
  successImg.src = greenSuccessImg;
  successContainer.appendChild(successImg);

  const successText = document.createElement("h1");
  successText.textContent = "წარმატებული ავტორიზაცია";
  successContainer.appendChild(successText);

  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container", "hidden");
  modalContent.appendChild(errorContainer);

  const redCircle = new Image();
  redCircle.src = redCircleImg;
  errorContainer.appendChild(redCircle);

  const errorMsg = document.createElement("p");
  errorMsg.textContent = "ელ-ფოსტა არ მოიძებნა";
  errorContainer.appendChild(errorMsg);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-btn");
  modalContent.appendChild(entryBtn);

  const successBtn = document.createElement("button");
  successBtn.classList.add("success-btn", "hidden");
  successBtn.textContent = "კარგი";
  modalContent.appendChild(successBtn);

  container.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") removeLoginModal(e);
  });

  xImg.addEventListener("click", (e) => {
    removeLoginModal(e);
  });

  entryBtn.addEventListener("click", updateLoginModal);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateLoginModal();
    }
  });

  function updateLoginModal() {
    if (loginUser(input)) {
      loginUser(input).then((data) => {
        updateLoginModalUI(data, container);
        localStorage.setItem("login", JSON.stringify(true));
      });
    }
  }

  removeLoginModal = function (e) {
    if (
      e.target.classList.contains("x-img") &&
      entryBtn.classList.contains("hidden")
    ) {
      normalBody();
      entryBtn.classList.add("hidden");
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
    }

    if (!entryBtn.classList.contains("hidden")) {
      normalBody();
    }

    if (e.target.classList.contains("success-btn")) {
      normalBody();
    }
  };

  function normalBody() {
    container.remove();
    body.style.overflow = "visible";
  }
}

export { removeLoginModal };
