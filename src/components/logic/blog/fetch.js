export default async function fetchBlog(id) {
  try {
    const response = await fetch(
      `https://api.blog.redberryinternship.ge/api/blogs/${id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer e73b2cdfdf3c029e1684fd536b3d9981f6d050358dce0c4a34cc98a854cd0af6`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Too many requests");
    console.log("There was a problem with the fetch operation: ", error);
  }
}
