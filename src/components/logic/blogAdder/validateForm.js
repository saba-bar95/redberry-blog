import validateImg from "./validations/validateImg";

export default function validateForm(blogInfo) {
  if (validateImg(blogInfo)) return true;
}
