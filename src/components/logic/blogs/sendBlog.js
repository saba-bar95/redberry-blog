export default function sendBlog() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const formData = new FormData();
  const base64String = blogInfo.image.base64;
  const newBase64 = base64String.replace(/^data:image\/\w+;base64,/, "");
  const blob = base64StringToBlob(newBase64);
  formData.append("title", blogInfo.title);
  formData.append("description", blogInfo.description);
  formData.append("image", blob, "filename.jpg");
  formData.append("author", blogInfo.author);
  formData.append("categories", JSON.stringify(blogInfo.categories));
  formData.append("publish_date", blogInfo.date);
  if (blogInfo.email) formData.append("email", blogInfo.email);

  async function postBlog() {
    try {
      const response = await fetch(
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer e73b2cdfdf3c029e1684fd536b3d9981f6d050358dce0c4a34cc98a854cd0af6",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Success", data);
    } catch (err) {
      console.log(err);
    }
  }

  postBlog();

  function base64StringToBlob(base64String) {
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: "image/jpeg" });
  }
}
