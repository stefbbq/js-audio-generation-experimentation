function getNoteFromDecimal($note) {
    var value = Math.floor($note * 12);
    var note;
    switch (value) {
        case 0:
            note = 'A';
            break;
        case 1:
            note = 'A#';
            break;
        case 2:
            note = 'B';
            break;
        case 3:
            note = 'C';
            break;
        case 4:
            note = 'C#';
            break;
        case 5:
            note = 'D';
            break;
        case 6:
            note = 'D#';
            break;
        case 7:
            note = 'E';
            break;
        case 8:
            note = 'F';
            break;
        case 9:
            note = 'F#';
            break;
        case 10:
            note = 'G';
            break;
        case 11:
            note = 'G#';
            break;
        default:
            break;
    }
    return note;
}
function getKeyOffset($key) {
    var offset;
    switch ($key) {
        case 'A':
            offset = 0;
            break;
        case 'A#':
            offset = 1;
            break;
        case 'B':
            offset = 2;
            break;
        case 'C':
            offset = 3;
            break;
        case 'C#':
            offset = 4;
            break;
        case 'D':
            offset = 5;
            break;
        case 'D#':
            offset = 6;
            break;
        case 'E':
            offset = 7;
            break;
        case 'F':
            offset = 8;
            break;
        case 'F#':
            offset = 9;
            break;
        case 'G':
            offset = 10;
            break;
        case 'G#':
            offset = 11;
            break;
        default:
            break;
    }
    return offset;
}
function getNoteFromNumber($key, $note) {
    var note;
    console.log('getKeyOffset value: ' + getKeyOffset($key) + ', note piped in: ' + $note);
    $note = ($note + getKeyOffset($key)) % 12;
    console.log('final note number: ' + $note);
    switch ($note) {
        case 0:
            note = 'A';
            break;
        case 1:
            note = 'A#';
            break;
        case 2:
            note = 'B';
            break;
        case 3:
            note = 'C';
            break;
        case 4:
            note = 'C#';
            break;
        case 5:
            note = 'D';
            break;
        case 6:
            note = 'D#';
            break;
        case 7:
            note = 'E';
            break;
        case 8:
            note = 'F';
            break;
        case 9:
            note = 'F#';
            break;
        case 10:
            note = 'G';
            break;
        case 11:
            note = 'G#';
            break;
        default:
            break;
    }
    console.log('playing note: ' + note);
    return note;
}
// declare modes
var modes = {
    "ionian": [2, 2, 1, 2, 2, 2, 1],
    "dorian": [2, 1, 2, 2, 2, 1, 2],
    "phrygian": [1, 2, 2, 2, 1, 2, 2],
    "lydian": [2, 2, 2, 1, 2, 2, 1],
    "mixolydian": [2, 2, 1, 2, 2, 1, 2],
    "aeolian": [2, 1, 2, 2, 1, 2, 2],
    "locrian": [1, 2, 2, 1, 2, 2, 2]
};
// utility
function getNoteInterval($mode, $note) {
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
}
function getNoteDuration($tempo, $noteLength) {
    var length;
    switch ($noteLength) {
        case 'whole':
            length = 60 / $tempo * 2000;
            break;
        case 'half':
            length = 60 / $tempo * 1000;
            break;
        case 'quarter':
            length = 60 / $tempo * 500;
            break;
        case 'eighth':
            length = 60 / $tempo * 250;
            break;
        case 'sixteenth':
            length = 60 / $tempo * 125;
            break;
        case 'thirtysecond':
            length = 60 / $tempo * 67.5;
            break;
    }
    return length;
}
//
// GenerateDuration class
// returns a random note duration
var GenerateDuration = (function () {
    function GenerateDuration() {
    }
    GenerateDuration.prototype.convertDurationToNumber = function ($duration, $isTriplet) {
        if ($isTriplet === void 0) { $isTriplet = false; }
        var durationNumber;
        switch ($duration) {
            case 'whole':
                durationNumber = .25;
                break;
            case 'half':
                durationNumber = .5;
                break;
            case 'quarter':
                durationNumber = 1;
                break;
            case 'eighth':
                durationNumber = 2;
                break;
            case 'sixteenth':
                durationNumber = 4;
                break;
            case 'thritysecond':
                durationNumber = 8;
                break;
        }
        if ($isTriplet)
            durationNumber = durationNumber * 1.5;
        return durationNumber;
    };
    // getter
    GenerateDuration.prototype.getRandomDuration = function ($options) {
        return this.convertDurationToNumber($options[Math.floor(Math.random() * $options.length)]);
    };
    return GenerateDuration;
}());
//
// buffer class
// stores note information; pitch and duration
var Buffer = (function () {
    function Buffer() {
        this.pitch = [];
        this.duration = [];
    }
    Buffer.prototype.appendNote = function ($pitch, $duration) {
        this.pitch.push($pitch);
        this.duration.push($duration);
    };
    Buffer.prototype.getNoteAtIndex = function ($index) {
        return [this.pitch[$index], this.duration[$index]];
    };
    return Buffer;
}());
/// <reference path='utils/_getNoteFromDecimal.ts' />
/// <reference path='utils/_getKeyOffset.ts' />
/// <reference path='utils/_getNoteFromNumber.ts' />
/// <reference path='utils/_getNoteInterval.ts' />
/// <reference path='utils/_getNoteDuration.ts' />
/// <reference path='utils/generateDuration.ts' />
/// <reference path='modules/_buffer.ts' />
var piano = Synth.createInstrument('piano');
// properties
var notes = 8;
var tempo = 120;
var key = 'C';
var verses = 3;
var repeats = 4;
var turnaround = 0;
var durations = ['quarter'];
// utils
var buffer, currentNote;
var generateDuration = new GenerateDuration();
playSong();
function playSong() {
    currentNote = 0;
    if (turnaround < (verses * repeats)) {
        if (turnaround % repeats == 0) {
            buffer = new Buffer();
            playTurnaround(false);
        }
        else {
            playTurnaround(true);
        }
    }
    turnaround++;
}
function playTurnaround($isRepeat) {
    var note;
    var duration;
    if (!$isRepeat) {
        var randomNote = Math.random() * 7;
        note = getNoteInterval('ionian', randomNote);
        duration = (60 / tempo) * (1 / generateDuration.getRandomDuration(durations)) * 1000;
        console.log('duration: ' + duration);
        buffer.appendNote(randomNote, duration);
    }
    else {
        note = getNoteInterval('ionian', buffer.getNoteAtIndex(currentNote % notes)[0]);
        duration = buffer.getNoteAtIndex(currentNote % notes)[1];
        console.log('retrived note: ' + note + ', duration: ' + duration);
    }
    // if(!duration) let newDuration = Math.random()
    piano.play(getNoteFromNumber(key, note), 2, duration / 1000);
    setTimeout(function () {
        if (notes > currentNote) {
            playTurnaround($isRepeat);
        }
        else {
            playSong();
        }
    }, duration);
    currentNote++;
}
