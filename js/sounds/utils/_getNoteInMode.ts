let modes = {
	"ionian": [2, 2, 1, 2, 2, 2, 1],
	"dorian": [2, 1, 2, 2, 2, 1, 2],
	"phrygian": [1, 2, 2, 2, 1, 2, 2],
	"lydian": [2, 2, 2, 1, 2, 2, 1],
	"mixolydian": [2, 2, 1, 2, 2, 1, 2],
	"aeolian": [2, 1, 2, 2, 1, 2, 2],
	"locrian": [1, 2, 2, 1, 2, 2, 2]
}

function getNoteInMode($mode, $note){
	var value = Math.floor($note * 7)
	
	for(var key in modes){
		if(key == $mode){
			let total = -1
			
			for(var i = 0; i <= value; i++){
				total += modes[key][i]
			}
			
			return total
		}
	}
}