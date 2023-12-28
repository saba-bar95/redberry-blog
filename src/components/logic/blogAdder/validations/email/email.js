export default function validateEmail(input) {
  const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(input.value) && input.value.endsWith("@redberry.ge")) {
    return true;
  } else {
    return false;
  }
}
