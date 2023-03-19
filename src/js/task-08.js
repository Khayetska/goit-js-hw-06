const loginFormEl = document.querySelector(".login-form");
const submitBtnEl = document.querySelector("button");

const emailInputEl = loginFormEl.elements.email;
const passwordInputEl = loginFormEl.elements.password;

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInputEl.value === "" || passwordInputEl.value === "") {
    return window.alert("Всі поля повинні бути заповнені!");
  }

  const allData = {
    [emailInputEl.name]: emailInputEl.value,
    [passwordInputEl.name]: passwordInputEl.value,
  };

  console.log(allData);

  event.target.reset();
});
