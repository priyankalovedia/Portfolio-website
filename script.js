if(new Date().getHours()<=12){
    document.getElementById("time").innerHTML="Good morning!!!";
}
else if(new Date().getHours()<=16){
    document.getElementById("time").innerHTML="Good afternoon!!!";
}
else {
    document.getElementById("time").innerHTML="Good evening!!!";
}
