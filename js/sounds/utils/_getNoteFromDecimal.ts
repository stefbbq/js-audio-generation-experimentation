function getNoteFromDecimal($note){
	let value = Math.floor($note * 12)
	let note:string
	
	switch(value){
		case 0:
			note = 'A'
			break
		case 1:
			note = 'A#'
			break;
		case 2:
			note = 'B'
			break;
		case 3:
			note = 'C'
			break;
		case 4:
			note = 'C#'
			break;
		case 5:
			note = 'D'
			break;
		case 6:
			note = 'D#'
			break;
		case 7:
			note = 'E'
			break;
		case 8:
			note = 'F'
			break;
		case 9:
			note = 'F#'
			break;
		case 10:
			note = 'G'
			break;
		case 11:
			note = 'G#'
			break;
		default:
			break;
	}
	
	return note
}