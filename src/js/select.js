export const toggleSelect = (selectElement) => {
  selectElement.addEventListener('click', (e) => {
    selectElement.classList.toggle('button--select-active');

    const optionElement = e.target.closest('ul li');
    if (!optionElement) return;

    selectElement.querySelector('.button__text-fixed').textContent =
      optionElement.querySelector('span').textContent;
  });

  selectElement.addEventListener('blur', () => {
    selectElement.classList.remove('button--select-active');
  });
};
