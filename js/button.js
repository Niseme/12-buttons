class Button {
    constructor(pavadinimas) {
        this.name = pavadinimas;
        this.DOM = NULL;
        this.init();   // kas cia?

    }
    init() {
        if (this.isValidSelector()) {
            this.render();
        }
    }

    isValidSelector() {
        const potencialiVieta = document.querySelector(this.selector);

        if (potencialiVieta) {
            this.DOM = potencialiVieta;
            return true;
        }

        return false;

        render() {
            this.DOM.innerHTML = ` <div id="btn1" class="yellowbutton">
        ${this.name}
    </div>
    <div id="btn2" class="greenbutton">
        ${this.name}
    </div>
    <div id="btn3" class="redbutton">
        ${this.name}
    </div>`;
        }
    }

}
speek() {
    return `${this.name}`
}
}

const selector = 'div';
const btnDOM = document.querySelectorAll(selector);

for (let btn of btnDOM) {
    btn.addEventListener('click', () => {
        const kas = btn.innerText;
        console.log(kas);
    });
}


export { Button }



