import validateImg from "./validateImg";

export default function validateBlogInfo(blogInfo) {
  if (validateImg(blogInfo)) return true;
}
