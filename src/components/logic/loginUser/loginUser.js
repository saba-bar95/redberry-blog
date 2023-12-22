import validateEmail from "./validateEmail";
import checkEmail from "./checkEmail";

export default function loginUser(input) {
  if (validateEmail(input)) {
    return checkEmail(input.value).then((data) => data);
  }
}
