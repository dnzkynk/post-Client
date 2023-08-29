export default function token() {
  const tokenString = localStorage.getItem("auth");
  return tokenString !== null ? JSON.parse(tokenString) : null;
}
