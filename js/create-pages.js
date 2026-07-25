import { createElement } from './create-element.js';
import { player } from './script.js';
import { handleClickBtnStart } from './handlers-click.js';
import { listAttack, listDefense } from './list-attack-defense.js';
import { removeClassList } from './remove-class-list.js';

const headerText = document.querySelector('.header__text');
const mainContainer = document.querySelector('.main__container');

// функция создания основной страницы
export const createHomeScreen = () => {
  headerText.textContent = 'Main';
  createElement('button', 'btn__start', mainContainer, { text: 'Start a fight' });
  handleClickBtnStart();
  removeClassList();
};

// функция создания страницы персонажа
export const createCharacterPage = () => {
  const wrapperCharacterAvatar = createElement('div', 'character-avatar', mainContainer);
  const characterContent = createElement('div', 'character__content', mainContainer);

  headerText.textContent = 'Character';

  createElement('img', 'character-avatar', wrapperCharacterAvatar, {
    image: ['./img/character/characte-1.jpg', 'character'],
  });
  createElement('h3', 'character__name', characterContent, { text: player.name });
  createElement('span', 'win', characterContent, { text: `win: ${player.win}` });
  createElement('span', 'loss', characterContent, { text: `loss: ${player.loss}` });
};

// функция создания страницы настроек
export const createSettingsPage = () => {
  const wrapperSettings = createElement('div', 'settings', mainContainer);

  headerText.textContent = 'Settings';

  createElement('h3', 'player__name', wrapperSettings, { text: 'Player Name: ' });
  createElement('span', 'character__name', wrapperSettings, { text: player.name });
  createElement('button', 'btn__edit', wrapperSettings, { text: 'edit' });
};

// функция создания страницы битвы
export const createBattlePage = () => {
  const containerBattle = createElement('div', 'wrapper__battle', mainContainer);
  const containerBattleLog = createElement('div', 'wrapper__battle-log', mainContainer);
  const wrapperBattleCharacter = createElement('div', 'wrapper__battle__character', containerBattle);
  const wrapperBattleZone = createElement('div', 'wrapper__battle__zone', containerBattle);
  const wrapperBattleEnemy = createElement('div', 'wrapper__battle__enemy', containerBattle);

  createElement('img', 'character-avatar', wrapperBattleCharacter, { image: [player.img, 'character'] });
  createElement('img', 'enemy', wrapperBattleEnemy, { image: ['./img/enemy/enemy-1.jpg', 'enemy'] });

  createZoneLists(wrapperBattleZone);
  createHealthScale(wrapperBattleCharacter, wrapperBattleEnemy);
};

// функция создания списка зон
const createZoneLists = (wrapperBattleZone) => {
  createElement('h4', 'zone__lists__title', wrapperBattleZone, {
    text: 'Select 1 zone for the attack and 2 zones for defense',
  });

  const zoneLists = createElement('div', 'zone__lists', wrapperBattleZone);
  const zoneAttack = createElement('div', 'zone__list__attack', zoneLists);
  const zoneDefense = createElement('div', 'zone__list__defense', zoneLists);

  createElement('h5', 'zone__list__subtitle', zoneAttack, { text: 'Attack' });
  createElement('h5', 'zone__list__subtitle', zoneDefense, { text: 'Defense' });
  createElement('button', 'btn__fight', wrapperBattleZone, { text: 'fight!' });

  createZoneList(listAttack, zoneAttack);
  createZoneList(listDefense, zoneDefense);
};

// функция для создания checkbox
const createZoneList = (arr, zone) => {
  arr.forEach((item) => {
    const label = createElement('label', 'label', zone);
    createElement('input', 'input', label, {
      type: 'checkbox',
      name: 'zone-attack',
      value: item,
    });

    createElement('span', '', label, { text: item });
  });
};

// функция для создания шкалы здоровья
const createHealthScale = (wrapperBattleCharacter, wrapperBattleEnemy) => {
  createElement('progress', 'health-scale__character', wrapperBattleCharacter, {
    value: 100,
    id: 'health-scale__character',
    max: 100,
  });
  createElement('progress', 'health-scale__enemy', wrapperBattleEnemy, {
    value: 100,
    id: 'health-scale__enemy',
    max: 100,
  });
};