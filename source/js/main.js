//menu

const headMenuElement = document.querySelector('.page-header__nav-list');
const headMenuOpenButton = document.querySelector('.page-header__nav-open-button');
const headMenuCloseButton = document.querySelector('.page-header__nav-close-button');

const onOpenHeadMenu = () => {
  headMenuElement.classList.remove('page-header__nav-list--close');
  headMenuCloseButton.classList.remove('page-header__nav-close-button--close');
};

const onCloseHeadMenu = () => {
  headMenuElement.classList.add('page-header__nav-list--close');
  headMenuCloseButton.classList.add('page-header__nav-close-button--close');
};

if (headMenuOpenButton) {
  headMenuOpenButton.addEventListener('click', onOpenHeadMenu);
}

if (headMenuCloseButton) {
  headMenuCloseButton.addEventListener('click', onCloseHeadMenu);
}

window.onload = () => {
  onCloseHeadMenu();
};

// modal

const buyTourModalElement = document.querySelector('.buy-tour-modal');
const buyTourModalCLoseButton = document.querySelector('.buy-tour-modal__close-button');
const buyTourModalOverlayElement = document.querySelector('.buy-tour-modal__overlay');
const buyTourModalOpenButton = document.querySelector('.buy-tour-modal-open-button');

const onOpenBuyTourModal = () => {
  buyTourModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onKeyDown);
};

const onKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    onCloseBuyTourModal();
    document.removeEventListener('keydown', onKeyDown);
  }
};

const onCloseBuyTourModal = () => {
  buyTourModalElement.classList.add('hidden');
};

if (buyTourModalCLoseButton) {
  buyTourModalCLoseButton.addEventListener('click', onCloseBuyTourModal)
}

if (buyTourModalOpenButton) {
  buyTourModalOpenButton.addEventListener('click', onOpenBuyTourModal);
}

if (buyTourModalOverlayElement) {
  buyTourModalOverlayElement.addEventListener('click', onCloseBuyTourModal);
}

//tabs

const tabsElements = document.querySelectorAll('.tabs__button');

const tabsEnabled = () => {
  tabsElements.forEach((button) => {
    button.removeAttribute("disabled");
  });
}

const onTabClick = (evt) => {
  evt.preventDefault();
  tabsEnabled();
  evt.target.disabled = true;

  console.log(evt.target.id.toString().substr(12));
  showCountryCard(evt.target.id.toString().substr(12));
};

tabsElements.forEach((button) => {
  button.addEventListener('click', onTabClick);
});

//countries card

const countriesCardsElements = document.querySelectorAll('.countries__item');

const hideAllCountriesCard = () => {
  countriesCardsElements.forEach((card) => {
    card.classList.add('hidden');
  });
};

const showCountryCard = (id) => {
  hideAllCountriesCard();
  const card = document.getElementById('country' + id);
  card.classList.remove('hidden');
};


//places card

const placesCardsElements = document.querySelectorAll('.places__link');

const onClickPlacesCard = (evt) => {
  const tabElement = document.getElementById('countriesTab' + evt.target.id.toString().substr(9));
  if (tabElement) {
    tabElement.click();
  }
}

placesCardsElements.forEach((card) => {
  card.addEventListener('click', onClickPlacesCard);
});

// open modal buttons

