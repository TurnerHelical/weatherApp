class Dom {
  findElement = (selector) => document.querySelector(selector);
  findAllElements = (selector) => document.querySelectorAll(selector);
  findElementByAttr = (searchFor) => {
    let el = document.querySelector(searchFor);
    return el;
  };
  createAndAppend = (parent, child, attr, attrVal) => {
    let parentEl = this.findElement(parent);
    let childEl = document.createElement(child);
    if (attr && attrVal) {
      childEl.setAttribute(attr, attrVal);
    }
    parentEl.appendChild(childEl);
    return childEl;
  };
  clearContent = (selector) => {
    let el = this.findElement(selector);
    el.innerHTML = "";
  };

  removeElement = (selector) => {
    let el = this.findElement(selector);
    el.remove();
  }
  editAttr = (selector, attr, attrVal) => {
    let el = this.findElement(selector);
    el.setAttribute(attr, attrVal);
  };
  toggleClass = function (selector, className) {
    const element = this.findElement(selector);
    element.classList.toggle(className);
  };
  toggleClassForAll = (selector, className) => {
    const elements = this.findAllElements(selector);
    elements.forEach((element) => {
      element.classList.toggle(className);
    });
  };
  convertTime = (time) => {
    if (time === 0)
  }

}
export { Dom };
