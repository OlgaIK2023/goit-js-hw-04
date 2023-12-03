function makeArray (firstArray,secondArray,maxLength) {

  const consatenatedArrays = firstArray.concat(secondArray);
  const consatenatedLength = firstArray.length + secondArray.lenght;

  if ((firstArray.length > maxLength)) {
    return firstArray.slice(firstArray.length-(firstArray.length-maxLength),maxLength);} 
  else if((firstArray.length + secondArray.length) > maxLength) {
    return consatenatedArrays.slice(consatenatedLength-(consatenatedLength-maxLength),maxLength);}
  else {
    return consatenatedArrays;
  }

}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
