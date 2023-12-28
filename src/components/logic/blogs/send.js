export default function sendBlog() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  console.log(blogInfo);
}
