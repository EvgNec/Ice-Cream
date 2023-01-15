(() => {
  const refs = {
    openModalProductBtn: document.querySelector("[modal-product-open]"),
    closeModalProductBtn: document.querySelector("[modal-product-close]"),
    modalProduct: document.querySelector("[modal-product]"),

    openModalBuynowBtn: document.querySelector("[modal-buynow-open]"),
    closeModalBuynowBtn: document.querySelector("[modal-buynow-close]"),
    modalBuynow: document.querySelector("[modal-buynow]"),

    openModalLocationBtn: document.querySelector("[modal-location-open]"),
    closeModalLocationBtn: document.querySelector("[modal-location-close]"),
    modalLocation: document.querySelector("[modal-location]"),

    openModalFranchiseBtn: document.querySelector("[modal-franchise-open]"),
    closeModalFranchiseBtn: document.querySelector("[modal-franchise-close]"),
    modalFranchise: document.querySelector("[modal-franchise]"),
    
    openModalReadMoreBtn: document.querySelector("[modal-read-more-open]"),
    closeModalReadMoreBtn: document.querySelector("[modal-read-more-close]"),
    modalReadMore: document.querySelector("[modal-read-more]"),
  };

  refs.openModalProductBtn.addEventListener("click", toggleModalProduct);
  refs.closeModalProductBtn.addEventListener("click", toggleModalProduct);

   refs.openModalBuynowBtn.addEventListener("click", toggleModalBuynow);
  refs.closeModalBuynowBtn.addEventListener("click", toggleModalBuynow);
  
   refs.openModalLocationBtn.addEventListener("click", toggleModalLocation);
  refs.closeModalLocationBtn.addEventListener("click", toggleModalLocation);

  refs.openModalFranchiseBtn.addEventListener("click", toggleModalFranchise);
  refs.closeModalFranchiseBtn.addEventListener("click", toggleModalFranchise);

  refs.openModalReadMoreBtn.addEventListener("click", toggleModalReadMore);
  refs.closeModalReadMoreBtn.addEventListener("click", toggleModalReadMore);


  function toggleModalProduct() {
    refs.modalProduct.classList.toggle("is-hidden");
    
  }
  
  function toggleModalBuynow() {
     refs.modalBuynow.classList.toggle("is-hidden");
  }
  
  function toggleModalLocation() {
     refs.modalLocation.classList.toggle("is-hidden");
  }
  
  function toggleModalFranchise() {
     refs.modalFranchise.classList.toggle("is-hidden");
  }

    function toggleModalReadMore() {
     refs.modalReadMore.classList.toggle("is-hidden");
  }

})();