function count(){ 
    document.getElementById("stop").style.display="inline";
    var countSecond= 0;
    var countMinute=0;
    var countHour=0;
    document.getElementById("stop").addEventListener("click", stop)
   
   
    
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
         setTimeout(counterSecond,1000);
         
        }
    counterSecond();
    function stop () {
    clearTimeout();
}
stop()
}


count();

/*
    function counterMinute (){
        
   
         document.getElementById("minute").innerHTML=countMinute;
         countMinute++;
         setTimeout(counterMinute,60000);

    }
    function counterHour() {
        document.getElementById("hour").innerHTML=countHour;
   
        countHour++;
        setTimeout(counterHour,2400000);
    }

 
    counterSecond();
    counterMinute();
    counterHour();


}
count();



*/