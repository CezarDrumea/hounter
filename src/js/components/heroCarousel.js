const heroBg = document.querySelector('.hero__background');

export default scrollToElement = () => {
  heroBg.addEventListener('click', (e) => {
    const heroBgWidth = parseFloat(getComputedStyle(heroBg).width);
    const smallCardLeft = e.target.closest('.hero__recommendation-card--1');
    const smallCardCenter = e.target.closest('.hero__recommendation-card--2');
    const smallCardRight = e.target.closest('.hero__recommendation-card--3');

    if (!(smallCardLeft || smallCardCenter || smallCardRight)) return;

    if (smallCardLeft) e.currentTarget.scrollLeft += -heroBgWidth;

    if (smallCardCenter) {
      const smallCardCenterCoords = smallCardCenter.getBoundingClientRect();
      const smallCardCenterWidth = parseFloat(
        getComputedStyle(smallCardCenter).width
      );

      const smallCardCenterCurrPos =
        smallCardCenterCoords.left - heroBgWidth + smallCardCenterWidth / 2;

      e.currentTarget.scrollLeft -= heroBgWidth / 2 - smallCardCenterCurrPos;
    }

    if (smallCardRight) e.currentTarget.scrollLeft += heroBgWidth;
  });
};
