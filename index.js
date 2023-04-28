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
  
 //reset-color buttons 
function reset(id){
    document.getElementById(id).style.backgroundColor=`#504E63`
    document.getElementById(id).style.color="white"
}  

//color-changing button handler
function changeBtnColor(id){
    if(id=="start"){
        reset('stop')
        reset('reset')
        document.getElementById(id).style.backgroundColor=`#C0C0C0`
        document.getElementById(id).style.color=`#00142f`
        
    }
    if(id=="stop"){
        reset('start')
        reset('reset')
        document.getElementById(id).style.backgroundColor=`#C0C0C0`
        document.getElementById(id).style.color=`#00142f`
    }
    if(id=="reset"){
        reset('start')
        reset('stop')
        
    }     
}

//click handler
function clickHandler(e) {
    if(e.target.name=='start'){
        //start button handler
        intialiseStopWatchApp() 
        changeBtnColor(e.target.id)
    }
    //stop button handler
    if(e.target.name=='stop'){
      clearInterval(myInterval)
      changeBtnColor(e.target.id)
    }
    //reset button handler
    if(e.target.name=='reset'){
        clearInterval(myInterval)
        Timer.minute=0
        Timer.seconds=0
        timeElement.innerHTML="00 : 00"
        changeBtnColor(e.target.id)
    }
}

// 2-digit Time formatter
function formatTime(time) {
    return (time<10 ||time==0)?'0'+time:time
}

//callback function to update the timer
function updateCurrentTime() {
    Timer.seconds++
    if(Timer.seconds==Timer.maxSeconds){
        Timer.minute++
        Timer.seconds=0
    }
    timeElement.innerHTML=formatTime(Timer.minute)+' : '+formatTime(Timer.seconds)
}

//initialise the timer
function intialiseStopWatchApp() {
    myInterval=setInterval(updateCurrentTime,1000)
}

//tracking click actions
document.addEventListener("click",clickHandler)

