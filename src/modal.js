(() => {
  const refs = {
    openModalProductBtn: document.querySelector("[modal-product-open]"),
    closeModalProductBtn: document.querySelector("[modal-product-close]"),
    modalProduct: document.querySelector("[modal-product]"),

    openModalBuynowBtn: document.querySelector("[modal-buynow-open]"),
    closeModalBuynowBtn: document.querySelector("[modal-buynow-close]"),
    modalBuynow: document.querySelector("[modal-buynow]"),
  };

  refs.openModalProductBtn.addEventListener("click", toggleModalProduct);
  refs.closeModalProductBtn.addEventListener("click", toggleModalProduct);

   refs.openModalBuynowBtn.addEventListener("click", toggleModalBuynow);
  refs.closeModalBuynowBtn.addEventListener("click", toggleModalBuynow);

  function toggleModalProduct() {
    refs.modalProduct.classList.toggle("is-hidden");
    
  }
  function toggleModalBuynow() {
     refs.modalBuynow.classList.toggle("is-hidden");
  }
  

})();