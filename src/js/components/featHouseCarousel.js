import translateCard from '../helpers/translateCard';

const featHouseCarousel = document.querySelector('.featured-house__carousel');
const featHouseCards = featHouseCarousel.querySelectorAll('.large-card');

const arrowBtsContainer = document.querySelector('.featured-house__arrows');
const [arrowLeft, arrowRight] = document.querySelectorAll('.button--arrow');

export default moveFeatHouseCard = () => {
  let position = 0;

  featHouseCarousel.addEventListener('click', (e) => {
    const card = e.target.closest('.large-card');

    if (!card) return;

    if (card === featHouseCards[position + 3]) {
      position++;
      translateCard(featHouseCards, -position);
    }

    if (card === featHouseCards[position - 1]) {
      position--;
      translateCard(featHouseCards, -position);
    }
  });

  arrowBtsContainer.addEventListener('click', (e) => {
    const buttonArrow = e.target.closest('.button--arrow');

    if (!buttonArrow) return;

    if (buttonArrow === arrowRight && position < featHouseCards.length - 3) {
      position++;
      translateCard(featHouseCards, -position);
    }

    if (buttonArrow === arrowLeft && position > 0) {
      position--;
      translateCard(featHouseCards, -position);
    }
  });
};
