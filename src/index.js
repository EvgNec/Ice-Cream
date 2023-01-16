(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    close1ModalBtn: document.querySelector("[data-menu-close1]"),
    close2ModalBtn: document.querySelector("[data-menu-close2]"),
    close3ModalBtn: document.querySelector("[data-menu-close3]"),
    close4ModalBtn: document.querySelector("[data-menu-close4]"),
    close5ModalBtn: document.querySelector("[data-menu-close5]"),
    modal: document.querySelector("[data-menu]"),
  };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.close1ModalBtn.addEventListener("click", toggleModal);
    refs.close2ModalBtn.addEventListener("click", toggleModal);
    refs.close3ModalBtn.addEventListener("click", toggleModal);
    refs.close4ModalBtn.addEventListener("click", toggleModal);
    refs.close5ModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();