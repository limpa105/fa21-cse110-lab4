function getTime(){
    let d = new Date()
    let time  = d.toLocaleTimeString()
    console.log(time)
  }
  
  Interval= setInterval(getTime, 1000)