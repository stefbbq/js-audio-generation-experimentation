//
// GenerateDuration class
// returns a random note duration

class GenerateDuration {
	
	constructor(){ }
	
	convertDurationToNumber($duration:String, $isTriplet:Boolean = false){
		let durationNumber:number
		
		switch($duration) {
			case 'whole':
				durationNumber = .25
				break
			case 'half':
				durationNumber = .5
				break
			case 'quarter':
				durationNumber = 1
				break
			case 'eighth':
				durationNumber = 2
				break
			case 'sixteenth':
				durationNumber = 4
				break
			case 'thritysecond':
				durationNumber = 8
				break
		}
		
		if($isTriplet) durationNumber = durationNumber * 1.5
		return durationNumber
	}
	
	// getter
	getRandomDuration($options:String[]){
		return this.convertDurationToNumber($options[Math.floor(Math.random() * $options.length)])
	}
}