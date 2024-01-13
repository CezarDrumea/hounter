import toggleSelect from './components/select';
import showMoreItems from './components/moreItems';
import closeCookies from './components/cookies';

const selectHero = document.querySelector('.header__select');
const selectJoinNow = document.querySelector('.join-now__form-card-select');
const cookiesCloseBtn = document.querySelector('.cookies__close-button');
const lastFindMoreCard = [
  ...document
    .querySelector('.find-more__cards')
    .querySelectorAll('.medium-card'),
].at(-1);
const findMoreBtn = document.querySelector('.find-more__more-articles');

const findMoreElementsToInsert = [
  `
    <div class="medium-card">
      <div class="find-more__card-bg-img--1 medium-card__bg-img"></div>
      <div class="medium-card__content">
        <div class="medium-card__person">
          <div
            class="find-more__person-icon--1 medium-card__person-icon"
          ></div>
          <span class="medium-card__person-name text-label"
            >Dianne Russell</span
          >
        </div>
        <h5 class="medium-card__title subtitle">
          The things we need to check when we want to buy a house
        </h5>
        <div class="medium-card__time-data">
          <svg class="medium-card__time-data-icon">
            <use href="src/img/sprite.svg#clock" />
          </svg>
          <span class="medium-card__minutes-date text-label"
            >4 min read | 25 Apr 2021</span
          >
        </div>
      </div>
    </div>
  `,
  `
    <div class="medium-card">
      <div class="find-more__card-bg-img--3 medium-card__bg-img"></div>
      <div class="medium-card__content">
        <div class="medium-card__person">
          <div
            class="find-more__person-icon--3 medium-card__person-icon"
          ></div>
          <span class="medium-card__person-name text-label"
            >Courtney Henry</span
          >
        </div>
        <h5 class="medium-card__title subtitle">
          7 Ways to distinguish the quality of the house we want to buy
        </h5>
        <div class="medium-card__time-data">
          <svg class="medium-card__time-data-icon">
            <use href="src/img/sprite.svg#clock" />
          </svg>
          <span class="medium-card__minutes-date text-label"
            >6 min read | 24 Apr 2021</span
          >
        </div>
      </div>
    </div>
  `,
  `
    <div class="medium-card">
      <div class="find-more__card-bg-img--2 medium-card__bg-img"></div>
      <div class="medium-card__content">
        <div class="medium-card__person">
          <div
            class="find-more__person-icon--2 medium-card__person-icon"
          ></div>
          <span class="medium-card__person-name text-label"
            >Darlene Robertson</span
          >
        </div>
        <h5 class="medium-card__title subtitle">
          The best way to know the quality of the house we want to buy
        </h5>
        <div class="medium-card__time-data">
          <svg class="medium-card__time-data-icon">
            <use href="src/img/sprite.svg#clock" />
          </svg>
          <span class="medium-card__minutes-date text-label"
            >2 min read | 24 Apr 2021</span
          >
        </div>
      </div>
    </div>
  `,
];

toggleSelect(selectHero);
toggleSelect(selectJoinNow);
closeCookies(cookiesCloseBtn);
showMoreItems(findMoreBtn, lastFindMoreCard, findMoreElementsToInsert);
