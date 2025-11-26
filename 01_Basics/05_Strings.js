const name = "Manorama"
const repoCount = 50

console.log(name + repoCount + " Value"); //No NEED to Use this 

console.log(`My name is ${name} and the repo count is ${repoCount}`);

const gameName = new String ('Manoramamp')

console.log(gameName[0]);    //op:  M
console.log(gameName.__proto__);   //op:  {}

console.log(gameName.length);     //OP: 9
console.log(gameName.toUpperCase()); //OP: MANORAMAMP
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p')); 

const newString = gameName.substring(0, 6)
console.log(newString);
const anotherString = gameName.slice(-9, 6)
console.log(anotherString);








