// 1.2. Импортируем остальные js файлы в главный

import './homework-8.js'
import './gadget.js'
import './Modal.js'
import './Form.js'

let user;

// 4.1. Переписывание логики модального окна

const regModal = new Modal('modal', 'overlay');
const OpenBtn = document.getElementById('registration-button');

if (OpenBtn) {
  OpenBtn.addEventListener('click', () => {
    regModal.openModal();
  });
}

// 5.1. Переписывание логики формы регистрации

const registrationForm  = new Form('registration-form');
const regFormElement = document.getElementById('registration-form');

if (regFormElement) {
  regFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (registrationForm.isValidForm()) {
      user = registrationForm.getValuesForm();
      console.log(user);
      registrationForm.resetForm();
      regModal.closeModal();
    } else {
      alert("Регистрация отклонена: проверьте данные или совпадение паролей")
    }
  });
}

// 5.2. Переписывание логики формы подписки

const emailForm = new Form('email-form');
const emailFormElement = document.getElementById('email-form');

if (emailFormElement) {
  emailFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailForm.isValidForm()) {
      console.log(emailForm.getValuesForm());
      emailForm.resetForm();
    }
  });
}