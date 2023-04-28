const t=document.getElementById('time')
const currentTime={
    minute:0,
    seconds:0,
    maxSeconds:60
}

function showNotification(txt) {
    alert(txt)
    clearInterval(myInterval)
  }
  

function clickHandler(e) {
    if(e.target.name=='start'){
        intialiseStopWatchApp() 
    }
    if(e.target.name=='stop'){
      clearInterval(myInterval)
      
    }
    if(e.target.name=='reset'){
      
        clearInterval(myInterval)
        currentTime.minute=0
        currentTime.seconds=0
        document.getElementById('time').innerHTML="00:00"
    }
}

function formatTime(time) {
    return (time<10 ||time==0)?'0'+time:time
}


function updateCurrentTime() {
    currentTime.seconds++
    if(currentTime.seconds==currentTime.maxSeconds){
        currentTime.minute++
        currentTime.seconds=0
    }
    t.innerHTML=formatTime(currentTime.minute)+' : '+formatTime(currentTime.seconds)
}

function intialiseStopWatchApp() {
    myInterval=setInterval(updateCurrentTime,1000)
}


document.addEventListener("click",clickHandler)