 
  setTimeout( ()=>{
    console.log("timer")},5000);
    
  

  
 function a(x) {
    console.log("a function");
    x();
    
}
    
 
a(function b() {
    console.log("b function");

 })
 
 
 //console.log(b);