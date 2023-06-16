"use strict";

const emailInput = document.getElementById("email-input");
const btn = document.getElementById("btn");
const mainSection = document.getElementById("main-section");
const subscribedSection = document.getElementById("subscribed-section");
const errorText = document.getElementById("error-text");
const dismissBtn = document.getElementById("dismiss-btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailInputValue;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  emailInputValue = emailInput.value;

  if (emailRegex.test(emailInputValue)) {
    mainSection.classList.add("hidden");
    subscribedSection.classList.remove("hidden");
  } else {
    errorText.classList.remove("hidden");
    emailInput.classList.add("error-email-outline");
    emailInput.setAttribute("placeholder", "ash#loremcompany.com");
  }
});

// macdevis26@gmail.com

emailInput.addEventListener("keydown", (e) => {
  errorText.classList.add("hidden");
  emailInput.classList.remove("error-email-outline");
  if (emailInputValue === "") {
    emailInput.setAttribute("placeholder", "email@company.com");
  }
});

dismissBtn.addEventListener("click", () => {
  mainSection.classList.remove("hidden");
  subscribedSection.classList.add("hidden");

  emailInput.value = "";
});
