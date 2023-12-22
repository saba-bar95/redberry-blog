import xSvg from "/src/assets/images/x-icon.svg";
import redCircleImg from "/src/assets/images/info-circle.png";
import greenSuccessImg from "/src/assets/images/success-circle.png";
import loginUser from "../../../logic/loginUser/loginUser";
import updateLoginModal from "./updateLoginModal";

let removeLoginModal;

export default function createLoginModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("id", "modal-container");
  body.appendChild(modalContainer);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContainer.appendChild(modalContent);

  const xImg = new Image();
  xImg.classList.add("x-img");
  xImg.src = xSvg;
  modalContent.appendChild(xImg);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  modalContent.appendChild(inputContainer);

  const modalHeaderText = document.createElement("h1");
  modalHeaderText.textContent = "შესვლა";
  inputContainer.appendChild(modalHeaderText);

  const modalLabel = document.createElement("label");
  modalLabel.textContent = "ელ-ფოსტა";
  modalLabel.setAttribute("for", "email");
  inputContainer.appendChild(modalLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("placeholder", "Example@redberry.ge");
  emailInput.setAttribute("required", "");
  inputContainer.appendChild(emailInput);
  emailInput.focus();

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

  modalContainer.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") removeLoginModal(e);
  });

  xImg.addEventListener("click", (e) => {
    removeLoginModal(e);
  });

  entryBtn.addEventListener("click", changeModalUI);

  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      changeModalUI();
    }
  });

  function changeModalUI() {
    if (loginUser(emailInput)) {
      loginUser(emailInput).then((data) => {
        updateLoginModal(data, modalContainer);
      });
    }
  }

  removeLoginModal = function (e) {
    if (!entryBtn.classList.contains("hidden")) {
      modalContainer.remove();
      body.style.overflow = "visible";
    }

    if (e.target.classList.contains("success-btn")) {
      modalContainer.remove();
      body.style.overflow = "visible";
    }
  };
}

export { removeLoginModal };
