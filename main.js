import { initLoginPage } from "./src/js/auth.js";
import { isLoggedIn } from "./src/js/session.js";
import { initEmployeesPage } from "./src/js/employees.js";

const page = document.body.dataset.page;

if (page === "index") {
  if (isLoggedIn()) {
    window.location.href = "./src/pages/active-session.html";
  } else {
    window.location.href = "./src/pages/login-page.html";
  }
}

if (page === "login") {
  initLoginPage();
}

if (page === "active-session") {
  setTimeout(() => {
    window.location.href = "./employee-directory.html";
  }, 2500);
}

if (page === "employees") {
  if (!isLoggedIn()) {
    window.location.href = "./login-page.html";
  } else {
    initEmployeesPage();
  }
}
