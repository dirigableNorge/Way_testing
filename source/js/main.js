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
const buyTourModalOpenButton = document.querySelector('.buy-tour-modal-open-button');

const onOpenBuyTourModal = () => {
  buyTourModalElement.classList.remove('hidden');
}

const onCloseBuyTourModal = () => {
  buyTourModalElement.classList.add('hidden');
}

if (buyTourModalCLoseButton) {
  buyTourModalCLoseButton.addEventListener('click', onCloseBuyTourModal)
}

if (buyTourModalOpenButton) {
  buyTourModalOpenButton.addEventListener('click', onOpenBuyTourModal);
}
