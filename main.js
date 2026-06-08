

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  window.location.href = "./src/pages/active-session.html";
} else {
  window.location.href = "./src/pages/login-page.html";
}