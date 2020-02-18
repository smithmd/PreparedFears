let State = {
    map: {},
    w: 80,
    h: 25
};

let Game = {
    display: null,

    _generateAgoraphobiaMap: () => {
        const cellular = new ROT.Map.Cellular(State.w,State.h);
        cellular.randomize(0.6);
        for(let i = 0; i < 3; i++) {
            cellular.create();
        }
        // fix walls
        for (let i = 0; i < State.w; i++) {
            for (let j = 0; j < State.h; j++) {
                if (i === 0 || i === (State.w-1)) {
                    cellular._map[i][j] = 0;
                }
                if (j === 0 || j === (State.h-1)) {
                    cellular._map[i][j] = 0;
                }
            }
        }

        const digCallback = function(x, y, value) {
            if (!value) { return; } /* do not store walls */

            const key = x+","+y;
            State.map[key] = ".";
        };
        cellular.create(digCallback.bind(this));
    },

    _drawWholeMap: () => {
        for (var key in State.map) {
            let parts = key.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            this.display.draw(x, y, State.map[key]);
        }
    },

    init: () => {
        this.display = new ROT.Display({width:State.w, height: State.h});
        document.body.appendChild(this.display.getContainer());
        Game._generateAgoraphobiaMap();
        Game._drawWholeMap();
        console.dir(State.map);
    }
};
