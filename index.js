//storing the time element 
const timeElement=document.getElementById('time')

//object to set the minutes and seconds
const Timer={
    minute:0,
    seconds:0,
    maxSeconds:60
}

//function to show notifications when needed 
function showNotification(txt) {
    alert(txt)
    clearInterval(myInterval)
  }
  

function clickHandler(e) {
    //function when start is clicked
    if(e.target.name=='start'){
        intialiseStopWatchApp() 
    }
    //function when stop is clicked
    if(e.target.name=='stop'){
      clearInterval(myInterval)
      
    }
    //function when reset is clicked
    if(e.target.name=='reset'){
        clearInterval(myInterval)
        Timer.minute=0
        Timer.seconds=0
        timeElement.innerHTML="00:00"
    }
}

//format the time into 2-Digits
function formatTime(time) {
    return (time<10 ||time==0)?'0'+time:time
}

//callback function to update the timer when timer is started
function updateCurrentTime() {
    Timer.seconds++
    if(Timer.seconds==Timer.maxSeconds){
        Timer.minute++
        Timer.seconds=0
    }
    timeElement.innerHTML=formatTime(Timer.minute)+' : '+formatTime(Timer.seconds)
}

//function to initialise the timer
function intialiseStopWatchApp() {
    myInterval=setInterval(updateCurrentTime,1000)
}

//tracking the click actions
document.addEventListener("click",clickHandler)