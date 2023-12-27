export default function validateImg(blogInfo) {
  if (blogInfo.image) {
    console.log("Image Exists");
    return true;
  }

  if (!blogInfo.image) {
    alert("Please upload an image");
    return false;
  }
}
