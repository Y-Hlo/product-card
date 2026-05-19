// 5. Создание файла Form.js, а в нем класса для формы под названием Form

class Form {
  constructor(formId) {
    this.formId = formId;
    this.formElement = document.getElementById(formId);
  }

  getValuesForm() {
    const values = {};
    const allInputs = this.formElement.querySelectorAll('input');

    allInputs.forEach(input => {
      values[input.name] = input.value;
    })
      values.createdOn = new Date();

    return values;
  }

  isValidForm() {
    const isNativeValid = this.formElement.checkValidity();
    const valuesForm = this.getValuesForm();

    if ('password' in valuesForm) {
      return isNativeValid && valuesForm.password === valuesForm['password-confirm'];
    } else {
      return isNativeValid;
    }
  }

  resetForm() {
    this.formElement.reset();
  }
}

window.Form = Form;