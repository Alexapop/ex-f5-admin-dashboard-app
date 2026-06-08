const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getEmployees() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Could not load employees");
  }

  return response.json();
}