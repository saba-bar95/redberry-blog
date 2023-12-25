export default function updateGeorgianVal(valid) {
  const div = document.querySelector(".validation-container--3");

  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "green";
    div.querySelector("li").style.color = "green";
    return true;
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "red";
    div.querySelector("li").style.color = "red";
    return false;
  }
}
