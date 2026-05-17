// 5. Создание файла Form.js, а в нем класса для формы под названием Form

class Form {
  constructor(formId) {
    this.formId = formId;
    this.formElement = document.getElementById(formId);
  }

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

  isValidForm() {
    const valuesForm = this.getValuesForm();
    return this.formElement.checkValidity() && valuesForm.password === valuesForm.PasswordConfirm;
  }

  resetForm() {
    this.formElement.reset();
  }
}

window.Form = Form;