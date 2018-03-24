/**
 * @author CodingKrishna@gmail.com
 * TypeScript Types examples 
 * 
 */
var welcomeMsg: string = 'Welcome to TypeScript';
var luckyNumber: number = 25;
var isVisiable: boolean;
// isVisiable = 35; remove the comment and see compilation error.
isVisiable = true;
console.log(welcomeMsg);
console.log('luckyNumber::', luckyNumber);
console.log('isVisiable::', isVisiable);

// Number objects 
var amount = new Number(10.50);
console.log(amount.toPrecision());

var trainerName = new String('Coding Krishna');
console.log(trainerName.charAt(7));

var nums:number[] = [1,2,3,4];
nums.forEach(element => {
    console.log(element);
});

// Array Object
var names:string[] = new Array("Ganesh","Krishna","Rama","Siva") 
names.map((element)=> {console.log(element)} );

// compilation tsc filename 
// run node filename