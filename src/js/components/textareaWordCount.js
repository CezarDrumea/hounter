const textarea = document
  .querySelector('.join-now__form-card-textarea')
  .querySelector('textarea');
const countElem = document
  .querySelector('.join-now__form-card-textarea')
  .querySelector('p');

export default displayCountWords = () => {
  textarea.addEventListener('input', (e) => {
    const text = e.currentTarget.value;
    const count = text.length;
    countElem.textContent = `${count}/500`;
  });
};
