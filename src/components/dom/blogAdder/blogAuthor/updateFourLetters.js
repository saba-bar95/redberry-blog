export default function updateFourLetters(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "green";
    div.querySelector("li").style.color = "green";
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "red";
    div.querySelector("li").style.color = "red";
  }
}
