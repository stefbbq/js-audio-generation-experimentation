function getNoteFromNumber($key, $note){
	let note:string
  console.log('getKeyOffset value: ' + getKeyOffset($key) + ', note piped in: ' + $note)
  $note = ($note + getKeyOffset($key)) % 12

  console.log('final note number: ' + $note)
	
	switch($note){
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
  
  console.log('playing note: ' + note)
	
	return note
}