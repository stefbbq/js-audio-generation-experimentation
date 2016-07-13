namespace Modes {
	let modes = {}
	getData()
	
	export function getData(){
		$.get('js/sounds/data/data.json', success)
	}
	export function success($data){
		modes = $data
		dispatchEvent(new Event('modeDataLoaded'))
	}
	
	export function getNoteInterval($mode, $note){
		var value = $note % 7
	
		for(var key in modes){
			if(key == $mode){
				let total = 0
			
				for(var i = 0; i < value; i++){
					total += modes[key][i]
				}
				
				return total
			}
		}
	}
}