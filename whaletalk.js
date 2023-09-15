var input = 'turpentine and turtles';
const vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];

for(let i = 0; i < input.length; i++){
    if(input[i] == 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] == 'u'){
    resultArray.push(input[i]);
  }

 for(let v = 0; v < vowels.length; v++){
  if(input[i] == vowels[v]){
    resultArray.push(input[i]);
  }
 }
}

var translate = (resultArray.join(""));
console.log(translate.toUpperCase());
