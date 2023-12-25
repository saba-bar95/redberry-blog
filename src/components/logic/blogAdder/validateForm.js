import validateImg from "./validations/image/validateImg";

export default function validateForm(blogInfo) {
  if (validateImg(blogInfo)) return true;
}
