export default toggleSelect = (selectElement) => {
  selectElement.addEventListener('click', (e) => {
    selectElement.classList.toggle('select-active');

    const optionElement = e.target.closest('ul li');
    if (!optionElement) return;

    selectElement.querySelector('span').textContent =
      optionElement.querySelector('span').textContent;
  });

  selectElement.addEventListener('blur', () => {
    selectElement.classList.remove('select-active');
  });
};
