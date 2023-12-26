export default function updateAuthor(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "#14D81C";
    div.querySelector("li").style.color = "#14D81C";
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "#EA1919";
    div.querySelector("li").style.color = "#EA1919";
  }
}
