export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.results;
};
