import { clearContainer } from './clear-container.js';
import { 
  createBattlePage,
  createHomeScreen,
  createCharacterPage,
  createSettingsPage
} from './create-pages.js';

const mainContainer = document.querySelector('.main__container');

// функция нажатия кнопки сохранения имени
export const handleClickBtnSave = (btnSaveName) => {
  btnSaveName.addEventListener('click', () => {
    clearContainer(mainContainer);
    createHomeScreen();
  });
};

// функция нажатия кнопки старт
export const handleClickBtnStart = () => {
  const btnStart = document.querySelector('.btn__start');
  btnStart.addEventListener('click', () => {
    clearContainer(mainContainer);
    createBattlePage();
  });
};

// функция нажатия кнопки home
export const handleClickBtnHome = () => {
  const btnHome = document.querySelector('.nav__item-home');
  if (btnHome) {
    btnHome.addEventListener('click', () => {
      clearContainer(mainContainer);
      createHomeScreen();
    });
  }
};

// функция нажатия кнопки character
export const handleClickCharacter = () => {
  const btnCharacter = document.querySelector('.nav__item-character');
  if (btnCharacter) {
    btnCharacter.addEventListener('click', () => {
      clearContainer(mainContainer);
      createCharacterPage();
    });
  }
};

// функция нажатия кнопки settings
export const handleClickSettings = () => {
  const btnSettings = document.querySelector('.nav__item-settings');
  if (btnSettings) {
    btnSettings.addEventListener('click', () => {
      clearContainer(mainContainer);
      createSettingsPage();
    });
  }
};