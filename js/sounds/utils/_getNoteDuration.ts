function getNoteDuration($tempo, $noteLength){
  let length
  
  switch($noteLength){
    case 'whole':
      length = 60 / $tempo * 2000
      break;
    case 'half':
      length = 60 / $tempo * 1000
      break;
    case 'quarter':
      length = 60 / $tempo * 500      
      break;
    case 'eighth':
      length = 60 / $tempo * 250      
      break;
    case 'sixteenth':
      length = 60 / $tempo * 125
      break;
    case 'thirtysecond':
      length = 60 / $tempo * 67.5
      break;
  }
  
  return length
}