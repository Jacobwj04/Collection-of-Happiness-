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
            this.widgetTitle.innerText = "Title";

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

class RightPanel{
    htmlElement;
    digitalPanel

    constructor(){
        this.htmlElement = document.getElementsByTagName("body")[0];

        this.mainElement = document.getElementsByTagName("main")[0];
        this.mainElement.classList = "collection";

        this.rightSection = document.createElement("section");
        this.rightSection.classList = "collection__section collection__section--right";

        this.render();

        this.digitalPanel = new DigitalPanel();
    }

    render(){
        this.htmlElement.appendChild(this.mainElement);
        this.mainElement.appendChild(this.rightSection);
    }
}

class DigitalPanel{
    rightSection;

    constructor(){
        this.rightSection = document.getElementsByTagName("section")[2];

        this.modal = document.createElement("article");
        this.modal.classList = "modal";

        this.modalFigure = document.createElement("figure");
        this.modalFigure.classList = "modal__figure";

        this.modalDate = document.createElement("p");
        this.modalDate.classList = "modal__date";
        this.modalDate.innerText = "28-06-2023";

        this.modalTitle = document.createElement("p");
        this.modalTitle.classList = "modal__title";
        this.modalTitle.innerText = "Title";

        this.modalImg = document.createElement("img");
        this.modalImg.classList = "modal__img";

        this.modalLongDescription = document.createElement("p");
        this.modalLongDescription.classList = "modal__longDescription";
        this.modalLongDescription.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptas error nihil fugit ad, nulla adipisci assumenda totam maiores placeat non perferendis magnam quasi laboriosam? Ipsa quidem perspiciatis voluptatem voluptate"

        this.modalButtonWrapper = document.createElement("div");
        this.modalButtonWrapper.classList = "modal__buttonWrapper";

        this.modalButtonAudio = document.createElement("button");
        this.modalButtonAudio.classList = "modal__audioObject";
        this.modalButtonAudio.innerText = "Audio Object";

        this.modalSource = document.createElement("a");
        this.modalSource.classList = "modal__sourceLink";
        this.modalSource.innerText = "Source >";

        this.render();
    }

    render(){
        this.rightSection.appendChild(this.modal);
        this.modal.appendChild(this.modalFigure);
        this.modalFigure.appendChild(this.modalDate);
        this.modalFigure.appendChild(this.modalTitle);
        this.modalFigure.appendChild(this.modalImg);

        this.modal.appendChild(this.modalLongDescription);

        this.modal.appendChild(this.modalButtonWrapper);
        this.modalButtonWrapper.appendChild(this.modalButtonAudio);
        this.modalButtonWrapper.appendChild(this.modalSource);
    }
}

class Footer{
    htmlElement;

    constructor(){
        this.htmlElement = document.getElementsByTagName("body")[0];

        this.footer = document.createElement("footer");
        this.footer.classList = "footer";

        this.footerMadeBy = document.createElement("h2");
        this.footerMadeBy.classList = "footer__gemaakt";
        this.footerMadeBy.innerText = "Gemaakt door: Jacob Wassall-Jamieson SD2D";

        this.render();
    }

    render(){
        this.htmlElement.appendChild(this.footer)
        this.footer.appendChild(this.footerMadeBy);
    }
}

class App{
    header;
    leftPanel;
    rightPanel;
    footer;

    constructor(){
        this.header = new Header();
        this.leftPanel = new LeftPannel();
        this.rightPanel = new RightPanel();
        this.footer = new Footer();
    }
}

const app = new App();
