import translateCard from '../helpers/translateCard';

const carousel = document.querySelector('.testimonials__carousel');
const cards = carousel.querySelectorAll('.testimonials__card');

const navDotsContainer = document.querySelector(
  '.testimonials__navigation-dots'
);
const navDots = navDotsContainer.querySelectorAll(
  '.testimonials__navigation-dot'
);

export default moveTestimonialCard = () => {
  let position = 1;

  const handleTranslateCard = (elem, elemsCollection) => {
    if (!elem) return;

    if (elem === elemsCollection[position + 1]) {
      navDots[position].classList.remove(
        'testimonials__navigation-dot--active'
      );
      position++;
      translateCard(cards, -position + 1);
      navDots[position].classList.add('testimonials__navigation-dot--active');
    }

    if (elem === elemsCollection[position - 1]) {
      navDots[position].classList.remove(
        'testimonials__navigation-dot--active'
      );
      position--;
      translateCard(cards, -position + 1);
      navDots[position].classList.add('testimonials__navigation-dot--active');
    }
  };

  carousel.addEventListener('click', (e) => {
    const card = e.target.closest('.testimonials__card');
    handleTranslateCard(card, cards, position);
  });

  navDotsContainer.addEventListener('click', (e) => {
    const navDot = e.target.closest('.testimonials__navigation-dot');
    handleTranslateCard(navDot, navDots, position);
  });
};
