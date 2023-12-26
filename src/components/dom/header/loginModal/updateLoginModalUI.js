import { removeLoginModal } from "./createLoginModal";

export default function updateLoginModalUI(data, div) {
  const container = div.querySelector(".input-container");
  const input = div.querySelector("input");
  const successContainer = div.querySelector(".success-container");
  const errorContainer = div.querySelector(".error-container");
  const entryBtn = div.querySelector(".entry-btn");
  const successBtn = div.querySelector(".success-btn");

  if (data) {
    container.classList.add("hidden");
    successContainer.classList.remove("hidden");
    entryBtn.classList.add("hidden");
    successBtn.classList.remove("hidden");
    errorContainer.classList.add("hidden");

    successBtn.addEventListener("click", function (e) {
      removeLoginModal(e);
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
    });
  }

  if (!data) {
    errorContainer.classList.remove("hidden");
    input.style.borderColor = "#ff0000";
    input.style.marginBottom = "10px";

    input.addEventListener("focus", () => {
      inputEvents("#5d37f3");
    });
    input.addEventListener("input", () => {
      inputEvents("#5d37f3");
    });
    input.addEventListener("blur", () => {
      inputEvents("#000000");
    });

    function inputEvents(color) {
      input.style.borderColor = color;
      input.style.marginBottom = "20px";
      if (!errorContainer.classList.contains("hidden"))
        errorContainer.classList.add("hidden");
    }
  }
}
