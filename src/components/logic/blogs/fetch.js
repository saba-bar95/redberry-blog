export default async function fetchBlogs(url, token) {
  const response = await fetch(`${url}/blogs`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();
  return data;
}
