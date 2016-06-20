function getKeyOffset($key){
  let offset:number
	
	switch($key){
		case 'A':
      offset = 0
			break
		case 'A#':
      offset = 1
			break;
		case 'B':
      offset = 2
			break;
		case 'C':
      offset = 3
			break;
		case 'C#':
      offset = 4
			break;
		case 'D':
      offset = 5
			break;
		case 'D#':
      offset = 6
			break;
		case 'E':
      offset = 7
			break;
		case 'F':
      offset = 8
			break;
		case 'F#':
      offset = 9
			break;
		case 'G':
      offset = 10
			break;
		case 'G#':
      offset = 11
			break;
		default:
			break;
	}
	
	return offset
}