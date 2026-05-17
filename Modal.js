// 4. Создание файла Modal.js, а в нем класса модального окна под названием Modal

class Modal {
  constructor(modalId, overlayId) {
    this.modalId = modalId;
    this.overlayId = overlayId;
    this.modalElement = document.getElementById(modalId);
    this.overlayElement = document.getElementById(overlayId);
    this.closeButton = document.getElementById('modal-exit__button');
    this.initListener();
  }

  initListener() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.closeModal();
      });
    }
  }

  openModal() {
    this.modalElement.classList.add('modal-showed');
    if (this.overlayElement) {
      this.overlayElement.classList.add('overlay-showed')
    }
  }

  closeModal() {
    this.modalElement.classList.remove('modal-showed');
    if (this.overlayElement) {
      this.overlayElement.classList.remove('overlay-showed')
    }
  }

  isOpenModal() {
    return this.modalElement.classList.contains('modal-showed')
  }
}

window.Modal = Modal;