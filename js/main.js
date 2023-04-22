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

class LeftPannel{
    htmlElement;

    constructor(){
        this.htmlElement = document.getElementsByTagName("body")[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "collection";

        this.leftSection = document.createElement("section");
        this.leftSection.classList = "collection__section collection__section--left";

        this.leftSectionList = document.createElement("ul");
        this.leftSectionList.classList = "collection__list";

        this.createWidgets();
        this.render();
    }

    createWidgets(){
        for(let i = 0; i < 4; i++){
            this.leftSectionListItem = document.createElement("li");
            this.leftSectionListItem.classList = "collection__listItem";

            this.widgetDate = document.createElement("p");
            this.widgetDate.classList = "collection__date";
            this.widgetDate.innerText = "28-06-2023";

            this.widgetTitle = document.createElement("p");
            this.widgetTitle.classList = "collection__title";
            this.widgetTitle.innerText = "hoi";

            this.widgetImg = document.createElement("img");
            this.widgetImg.classList = "collection__image";

            this.leftSectionList.appendChild(this.leftSectionListItem);
            this.leftSectionListItem.appendChild(this.widgetDate);
            this.leftSectionListItem.appendChild(this.widgetTitle);
            this.leftSectionListItem.appendChild(this.widgetImg);
        }
    }

    render(){
        this.htmlElement.appendChild(this.mainElement);
        this.mainElement.appendChild(this.leftSection);
        this.leftSection.appendChild(this.leftSectionList);
    }
}

const header = new Header();
const leftSection = new LeftPannel();