(() => {
  const refs = {
    openModalIceCreameBtn: document.querySelector("[modal-ice-creame-open]"),
    closeModalIceCreameBtn: document.querySelector("[modal-ice-creame-close]"),
    modalIceCreame: document.querySelector("[modal-ice-creame]"),

    openModalIceCoffeBtn: document.querySelector("[modal-ice-coffee-open]"),
    closeModalIceCoffeBtn: document.querySelector("[modal-ice-coffee-close]"),
    modalIceCoffe: document.querySelector("[modal-ice-coffee]"),
    
    openModalMilkshakeBtn: document.querySelector("[modal-milkshake-open]"),
    closeModalMilkshakeBtn: document.querySelector("[modal-milkshake-close]"),
    modalMilkshake: document.querySelector("[modal-milkshake]"),

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

  refs.openModalIceCreameBtn.addEventListener("click", toggleModalIceCreame);
  refs.closeModalIceCreameBtn.addEventListener("click", toggleModalIceCreame);

  refs.openModalIceCoffeBtn.addEventListener("click", toggleModalIceCoffe);
  refs.closeModalIceCoffeBtn.addEventListener("click", toggleModalIceCoffe);

  refs.openModalMilkshakeBtn.addEventListener("click", toggleModalMilkshake);
  refs.closeModalMilkshakeBtn.addEventListener("click", toggleModalMilkshake);

   refs.openModalBuynowBtn.addEventListener("click", toggleModalBuynow);
  refs.closeModalBuynowBtn.addEventListener("click", toggleModalBuynow);
  
   refs.openModalLocationBtn.addEventListener("click", toggleModalLocation);
  refs.closeModalLocationBtn.addEventListener("click", toggleModalLocation);

  refs.openModalFranchiseBtn.addEventListener("click", toggleModalFranchise);
  refs.closeModalFranchiseBtn.addEventListener("click", toggleModalFranchise);

  refs.openModalReadMoreBtn.addEventListener("click", toggleModalReadMore);
  refs.closeModalReadMoreBtn.addEventListener("click", toggleModalReadMore);


  function toggleModalIceCreame() {
    refs.modalIceCreame.classList.toggle("is-hidden");
    
  }
  
  function toggleModalIceCoffe() {
    refs.modalIceCoffe.classList.toggle("is-hidden");
    
  }

  function toggleModalMilkshake() {
    refs.modalMilkshake.classList.toggle("is-hidden");
    
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

  refs.modalBuynow.addEventListener('submit', e => {
    refs.modalBuynow.classList.toggle("is-hidden");
  })

  refs.modalFranchise.addEventListener('submit', e => {
    refs.modalFranchise.classList.toggle("is-hidden");
  })

  refs.modalLocation.addEventListener('submit', e => {
    refs.modalLocation.classList.toggle("is-hidden");
  })
  
  refs.modalIceCreame.addEventListener('submit', e => {
    refs.modalIceCreame.classList.toggle("is-hidden");
  })

  refs.modalIceCoffe.addEventListener('submit', e => {
    refs.modalIceCoffe.classList.toggle("is-hidden");
  })

  refs.modalMilkshake.addEventListener('submit', e => {
    refs.modalMilkshake.classList.toggle("is-hidden");
  })


  refs.modalReadMore.addEventListener('submit', e => {
    refs.modalReadMore.classList.toggle("is-hidden");
  })
  

})();