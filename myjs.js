// დავალება 1
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
};

console.log(user.studentstatus);

// დავალება 2
let names = ['giorgi','nika','luka'];

for (let item = 0; item < 3; item++) {
    console.log(names[item]);
}

// დავალება 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x = 0; x < numbers.length; x++) {
    if (numbers[x]>5)
    console.log(numbers[x]);
}

// დავალება 4
let user2 = {
	name: 'giorgi',
	age: 20,
	studentstatus: 'active'
}
if (user2.age > 18 && user2.studentstatus == 'active') {
    console.log('hello');
}
else if (user2.name == 'levan') {
    console.log('hello Giorgi');
}
else if ((user2.studentstatus == 'active') || (user2.age < 25)) {
    console.log('hello world');
}
else {
    console.log('error');
}

// დავალება 5 
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for (let x of array){
    if (typeof x == 'string') {
        console.log(x);
    }
}

// დავალება 6
let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for (let x of array2){
    for (let y of x){
        if (y > 0) {
            console.log(y)
        }
    }
}

// დავალება 7
let array3 = [32, 10, 'hello', null, 'hello2', 50]
for (let i = 0; i < array3.length; i++) {
    if (typeof array3[i] == 'number' && array3[i] % 5 == 0){
        console.log(array3[i])
    }
}



