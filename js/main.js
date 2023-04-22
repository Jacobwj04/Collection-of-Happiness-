class Header{
    htmlElement;

    constructor(){
        this.htmlElement = document.getElementsByTagName("body")[0];

        this.headerLogoWrapper = document.createElement("section");
        this.headerLogoWrapper.classList = "header__logoWrapper";

        this.headerFigure = document.createElement("figure");
        this.headerFigure.classList = "header__logo";

        this.headerLogo = document.createElement("i");
        this.headerLogo.classList = "fa-regular fa-face-smile header__logoIcon";

        this.headerLogoText = document.createElement("h1");
        this.headerLogoText.classList = "header__logoText";
        this.headerLogoText.innerText = "Collection of happiness";
    }
}

<header class="header">
        <section class="header__logoWrapper">
            <figure class="header__logo">
                <i class="fa-regular fa-face-smile header__logoIcon"></i>
            </figure>
            <h1 class="header__logoText">Collection of happiness</h1>
        </section>
    </header>