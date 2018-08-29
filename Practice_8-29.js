











function CheckNums(num1,num2) { 

    
    for (i=0; i<=1; i++) {
        
        if (num1 < num2) {
            return "true"
        }
        else if (num1 === num2) {
            return "-1"
        }
            
        else {
            return "false"
        } 
    }
  // code goes here  
  return (num2 + num1); 
         
}
   
// keep this function call here 
CheckNums(readline());                            
