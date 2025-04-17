 
document.addEventListener('DOMContentLoaded', function () {
  const sponsorCols = document.querySelectorAll('.show-modal-overlay');
  sponsorCols.forEach((sponsor) => {
      const triggerBtn = sponsor.querySelector('[data-bs-toggle="modal"]');
      if (triggerBtn) {
          triggerBtn.addEventListener('click', function () {
              sponsorCols.forEach(col => col.classList.remove('active'));
              sponsor.classList.add('active');
              const modalId = triggerBtn.getAttribute('data-bs-target');
              const modalEl = document.querySelector(modalId);
              if (modalEl) {
                  modalEl.addEventListener('hidden.bs.modal', function () {
                      sponsor.classList.remove('active');
                  }, { once: true });

                  adjustModalPosition(sponsor);
              }
          });
      }
  });

  function adjustModalPosition(sponsor) {
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