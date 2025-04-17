// document.addEventListener('DOMContentLoaded', function () {
//     const sponsorCols = document.querySelectorAll('.show-modal-overlay');
  
//     sponsorCols.forEach((sponsor) => {
//       const triggerBtn = sponsor.querySelector('[data-bs-toggle="modal"]');
  
//       if (triggerBtn) {
//         triggerBtn.addEventListener('click', function () {
//           sponsorCols.forEach(col => col.classList.remove('active'));
  
//           sponsor.classList.add('active');
  
//           const modalId = triggerBtn.getAttribute('data-bs-target');
//           const modalEl = document.querySelector(modalId);
  
//           if (modalEl) {
//             modalEl.addEventListener('hidden.bs.modal', function () {
//               sponsor.classList.remove('active');
//             }, { once: true });
//           }
//         });
//       }
//     });
//   });
 
document.addEventListener('DOMContentLoaded', function () {
  const sponsorCols = document.querySelectorAll('.show-modal-overlay');
  sponsorCols.forEach((sponsor) => {
      const triggerBtn = sponsor.querySelector('[data-bs-toggle="modal"]');
      if (triggerBtn) {
          triggerBtn.addEventListener('click', function () {
              sponsorCols.forEach(col => col.classList.remove('active'));
              sponsor.classList.add('active');
              const modalId = triggerBtn.getAttribute('data-bs-target');
              console.log("modalId",modalId)
              const modalEl = document.querySelector(modalId);
              console.log("modalEl",modalEl)
              if (modalEl) {
                  modalEl.addEventListener('hidden.bs.modal', function () {
                      sponsor.classList.remove('active');
                  }, { once: true });

                  adjustModalPosition(modalEl, sponsor);
              }
          });
      }
  });
  // function adjustModalPosition(modalEl, sponsor) {
  //   console.log("sponsor",sponsor)
  //     const sponsorRect = sponsor.getBoundingClientRect();
  //     console.log("sponsorRect",sponsorRect)
  //     const modalHeight = modalEl.offsetHeight;
  //     const sponsorHeight = sponsor.offsetHeight;
  //     modalEl.style.transform = `translateY(${sponsorRect.top - modalHeight - sponsorHeight}px)`;
  // }
  function adjustModalPosition(modalEl, sponsor) {
    const sponsorRect = sponsor.getBoundingClientRect();
    const sponsorTop = sponsorRect.top + window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollTo = sponsorTop - (windowHeight / 2) + (sponsor.offsetHeight / 2);
  
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  }
  
});