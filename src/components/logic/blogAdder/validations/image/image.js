export default function validateImg(blogInfo) {
  if (blogInfo.imageURL) {
    console.log("Image Exists");
    return true;
  }

  if (!blogInfo.imageURL) {
    alert("Please upload an image");
    return false;
  }
}
