import { removeLoginModal } from "./createLoginModal";

export default function updateLoginModal(data, div) {
  const inputContainer = div.querySelector(".input-container");
  const emailInput = div.querySelector("input");
  const successContainer = div.querySelector(".success-container");
  const errorContainer = div.querySelector(".error-container");
  const entryBtn = div.querySelector(".entry-btn");
  const successBtn = div.querySelector(".success-btn");
  const xImg = div.querySelector(".x-img");

  if (data) {
    inputContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    entryBtn.classList.add("hidden");
    successBtn.classList.remove("hidden");
    errorContainer.classList.add("hidden");
    xImg.classList.add("hidden");

    successBtn.addEventListener("click", function (e) {
      removeLoginModal(e);
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
      localStorage.setItem("login", JSON.stringify(true));
    });
  }

  if (!data) {
    errorContainer.classList.remove("hidden");
    emailInput.style.borderColor = "#ff0000";
    emailInput.style.marginBottom = "10px";

    emailInput.addEventListener("focus", () => {
      emailInputEvents("#5d37f3");
    });
    emailInput.addEventListener("input", () => {
      emailInputEvents("#5d37f3");
    });
    emailInput.addEventListener("blur", () => {
      emailInputEvents("#000000");
    });

    function emailInputEvents(color) {
      emailInput.style.borderColor = color;
      emailInput.style.marginBottom = "20px";
      if (!errorContainer.classList.contains("hidden"))
        errorContainer.classList.add("hidden");
    }
  }
}
