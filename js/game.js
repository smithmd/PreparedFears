let State = {
    map: {},
    w: 80,
    h: 25
};

let Game = {
    display: null,

    _generateAgoraphobiaMap: () => {
        State.map = new ROT.Map.Cellular(State.w,State.h);
        State.map.randomize(0.6);
        for(let i = 0; i < 3; i++) {
            State.map.create(this.display.DEBUG);
        }
    },

    init: () => {
        this.display = new ROT.Display({width:State.w, height: State.h});
        document.body.appendChild(this.display.getContainer());
        Game._generateAgoraphobiaMap();
    },

    _drawWholeMap: () => {
        for (var key in this.map) {
            let parts = key.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            this.display.draw(x, y, this.map[key]);
        }
    }
};
