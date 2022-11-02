export class Accordeon extends HTMLElement {

    connectedCallback() {
        this.contents.forEach((d) => {
            d.addEventListener("toggle", () => {
                if (d.open) {
                    this.closeOthers(d);
                }
            });
        });
    }

    closeOthers(detail) {
        this.contents.forEach((d) => {
            if (d!==detail && d.open) {
                d.removeAttribute('open');
            }
        })
    }

    get contents() {
        return this.querySelectorAll('details');
    }

}

customElements.define('ac-cordeon', Accordeon);