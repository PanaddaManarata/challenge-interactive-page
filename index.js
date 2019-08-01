window.onload = function(e){ 
   console.log('hi');



let btnLeft = document.getElementById('buttonleft'); 
console.log(btnLeft);
let btnRight = document.getElementById('buttonright'); 
let Carrousel = []; 

Carrousel = ["cocktails.jpg", "ginto.jpg", "coctail_material.jpg", "pinkcocktail.jpg"]; 
    
    

        
    let summaryBtn = document.getElementById('summarytab'); 
    let informationBtn = document.getElementById('informationtab'); 
    let contactBtn = document.getElementById('contacttab'); 
    var summaryTab = document.getElementById('summary'); 
    var infoTab = document.getElementById('information');
    var contactTab = document.getElementById('') 
    

    summaryBtn.addEventListener('click', summaryClick)
    
    function summaryClick(){
        console.log("hi sum");

    }

    informationBtn.addEventListener('click', infoClick)
    
    function infoClick(){
        console.log("hi info");
    }

    contactBtn.addEventListener('click', contactClick)
    
    function contactClick(){
        console.log("hi contact");
    }



}













