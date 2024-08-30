// Logs user out and deletes token from localStorage
export const handleLogout = (setToken) => {
  localStorage.removeItem("token");
  setToken(""); // Clear the token in the atom
  console.log("Token deleted");
};
