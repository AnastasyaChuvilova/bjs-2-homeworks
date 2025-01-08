"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dscrmnt = b**2-4*a*c;
if(dscrmnt === 0) {
  let root = -b/(2*a);
  arr.push(root);
} else if(dscrmnt > 0) {
  let root1 = (-b + Math.sqrt(dscrmnt) )/(2*a);
  let root2 = (-b - Math.sqrt(dscrmnt) )/(2*a);
  arr.push(root1,root2);
}
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMonth = (percent/12)/100;
  let mortgageBody = amount - contribution;
  let amountPerMonth = mortgageBody * (percentPerMonth + (percentPerMonth / ((Math.pow((1 + percentPerMonth), countMonths)) - 1)));
  let totalMortgage = (amountPerMonth * countMonths).toFixed(2); 
  return Number(totalMortgage);
}
