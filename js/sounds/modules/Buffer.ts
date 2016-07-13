//
// buffer class
// stores note information; pitch and duration

class Buffer {
  pitch:number[] = []
  duration:number[] = []
  
  constructor(){ }
  
  appendNote($pitch:number, $duration:number){
    this.pitch.push($pitch)
    this.duration.push($duration)
  }
  getNoteAtIndex($index:number){
    return [this.pitch[$index], this.duration[$index]]
  }
}