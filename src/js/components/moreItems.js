export default showMoreItems = (showMoreBtn, insertAfter, showElements) => {
  showMoreBtn.addEventListener('click', () => {
    setTimeout(
      () => insertAfter.insertAdjacentHTML('afterend', showElements.join('')),
      500
    );
  });
};
