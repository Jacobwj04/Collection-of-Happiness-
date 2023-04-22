class Header{
    htmlElement;

    constructor(){
        this.htmlElement = document.getElementsByTagName("body")[0];

        this.header = document.createElement("header")
        this.header.classList = "header";

        this.headerLogoWrapper = document.createElement("section");
        this.headerLogoWrapper.classList = "header__logoWrapper";

        this.headerFigure = document.createElement("figure");
        this.headerFigure.classList = "header__logo";

        this.headerLogo = document.createElement("i");
        this.headerLogo.classList = "fa-regular fa-face-smile header__logoIcon";

        this.headerLogoText = document.createElement("h1");
        this.headerLogoText.classList = "header__logoText";
        this.headerLogoText.innerText = "Collection of happiness";

        this.render();
    }

    render(){
        this.htmlElement.appendChild(this.header);
        this.header.appendChild(this.headerLogoWrapper);
        this.headerLogoWrapper.appendChild(this.headerFigure);
        this.headerFigure.appendChild(this.headerLogo);
        this.headerLogoWrapper.appendChild(this.headerLogoText);
    }
}

const header = new Header();