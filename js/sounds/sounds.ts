/// <reference path='utils/_getNoteFromDecimal.ts' />
/// <reference path='utils/_getKeyOffset.ts' />
/// <reference path='utils/_getNoteFromNumber.ts' />
/// <reference path='utils/_getNoteInterval.ts' />
/// <reference path='utils/_getNoteDuration.ts' />
/// <reference path='modules/_buffer.ts' />

declare var Synth:any

var piano = Synth.createInstrument('piano');

let notes = 12
let repeat = true
let buffer = new Buffer()
let note = 0
let tempo = 120
let currentNote = 0
let key = 'C'

startPlaying()

function startPlaying(){
  let note
  let duration

  if(currentNote < notes){
    let randomNote = Math.random() * 7
    
  	note = getNoteInterval('ionian', randomNote)
    duration = pickRandomLength()
    console.log('duration: ' + duration)
    
    buffer.appendNote(randomNote, duration)
  } else {
    note = getNoteInterval('ionian', buffer.getNoteAtIndex(currentNote % notes)[0])
    duration = buffer.getNoteAtIndex(currentNote % notes)[1]
    console.log('retrived note: ' + note + ', duration: ' + duration)
  }
  
  // if(!duration) let newDuration = Math.random()
  piano.play(getNoteFromNumber(key, note), 2, duration / 1000)
	
	setTimeout(function(){
		if(notes > currentNote || repeat) startPlaying()
	}, duration)

	currentNote++
}

function pickRandomLength(){
  let randomLength = Math.random()
  let duration

  if (randomLength < .25) { 
    duration = getNoteDuration(tempo, 'half')
  } else if (randomLength => .25 && randomLength < .5){
    duration = getNoteDuration(tempo, 'quarter')
  } else if (randomLength => .5 && randomLength <= 1){
    duration = getNoteDuration(tempo, 'eigth')
  }
  return duration
}