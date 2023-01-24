function count(){ 
    document.getElementById("stop").style.display="inline";
    var countSecond= 0;
    var countMinute=0;
    var countHour=0;
    var control=false;
    document.getElementById("stop").addEventListener("click", function() {
        control=true;
    });


   
   
    
    function counterSecond(){
   
         document.getElementById("second").innerHTML=countSecond;
         document.getElementById("minute").innerHTML=countMinute;
         document.getElementById("hour").innerHTML=countHour;

         countSecond++;
   
         if (countSecond==60){
            countMinute++;
            
            countSecond=0;
            
            if (countMinute==60){
                countHour++;
               
                countMinute=0;
               
            }
         }
         if (control==false){
         setTimeout(counterSecond,1000);
         }
         else if (control==true){
            clearTimeout();
            
         }
         
         
        }
    
        counterSecond();
    
    }


count();