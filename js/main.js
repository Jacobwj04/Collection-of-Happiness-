class GetData{
    data = null;
    
    async getData(){
        await fetch("../data/data.json").then(responce => {
            return responce.json();
        }).then(newData => {
            this.data = newData.episodes;
        });
    }
}

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

class Main{
    renderMain;
    mainSection;
    leftPanel;
    rightPanel;

    constructor(renderMain){
        this.renderMain = document.getElementsByTagName(renderMain)[0];

        this.mainSection = document.createElement("main");
        this.mainSection.classList = "collection";

        this.leftPanel = new LeftPannel(this.mainSection, this);
        this.rightPanel = new RightPanel(this.mainSection);

        this.render();
    }

    render(){
        this.renderMain.appendChild(this.mainSection);
        this.leftPanel.render();
        this.rightPanel.render();
    }

    EpisodeSnipIt(data){
        this.leftPanel.createWidgets(data);
    }

    callFromLeftSection(episode){
        this.rightPanel.digitalPanel.makeDigitalPanel(episode);
    }
}

class LeftPannel{
    htmlElement;

    constructor(mainSection, mainClass){
        this.mainSection = mainSection;

        this.mainClass = mainClass;

        this.leftSection = document.createElement("section");
        this.leftSection.classList = "collection__section collection__section--left";

        this.leftSectionList = document.createElement("ul");
        this.leftSectionList.classList = "collection__list";

    }

    createWidgets(data){
        let filter = [];
        for(let i = 0; i < data.length; i++){
            filter.push(i);
        }

        for(let i = 0; i < 4; i++){
            let randomIndex = this.randomNumberGenarator(filter);
            let randomNumber = filter[randomIndex];
            filter.splice(randomIndex, 1);
            this.leftSectionListItem = document.createElement("li");
            this.leftSectionListItem.classList = "collection__listItem";
            this.leftSectionListItem.onclick = () =>{
                this.mainClass.callFromLeftSection(data[randomNumber]);
            }

            this.widgetDate = document.createElement("p");
            this.widgetDate.classList = "collection__date";
            this.widgetDate.innerText = data[randomNumber]["date (dd-mm-yyyy)"];

            this.widgetTitle = document.createElement("p");
            this.widgetTitle.classList = "collection__title";
            this.widgetTitle.innerText = data[randomNumber]["title"];

            this.widgetImg = document.createElement("img");
            this.widgetImg.classList = "collection__image";
            this.widgetImg.src = data[randomNumber]["image"]["src"];

            this.leftSectionList.appendChild(this.leftSectionListItem);
            this.leftSectionListItem.appendChild(this.widgetDate);
            this.leftSectionListItem.appendChild(this.widgetTitle);
            this.leftSectionListItem.appendChild(this.widgetImg);

            if(i === 0){
                this.mainClass.rightPanel.digitalPanel.makeDigitalPanel(data[randomNumber]);
            }
        }
    }

    render(){
        this.mainSection.appendChild(this.leftSection);
        this.leftSection.appendChild(this.leftSectionList);
    }

    randomNumberGenarator(data){
        let index = Math.floor(Math.random() * data.length)
        return index;
    }
}

class RightPanel{
    htmlElement;
    digitalPanel;

    constructor(mainSection){
        this.mainSection = mainSection;

        this.rightSection = document.createElement("section");
        this.rightSection.classList = "collection__section collection__section--right";

        this.digitalPanel = new DigitalPanel(this.rightSection);
    }

    render(){
        this.mainSection.appendChild(this.rightSection);
    }
}

class DigitalPanel{
    rightSection;

    constructor(rightSection){
        this.rightSection = rightSection;

        this.modal = document.createElement("article");
        this.modal.classList = "modal";

        this.modalFigure = document.createElement("figure");
        this.modalFigure.classList = "modal__figure";

        this.modalDate = document.createElement("p");
        this.modalDate.classList = "modal__date";
        

        this.modalTitle = document.createElement("p");
        this.modalTitle.classList = "modal__title";
        

        this.modalImg = document.createElement("img");
        this.modalImg.classList = "modal__img";

        this.modalLongDescription = document.createElement("p");
        this.modalLongDescription.classList = "modal__longDescription";

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

    makeDigitalPanel(episode){
        this.modalDate.innerText = episode["date (dd-mm-yyyy)"];
        this.modalTitle.innerText = episode["title"];
        this.modalImg.src = episode["image"]["src"];
        this.modalLongDescription.innerText = episode["summary"];
        this.modalSource.href = episode["url"];
        this.modalButtonAudio.onclick = () =>{
            window.location = episode["audio"];
        }
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
    main;
    getData;
    footer;

    constructor(){
        this.header = new Header();
        this.main = new Main("body");
        this.getData = new GetData();
        this.getData.getData();
        this.getData.getData().then(
            () => {
                this.main.EpisodeSnipIt(this.getData.data);
            }
        );
        this.footer = new Footer();
    }
}

const app = new App();
