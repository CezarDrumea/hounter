import toggleSelect from './components/select';
import showMoreItems from './components/moreItems';
import closeCookies from './components/cookies';
import scrollToElement from './components/heroCarousel';
import moveFeatHouseCard from './components/featHouseCarousel';
import moveTestimonialCard from './components/testimonialsCarousel';
import displayCountWords from './components/textareaWordCount';

const selectHero = document.querySelector('.header__select');
const selectJoinNow = document.querySelector('.join-now__form-card-select');

toggleSelect(selectHero);
toggleSelect(selectJoinNow);

closeCookies();
showMoreItems();
scrollToElement();
moveFeatHouseCard();
moveTestimonialCard();
displayCountWords();
