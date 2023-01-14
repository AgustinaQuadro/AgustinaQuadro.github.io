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

         countSecond++;
   
         if (countSecond==60){
            countMinute++;
            document.getElementById("minute").innerHTML=countMinute;
            
            if (countMinute==60){
                countHour++;
                document.getElementById("hour").innerHTML=countHour;
                
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