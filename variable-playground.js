// var person = {
// 	name: 'Kyle',
// 	age: 26
// };

// // function updatePerson (obj){
// // 	// will not work to update because when you assign a new value to an arg, you dont update original
// // 	// obj = {
// // 	// 	name: 'Kyle',
// // 	// 	age: 27
// // 	// };
// // 	// but if you update an assignment on the original, then you are updating
// // 	obj.age = 27;
// // }

// updatePerson(person);
// console.log(person);

var grades = [94, 88];

function addGrades(gradesArr){
	gradesArr.push(55);
	debugger;
}

addGrades(grades);
console.log(grades);