let num1 = 8, num2 = 5;
let result;

// result = num1 + num2;
// console.log(result);

// result = num1 - num2;
// console.log(result);

// result = num1 * num2;
// console.log(result);

// result = num1 / num2;
// console.log(result);

// result = num1 % num2;
// console.log(result);

result = num1 > num2;
console.log(result);
console.log(typeof(result));

result = num1 == num2;
console.log(result);

result = (num1 != num2);
console.log(result); 

result = (num1 == num2) && (num1 >= num2);
console.log(result); 

result = (num1 == num2) || (num1 >= num2);
console.log(result); 

result = !(num1 == num2);
console.log(result); 

result = (num1 < num2) ? 'T' :'F';
console.log(result); 

document.write("<span class='acess'>판정결과" + result+ "</span>")