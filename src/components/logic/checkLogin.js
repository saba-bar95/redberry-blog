export default async function checkLogin(email) {
  try {
    const response = await fetch(
      "https://api.blog.redberryinternship.ge/api/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${email}`,
        }),
      }
    );
    if (response.status === 204) {
      console.log("Email exists.");
      return true;
    } else if (response.status === 422) {
      console.log("Email does not exist.");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
