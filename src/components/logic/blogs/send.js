import createSuccessModal from "../../dom/blogAdder/success/create";

export default function sendBlog() {
  createSuccessModal();

  // const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  // blogInfo = {}

  // const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  // const formData = new FormData();
  // const base64String = blogInfo.image.base64;
  // const newBase64 = base64String.replace(/^data:image\/\w+;base64,/, "");
  // const blob = base64StringToBlob(newBase64);
  // formData.append("title", blogInfo.title);
  // formData.append("description", blogInfo.description);
  // formData.append("image", blob, "filename.jpg");
  // formData.append("author", blogInfo.author);
  // formData.append("categories", JSON.stringify(blogInfo.categories));
  // formData.append("publish_date", blogInfo.date);
  // formData.append("email", blogInfo.email);
  // fetch("https://api.blog.redberryinternship.ge/api/blogs", {
  //   method: "POST",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer e73b2cdfdf3c029e1684fd536b3d9981f6d050358dce0c4a34cc98a854cd0af6",
  //   },
  //   body: formData,
  // })
  //   .then((response) => console.log(response))
  //   .then((data) => console.log("Success"))
  //   .catch((err) => console.log(err));
  // function base64StringToBlob(base64String) {
  //   const binaryString = atob(base64String);
  //   const len = binaryString.length;
  //   const bytes = new Uint8Array(len);
  //   for (let i = 0; i < len; i++) {
  //     bytes[i] = binaryString.charCodeAt(i);
  //   }
  //   return new Blob([bytes], { type: "image/jpeg" });
  // }
}
