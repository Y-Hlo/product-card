// 5. Создание файла Form.js, а в нем класса для формы под названием Form

class Form {
  constructor(formId) {
    this.formId = formId;
    this.formElement = document.getElementById(formId);
  }

  // 5.1. Метод I. Для получения всех значений формы.

  getValuesForm() {
    const firstNameValue = this.formElement.querySelector('[name="first-name"]').value;
    const lastNameValue = this.formElement.querySelector('[name="last-name"]').value;
    const dateValue = this.formElement.querySelector('[name="birth-date"]').value
    const loginValue = this.formElement.querySelector('[name="login"]').value
    const passwordValue = this.formElement.querySelector('[name="password"]').value
    const PasswordConfirmValue = this.formElement.querySelector('[name="password-confirm"]').value

    return {
      firstName: firstNameValue,
      lastName: lastNameValue,
      birthDate: dateValue,
      login: loginValue,
      password: passwordValue,
      PasswordConfirm: PasswordConfirmValue,
      createdOn: new Date(),
    }
  }

// 5.2. Метод II. Для проверки валидности формы 

  isValidForm() {
    const valuesForm = this.getValuesForm();
    return this.formElement.checkValidity() && valuesForm.password === valuesForm.PasswordConfirm;
  }

// 5.3. Метод III. Для сброса значений формы.

  resetForm() {
    this.formElement.reset();
  }
}

window.Form = Form;