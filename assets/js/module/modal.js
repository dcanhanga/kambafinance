export default function initModal() {
  const openModal = document.querySelector("[data-modal='open']");
  const closeModal = document.querySelector("[data-modal='close']");
  const userEvent = ["click", "touchstart"];
  const toggleModal = {
    modal: document.querySelector("[data-modal='modal']"),
    openModal(event) {
      event.preventDefault();
      this.modal.showModal();
    },
    closeModal(event) {
      event.preventDefault();
      this.modal.close();
    },
  };
  userEvent.forEach((event) => {
    openModal.addEventListener(event, (event) => {
      toggleModal.openModal(event);
    });
  });
  userEvent.forEach((event) => {
    closeModal.addEventListener(event, (event) => {
      toggleModal.closeModal(event);
    });
  });
}
