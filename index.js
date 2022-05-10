
var fibonacci= [];
fibonacci[0]=0;
fibonacci[1]= 1;
var fs= require('fs');

fs.readFile("f_n.txt", function(err, f_n){
  
  for (var n=2;n<=f_n;n++){
  fibonacci[n]= fibonacci[n-1]+fibonacci[n-2];
}
  console.log("Este es el número fibonacci para F(",n-1,"):", fibonacci[f_n]);
  
  console.log("Esta es la serie fibonacci para F(",n-1,"):",fibonacci);
  
});








