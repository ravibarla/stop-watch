const t=document.getElementById('time')

const currentTime={
    minute:0,
    seconds:0,
    maxMinute:02,
    maxSeconds:20
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
        document.getElementById('time').innerHTML=" 0 0 : 0 0"
    }
}

function formatTime(time) {
    return time<10?'0'+time:time
}


function updateCurrentTime() {
    currentTime.seconds++
    if(currentTime.seconds==currentTime.maxSeconds){
        currentTime.minute++
        currentTime.seconds=0
    }
    if(currentTime.minute==currentTime.maxMinute){
        currentTime.seconds++
        currentTime.minute++
        showNotification("limit is reached minute cannot be more than 60")
    }
    t.innerHTML=formatTime(currentTime.minute)+' : '+formatTime(currentTime.seconds)
}

function intialiseStopWatchApp() {
    myInterval=setInterval(updateCurrentTime,1000)
}


document.addEventListener("click",clickHandler)