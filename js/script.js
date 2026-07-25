import {
  handleClickBtnSave,
  handleClickBtnStart,
  handleClickBtnHome,
  handleClickCharacter,
  handleClickSettings,
} from './handlers-click.js';

const btnSaveName = document.querySelector('.name-form__button');
const inputName = document.querySelector('.name-form__input');

export const player = {
  name: '',
  win: 0,
  loss: 0,
  img: './img/character/characte-1.jpg',
};

// функция проверки input пустой или нет
const checkInputName = () => {
  if (inputName.value.trim() !== '') {
    btnSaveName.disabled = false;
    player.name = inputName.value;
  } else {
    btnSaveName.disabled = true;
  }
};

inputName.addEventListener('input', checkInputName);
handleClickBtnSave(btnSaveName);
handleClickBtnHome();
handleClickCharacter();
handleClickSettings();