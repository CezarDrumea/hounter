export default translateCard = (element, position) => {
  element.forEach((card) => {
    card.style.transform = `translateX(calc(${position * 100}% + ${
      position * 3.2
    }rem))`;
  });
};
