const cookiesCloseBtn = document.querySelector('.cookies__close-button');

export default closeCookie = () => {
  cookiesCloseBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.add('cookies--hidden');
  });
};
