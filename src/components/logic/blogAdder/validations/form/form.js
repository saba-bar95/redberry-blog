import validateImg from "../image/image";

export default function validateForm(blogInfo) {
  if (validateImg(blogInfo)) return true;
}
