
const endDate = new Date("31 oct,2026 21:00:00").getTime();
const startDate = new Date().getTime();


 let x = setInterval(function updateTimer(){
  const now = new Date().getTime();
  
  const distancecovered = now - startDate;
  const distancepending = endDate - now;
  //calculate days ,hr ,mins,secs 
// 1 day = 24*60*60*1000 ms 
const oneDayMillis = 24*60*60*1000;
const oneHourInMillis =  60*60*1000;
const oneMuniInMillis = 60*1000;

 const days =Math.floor(distancepending/(oneDayMillis));
 const hrs = Math.floor((distancepending%(oneDayMillis)/(oneHourInMillis)));
 const mins= Math.floor((distancepending%(oneHourInMillis)/(oneMuniInMillis)));
 const secs = Math.floor((distancepending%(oneMuniInMillis)/1000));

 //populate in UI
 document.querySelector("#days span").innerHTML = days;
document.querySelector("#hours span").innerHTML = hrs;
document.querySelector("#mins span").innerHTML = mins;
document.querySelector("#sec span").innerHTML = secs;

// calculate width percentage foe progess bar 
const totalDistance = endDate - startDate ;
const percentageDistance = (distancecovered /totalDistance)*100;

//set width for progress bar
document.getElementById("progress-bar").style.width = percentageDistance + "%";

if (distancepending <0){
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "EXPIRED";
  document.getElementById("progress-bar").style.width = "100%";
}

}

 ,1000);