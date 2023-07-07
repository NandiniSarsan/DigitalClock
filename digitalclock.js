function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
    }
            if(hh>12)
            {
            hh=hh-12
        }
    
    if(hh==0)
    {
        hh=12
    }
    if(mo==0){
        mo="Jan"
    }
    else if(mo==1){
        mo="Feb"
    }
    else if(mo==2){
        mo="March"
    }
    else if(mo==3){
        mo="April"
    }
    else if(mo==4){
        mo="May"
    }
    else if(mo==5){
        mo="June"
    }
    else if(mo==6){
        mo="July"
    }
    else if(mo==7){
        mo="Aug"
    }
    else if(mo==8){
        mo="Sept"
    }
    else if(mo==9){
        mo="Oct"
    }
    else if(mo==10){
        mo="Nov"
    }
    else {
        mo="Dec"
    }
    switch(day)
    {
        case 0:day="Sunday"
            document.body.style.backgroundImage="url(./sun.jpg)"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./mon.jpg)"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./tue.jpg)"
        break;
        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./wed.jpg)"
        break;
        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./thur.jpg)"
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./fri.jpg)"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./sat.jpg)"
    }
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    setTimeout(clock,1000)
}
clock()
var audio=new Audio()
audio.src="C:\Users\nandi\Desktop\web technologies\JavaScript\clock.mp3"

function alarmfunction()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes() 
    var am_pm="AM"
    if(hh>12)
    {
        am_pm="PM"
    }
        if(hh>12)
        {
            hh=hh-12
        }
    if(hh==0)
    {
        hh=12
    }
    var userGivenhh=document.getElementById("userhours").value 
    var userGivenmm=document.getElementById("userminutes").value 
    var userGivenam_pm=document.getElementById("useram_pm").value 

    if(hh==userGivenhh && mm==userGivenmm && am_pm==userGivenam_pm)
    {
        audio.play()
        audio.loop
    }
    else{
        audio.pause()
    }
    setTimeout(alarmfunction,1000)
}
function closeWindow()
{
    document.getElementById("alarmcontainer").style.display="none"
}
function openWindow()
{
    document.getElementById("alarmcontainer").style.display="flex"
}
