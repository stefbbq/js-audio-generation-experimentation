var Modes = (function () {
    function Modes() {
        this.modes = {};
        $.get('../data.json', success);
        // let modes = {
        // 	"ionian": [2, 2, 1, 2, 2, 2, 1],
        // 	"dorian": [2, 1, 2, 2, 2, 1, 2],
        // 	"phrygian": [1, 2, 2, 2, 1, 2, 2],
        // 	"lydian": [2, 2, 2, 1, 2, 2, 1],
        // 	"mixolydian": [2, 2, 1, 2, 2, 1, 2],
        // 	"aeolian": [2, 1, 2, 2, 1, 2, 2],
        // 	"locrian": [1, 2, 2, 1, 2, 2, 2]
        // }		
    }
    Modes.prototype.success = function ($data) {
        modes = $data;
    };
    Modes.prototype.getNoteInterval = function ($mode, $note) {
        var value = $note % 7;
        for (var key in modes) {
            if (key == $mode) {
                var total = 0;
                for (var i = 0; i < value; i++) {
                    total += modes[key][i];
                }
                console.log('total: ' + total);
                return total;
            }
        }
    };
    return Modes;
}());
