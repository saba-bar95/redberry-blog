export default function validateDate(input) {
  const value = input.value;
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  blogInfo.date = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));

  if (value) {
    input.style.border = "1px solid #14D81C";
    return true;
  } else {
    input.style.border = "1px solid #EA1919";
    return false;
  }
}
