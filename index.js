window.onload = function(e){ 
   console.log('hi');

let btnLeft = document.getElementById('buttonleft'); 
let btnRight = document.getElementById('buttonright'); 
let Carrousel = []; 
var clickCounter = 0; 
Carrousel = ["img/cocktails.jpg", "img/ginto.jpg", "img/coctail_material.jpg", "img/pinkcocktail.jpg"]; 
    
    

        
    let summaryBtn = document.getElementById('summarytab'); 
    let informationBtn = document.getElementById('informationtab'); 
    let contactBtn = document.getElementById('contacttab'); 
    var summaryTab = document.getElementById('summary'); 
    var infoTab = document.getElementById('information');
    var contactTab = document.getElementById('contact') 
    

    summaryBtn.addEventListener('click', summaryClick)
    informationBtn.addEventListener('click', infoClick)
    contactBtn.addEventListener('click', contactClick)

    
    
    function infoClick(){
        console.log("hi info");
        summaryTab.style.display = "none"; 
        infoTab.style.display = "block"; 
        contactTab.style.display = "none"; 

    }

   
    
    function contactClick(){
        console.log("hi contact");
        summaryTab.style.display = "none"; 
        infoTab.style.display = "none"; 
        contactTab.style.display = "block"; 
    }

    function summaryClick(){
        console.log("hi sum");
        summaryTab.style.display = "block"; 
        infoTab.style.display = "none"; 
        contactTab.style.display = "none"; 

    }

function timeToParty(){
    var countDownDate = new Date("Aug 5, 2019 15:37:25").getTime();
    console.log(countDownDate)
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("timetoparty").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timetoparty").innerHTML = "EXPIRED";
        }
      }, 1000);
}

timeToParty(); 






}













