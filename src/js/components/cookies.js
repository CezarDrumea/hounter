export default closeCookie = (closeBtn) => {
  closeBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.add('cookies--hidden');
  });
};
