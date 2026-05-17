// 1.2. Импортируем остальные js файлы в главный

import './homework-8.js'
// import './homework-9.js'
import './gadget.js'
import './Modal.js'
import './Form.js'

let user;

// 4.1 Переписывание логики задания №9

const regModal = new Modal('modal', 'overlay');
const OpenBtn = document.getElementById('registration-button');

if (OpenBtn) {
  OpenBtn.addEventListener('click', () => {
    regModal.openModal();
  });
}

const registrationForm  = new Form('registration-form');
const regFormElement = document.getElementById('registration-form');

if (regFormElement) {
  regFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (registrationForm .isValidForm()) {
      user = registrationForm.getValuesForm();
      console.log(user);
      registrationForm .resetForm();
      regModal.closeModal()
    } else {
      alert("Регистрация отклонена: проверьте данные или совпадение паролей")
    }
  });
}