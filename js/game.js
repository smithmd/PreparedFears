let Game = {
    display: null,

    init: () => {
        this.display = new ROT.Display();
        document.body.appendChild(this.display.getContainer());
    }
};
