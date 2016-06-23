function getRandomLength(){
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