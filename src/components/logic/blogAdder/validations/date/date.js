export default function validateDate(input) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  if (value) {
    input.style.border = "1px solid #14D81C";
  } else input.style.border = "1px solid #EA1919";

  blogInfo.date = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}
