import { saveSession } from "./session.js";

const adminEmail = "admindash@example.com";
const adminPassword = "loginadmin12";

export function isEmailValid(email) {
   return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
}

function isPasswordValid(password) {
  return password.length >= 8 && /\d/.test(password);
}

export function initLoginPage() {
  const emailInput = document.querySelector("#email-login");
  const passwordInput = document.querySelector("#password-login");
  const loginButton = document.querySelector(".login-btn");

  loginButton.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isEmailValid(email)) {
      alert("Email invalid");
      return;
    }

    if (!isPasswordValid(password)) {
      alert("Password must have at least 8 characters and one digit");
      return;
    }

    if (email !== adminEmail || password !== adminPassword) {
      alert("Email or password incorrect");
      return;
    }

    saveSession();
    window.location.href = "./active-session.html";
  });
}