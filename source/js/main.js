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

// feedback modal

const feedbackModalElement = document.querySelector('.feedback-modal');
const feedbackModalCloseButton = feedbackModalElement.querySelectorAll('.feedback-modal__close-button');
const feedbackModalOverlayElement = feedbackModalElement.querySelectorAll('.feedback-modal__overlay');

const showFeedbackModal = () => {
  feedbackModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onKeyDownFeedbackModal);
}

const hideFeedbackModal = () => {
  feedbackModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onKeyDownFeedbackModal);
}

const onKeyDownFeedbackModal = (evt) => {
  if (evt.key === 'Escape') {
    hideFeedbackModal();
  }
};

feedbackModalCloseButton.addEventListener('click', hideFeedbackModal);
feedbackModalOverlayElement.addEventListener('click', hideFeedbackModal);

// modal

const buyTourModalElement = document.querySelector('.buy-tour-modal');
const buyTourModalTelephoneInput = document.querySelector('#buyTourTelephone');
const buyTourModalCLoseButton = document.querySelector('.buy-tour-modal__close-button');
const buyTourModalOverlayElement = document.querySelector('.buy-tour-modal__overlay');
const buyTourModalOpenButtons = document.querySelectorAll('.buy-tour-modal-open-button');

const onOpenBuyTourModal = (evt) => {
  evt.preventDefault();
  buyTourModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onKeyDownBuyTourModal);
  buyTourModalTelephoneInput.focus();
};

const onKeyDownBuyTourModal = (evt) => {
  if (evt.key === 'Escape') {
    onCloseBuyTourModal();
};

const onCloseBuyTourModal = () => {
  buyTourModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onKeyDownBuyTourModal);
}
};

if (buyTourModalCLoseButton) {
  buyTourModalCLoseButton.addEventListener('click', onCloseBuyTourModal)
}

buyTourModalOpenButtons.forEach((button) => {
  button.addEventListener('click', onOpenBuyTourModal);
});

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

// call us form

const callUsFormElement = document.querySelector('.call-us__form');
const callUsFormFeedbackElement = callUsFormElement.querySelector('.call-us__feedback');
const callUsFormFeedbackCloseButton = callUsFormElement.querySelector('.call-us__close-button-icon');
const callUsFormSubmitButton = callUsFormElement.querySelector('.call-us__submit-button');

const validateSubmitCallUsForm = () => {
  return true;
};

const clearCallUsForm = () => {

};

const showSubmitCallUsFormFeedback = () => {
  callUsFormFeedbackElement.classList.remove('hidden');
};

const hideSubmitCallUsFormFeedback = () => {
  callUsFormFeedbackElement.classList.add('hidden');
};

const onSubmtiCallUsForm = (evt) => {
  evt.preventDefault();
  if (validateSubmitCallUsForm()) {
    showSubmitCallUsFormFeedback();
  }
};

callUsFormSubmitButton.addEventListener('click', onSubmtiCallUsForm);
callUsFormElement.addEventListener('submit', onSubmtiCallUsForm);
callUsFormFeedbackCloseButton.addEventListener('click', hideSubmitCallUsFormFeedback);

// buy tour form

const buyTourFormElement = document.querySelector('.buy-tour-modal__form');
const buyTourFormFeedbackElement = document.querySelector('.buy-tour-modal__feedback');
const buyTourFormFeedbackCloseButton = document.querySelector('.buy-tour-modal__feedback-close-button');
const buyTourFormSubmitButton = buyTourFormElement.querySelector('.buy-tour-modal__submit-button');

const validateBuyTourForm = () => {
  return true;
};

const clearBuyTourForm = () => {

};

const showBuyTourFormFeedback = () => {
  buyTourFormFeedbackElement.classList.remove('hidden');
};

const hideBuyTourFormFeedback = () => {
  buyTourFormFeedbackElement.classList.add('hidden');
};

const onSubmitBuyTourForm = (evt) => {
  evt.preventDefault();
  if(validateBuyTourForm()) {
    showBuyTourFormFeedback();
  }
}

buyTourFormSubmitButton.addEventListener('click', onSubmitBuyTourForm);
buyTourFormElement.addEventListener('click', onSubmitBuyTourForm);
buyTourFormFeedbackCloseButton.addEventListener('click', hideBuyTourFormFeedback);
