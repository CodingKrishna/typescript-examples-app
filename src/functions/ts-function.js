function add(x, y) {
    return x + y;
}
var result = add(5, 6);
// var result1:number = add('a',6); remove the comment and see compilation error.
console.log('Result of add function::', result);
var names = new Array("Ganesh", "Krishna", "Rama", "Siva");
function displayNames(user_names) {
    names.map(function (element) { console.log(element); });
}
displayNames(names);
