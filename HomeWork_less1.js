console.log (`Hello World!`);
let bool = false; 
let num = 45;
let str = 'Hello Wold!';
let undef;
let nul = null;
console.log (`bool = ${bool}; num = ${num}; str = ${str}; undef = ${undef}; nul = ${nul}`)

const testOBJ = {bool:true, num:98, str:'Shop', undef:'', nul:null};
console.log (testOBJ);

console.log (`Тип переменной num : ${(typeof num)}`);
console.log (`Тип переменной str : ${(typeof str)}`);
console.log (`Тип переменной bool : ${(typeof bool)}`);
console.log (`Тип переменной nul : ${(typeof nul)}`);
console.log (`Тип переменной undef : ${(typeof undef)}`);
console.log (`Тип переменной OBJ : ${(typeof testOBJ)}`);

console.log (`Тоже самое через функцию: `);
console.log (typeof(num));
console.log (typeof(str));
console.log (typeof(bool));
console.log (typeof(nul));
console.log (typeof(undef));
console.log (typeof(testOBJ));

// Пробуем менять константу
//const STR = 'Vlolodin';
//STR = 'Pogodin';

testOBJ.num = 100;
console.log ('Измененное свойство num = ',testOBJ.num);
testOBJ.newNum = 100; // error
console.log (testOBJ);

let userDATA = {name:'John', sureName:'Madson'};
console.log (userDATA);
userDATA.name = 'Mike';
console.log (userDATA);
userDATA.age = 22;
console.log (userDATA);