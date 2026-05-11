// 1. Создание файла js

// 6.2. Создание внешней переменной

let user;

// 4. Добавление логики к форме внутри футера

const emailForm = document.getElementById("email-form");
const emailInput = emailForm.querySelector("[name='email']");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue && emailPattern.test(emailValue)) {
    console.log({ email: emailValue });
  }
});

// 5.3. Добавление логики к кнопке модального окна регистрации

const openRegButton = document.getElementById("registration-button")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const closedRegButton = document.getElementById("modal-exit__button")

openRegButton.addEventListener("click", () => {
  overlay.classList.add("overlay-showed");
  modal.classList.add("modal-showed");
})

closedRegButton.addEventListener("click", () => {
  overlay.classList.remove("overlay-showed");
  modal.classList.remove("modal-showed");
})

// 6.2. Создание логики для регистрации внутри модального окна

const regForm = document.getElementById("registration-form");

regForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const firstNameValue = regForm.querySelector('[name="first-name"]').value;
  const lastNameValue = regForm.querySelector('[name="last-name"]').value;
  const dateValue = regForm.querySelector('[name="birth-date"]').value
  const loginValue = regForm.querySelector('[name="login"]').value
  const passwordValue = regForm.querySelector('[name="password"]').value
  const PasswordConfirmValue = regForm.querySelector('[name="password-confirm"]').value

  if (regForm.checkValidity() && passwordValue === PasswordConfirmValue) {
    user = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      birthDate: dateValue,
      login: loginValue,
      password: passwordValue,
      PasswordConfirm: PasswordConfirmValue,
      createdOn: new Date(),
    };
    console.log(user)
    overlay.classList.remove("overlay-showed");
    modal.classList.remove("modal-showed");
  } else {
    alert("Регистрация отклонена: проверьте данные или совпадение паролей");
  }
});