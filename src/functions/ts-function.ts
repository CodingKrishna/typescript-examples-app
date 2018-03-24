function add(x: number, y: number): number {
    return x + y;
}
var result:number = add(5,6);
// var result1:number = add('a',6); remove the comment and see compilation error.
console.log('Result of add function::', result);

var names:string[] = new Array("Ganesh","Krishna","Rama","Siva");

function displayNames(user_names:string[]) {
    names.map((element)=> {console.log(element)} );
}
displayNames(names);
