export class DOMHelper {
  static moveElement(elementId, newDestinationId) {
    const element = document.getElementById(elementId);
    const destination = document.querySelector(newDestinationId);
    destination.append(element);
  }

  static clearEventListeners(element) {
    const newElement = element.cloneNode(true);
    element.replaceWith(newElement);
    return newElement;
  }
}

export function moveElement(elementId, newDestinationId) {
  const element = document.getElementById(elementId);
  const destination = document.querySelector(newDestinationId);
  destination.append(element);
}

export function clearEventListeners(element) {
  const newElement = element.cloneNode(true);
  element.replaceWith(newElement);
  return newElement;
}
