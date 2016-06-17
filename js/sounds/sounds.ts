/// <reference path='../audiosynth.js' />
/// <reference path='utils/_getNoteFromDecimal.ts' />
/// <reference path='utils/_getNoteFromNumber.ts' />
/// <reference path='utils/_getNoteInMode.ts' />

var piano = Synth.createInstrument('piano');

let notes = 24
let duration = .2
let currentNote = 0
startPlaying()


function startPlaying(){
	var randomNote = Math.random()
	let note = getNoteInMode('phrygian', Math.random())
	piano.play(getNoteFromNumber(note), 4, duration)
	
	setTimeout(function(){
		if(notes > currentNote) startPlaying()
	}, duration * 1000)
	
	currentNote++
}