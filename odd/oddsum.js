// n term of odd numbers and sum 

let n = parseInt(prompt("enter the number to print upto ", 1))
let i; 
let sum;
function oddSum(number) {
     

for (let i =1; i<=number*2; i++){
    if (i%2=== 1){
    console.log(i);}
    
    }

    
 sum=0;
 for (i=2; i<=number; i++){
   sum=number*number;
 }
 console.log(` the total sum of odd numbers is ${sum}`);
}


oddSum(n)
