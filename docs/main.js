const page = document.body.dataset.page;

if (page === "index") {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    window.location.href = "./src/pages/active-session.html";
  } else {
    window.location.href = "./src/pages/login-page.html";
  }
}

if (page === "active-session") {
  setTimeout(() => {
    window.location.href = "./employee-directory.html";
  }, 2500);
}
