export default function initModal() {
  const openModal = document.querySelector("[data-modal='open']");
  const closeModal = document.querySelector("[data-modal='close']");

  const userEvent = ["click", "touchstart"]

  const toggleModal = {

    modal: document.querySelector("[data-modal='modal']"),
    toggleModal(event) {
      event.preventDefault();
      this.modal.classList.toggle("active");
    },
  }
  userEvent.forEach(event => {

    openModal.addEventListener(event, event => {
      toggleModal.toggleModal(event);
    })
  });

  userEvent.forEach(event => {

    closeModal.addEventListener(event, event => {
      toggleModal.toggleModal(event);
    })
  });
}
