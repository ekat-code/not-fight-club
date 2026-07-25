export const createElement = (tag, className, parent, options = {}) => {
  const element = document.createElement(tag);
  element.className = className;

  // текст
  if (options.text) {
    element.textContent = options.text;
  }

  // изображение
  if (options.image) {
    element.src = options.image[0];
    element.alt = options.image[1];
  }

  // input
  if (options.type) {
    element.type = options.type;
  }

  if (options.name) {
    element.name = options.name;
  }

  // progress
  if (options.id) {
    element.id = options.id;
  }

  if (options.value) {
    element.value = options.value;
  }

  if (options.max) {
    element.max = options.max;
  }

  parent.append(element);
  return element;
};