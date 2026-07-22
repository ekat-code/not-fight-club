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

  parent.append(element);
  return element;
};