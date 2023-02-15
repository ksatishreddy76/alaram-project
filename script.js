setInterval( () => {
    let date = new Date()
    var time = document.getElementById('time')
    var hours = (date.getHours())
    var ampm = hours < 12?'AM' : 'PM'
    hours = hours > 12 ? hours % 12 : hours

    var minutes = date.getMinutes()

    var seconds = date.getSeconds()
    if(hours < 0){
        hours = hours * -1
    }else if(hours == 00){
        hours = 12
    }
    else{
        hours = hours
    }

    time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + ampm
    console.log(ampm)
}, 1000)

var sound = new Audio("alaram.mpeg")
sound.loop = true

function addZero(time){
    return time<10? '0' + time : time
}

function hours(){
    var hours = document.getElementById('hours')
    var hrs = 12

    for(i=0; i <= hrs; i++){
        hours.options[hours.options.length] = new Option(i<10?'0'+i: i, i)
    }
}

hours()

function minutes(){
    var minut = document.getElementById('minutes')
    var min = 60
    for(i=0; i<min; i++){
        minut.options[minut.options.length] = new Option(i<10? '0'+i : i, i)
    }
}
minutes()

function seconds(){
    var secn = document.getElementById('seconds')
    var sec = 60
    for(i=0; i<sec; i++){
        secn.options[secn.options.length] = new Option(i<10?'0'+i:i, i)
    }
}
seconds()

function setAlaram(){
    var hr = document.getElementById('hours')
    var min = document.getElementById('minutes')
    var sec = document.getElementById('seconds')
    var ap = document.getElementById('ampm')
    var err_msg = document.getElementById('err_msg')

    var selectHours = hr.options[hr.selectedIndex].value
    var selectMinutes = min.options[min.selectedIndex].value
    var selectSeconds = sec.options[sec.selectedIndex].value
    var selectAmpm = ap.options[ap.selectedIndex].value
    console.log(selectHours)
    console.log(selectMinutes)
    console.log(selectAmpm)

    if(selectHours == 0 && selectMinutes == 0 && selectSeconds == 0){
        err_msg.innerHTML = 'Please Select a Valid Time for Alaram'
        setTimeout(()=>{
            err_msg.innerHTML = ''
        }, 3000)
    }else if(selectHours == 0 ){
        err_msg.innerHTML = 'Please Select a Valid Time for Alaram'
        setTimeout(()=>{
            err_msg.innerHTML = ''
        }, 3000)
    }
    else{


    let date = new Date()
    var alaramTime = addZero(selectHours) + ':' + addZero(selectMinutes) + ':' + addZero(selectSeconds) + ' ' + selectAmpm 


    var hours = (date.getHours())
    var ampm = hours < 12?'AM' : 'PM'
    hours = hours > 12 ? hours % 12 : hours

    var minutes = date.getMinutes()

    var seconds = date.getSeconds()

   
    let dated = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()


    if(selectAmpm === 'AM'){
        var selHours = parseInt(selectHours)
        
    }
    else if(selectAmpm === 'PM'){
        selHours = parseInt(selectHours) + 12
    }

    if(ampm === 'AM'){
        var newHours = hours
    }else if(ampm === 'PM'){
        newHours = parseInt(hours) + 12
    }

    console.log(selHours, newHours)



    let DateTime = `${month+1}/${dated}/${year} ${addZero(newHours)}:${addZero(minutes)}:${addZero(seconds)}`
    let presentDateTime = new Date(DateTime).getTime()

    let myNDate = `${month+1}/${dated}/${year} ${addZero(selHours)}:${addZero(selectMinutes)}:${addZero(selectSeconds)}`


    let myNewDate = new Date(myNDate).getTime()
    let distance = myNewDate - presentDateTime
    let show_msg = document.getElementById('show_msg')

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));
    
    show_msg.style.display = 'block'
    show_msg.innerHTML = `${d} D - ${h} H : ${m} M : ${s} S Remaining`
    

   setTimeout(()=>{
    show_msg.innerHTML = ''
    show_msg.style.display = 'none'
   }, 10000)

    console.log(presentDateTime)
    console.log(myNewDate)

    console.log(presentDateTime - myNewDate)

    var alram_st_time = document.getElementById('alram_st_time')
    alram_st_time.innerHTML = `Your Alaram Time is  : ${alaramTime}`

    console.log('Alaram Time : ' + alaramTime)
    document.getElementById('hours').disabled = true
    document.getElementById('minutes').disabled = true
    document.getElementById('seconds').disabled = true
    document.getElementById('ampm').disabled = true

setInterval(()=>{
    let date = new Date()
    var hours = (date.getHours())
    var ampm = hours < 12?'AM' : 'PM'
    hours = hours > 12 ? hours % 12 : hours

    var minutes = date.getMinutes()

    var seconds = date.getSeconds()

    if(hours < 0){
        hours = hours * -1
    }else if(hours == 00){
        hours = 12
    }
    else{
        hours = hours
    }

    var currentTime = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + ampm

    if(currentTime == alaramTime){
        document.getElementById('alaram_ring').style.display = "flex"
        console.log('alaram Ringing')
        sound.play()
    }
},1000)
}
}

function clearAlaram(){
    console.log('clear alaram')
    document.getElementById('alaram_ring').style.display = "none"
    document.getElementById('hours').disabled = false
    document.getElementById('minutes').disabled = false
    document.getElementById('seconds').disabled = false
    document.getElementById('ampm').disabled = false
    var alram_st_time = document.getElementById('alram_st_time')
    alram_st_time.innerHTML = ` No Alaram`
    sound.pause();
    show_msg.style.display = 'none'
    show_msg.innerHTML = ''
}

function stopAlaram(){
    clearAlaram()
}
