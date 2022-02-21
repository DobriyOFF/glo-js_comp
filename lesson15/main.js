const DomElement = function (selector) {
    if (selector !== undefined) {
        this.selector.trim();
        this.createElement();
    }
    this.height,
    this.width,
    this.bg,
    this.fontSize
}

DomElement.prototype.createElement = function () {
    const attrValue = this.selector.substring(1);
    if (this.selector.startsWith('.')) {
        this.element = document.createElement('div');
        attrValue != "" && (this.element.classList.add(attrValue));
    }
    if (this.selector.startsWith('#')) {
        this.element = document.createElement('p');
        attrValue != "" && (this.element.id = attrValue);
    }
    document.querySelector("body").appendChild(this.element);
}

DomElement.prototype.cssText = function (height, width, bg, fontSize) {
    this.element != undefined && (this.width += width);
    this.element != undefined && (this.height = +height);
    this.element != undefined && (this.bg = bg);
    this.element != undefined && (this.fontSize = +fontSize);

    this.element.style.height = this.height + 'px';
    this.element.style.width = this.width + 'px';
    this.element.style.backgroundColor = this.bg;
    this.element.style.fontSize = this.fontSize + 'px';
}

DomElement.prototype.setText = function (content) {
    this.content = '' + content;
    this.element.textContent = this.content;
}

const a = new DomElement();
a.selector = ".text";

a.createElement();
a.cssText(100, 100, 'red', 30);
a.setText('Я текст')