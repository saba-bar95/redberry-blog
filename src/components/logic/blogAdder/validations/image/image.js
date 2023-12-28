export default function validateImg() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  if (blogInfo.image) return true;

  if (!blogInfo.image) {
    alert("Please upload an image");
    return false;
  }
}
