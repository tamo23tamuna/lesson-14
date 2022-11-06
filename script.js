// 1
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
console.log(user.studentstatus);


// 2
let array = [5, 7, "blue", 23, "red", "green"];

// for loop
for(i=0; i<array.length; i++){
    console.log(array[i]);
}
// while loop
let i = 0;
while(i<array.length){
    console.log(array[i]);
    i++;
}


// 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for loop - ახალი ჩანაწერი
for(let x of numbers){
    if(x > 5){
        console.log(x);
    }
}
// foor loop - ძველი ჩანაწერი
for(i=0; i<numbers.length; i++){
    if(numbers[i] > 5){
        console.log(numbers[i]);
    }
}


// 4
let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if(user.age < 18 && user.studentstatus === 'active'){
    console.log('hello');
}else if(user.name === 'levani'){
    console.log('hello Levani');
}else if(user.studentstatus === 'active' || user.age < 25){
    console.log('hello world');
}
console.log('error');


// 5
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];

for(i=0; i<array.length; i++){
    for(x=0; x<array[i].length; x++){
        if(array[i][x] > 0){
            console.log(array[i][x]);
        }
    }
}


// 6
let array = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10 ];

// ლუწი
//for loop ძველი ჩანაწერი
for(let i=0; i<array.length; i++){
    if(array[i] % 2 == 0){
        console.log(array[i]);
    }
}

// for loop ახალი ჩანაწერი
for(let i of array){
    if(i % 2 == 0){
        console.log(i);
    }
}

// forEach
array.forEach(function(even){
    if(even % 2 == 0){
        console.log(even);
    }
});

// კენტი
// for loop - ახალი ჩანაწერი
for(let i of array){
    if(i % 2 == 0){
        console.log(i);
    }
}


// 7
function sum(...numbers){
    let sumVal = 0;
    for(let item of numbers){
        if(item>0){
            sumVal += item;
        }
    }
    return sumVal;
}

let functionResult = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(functionResult);


// 8
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

function fullName(){
    if(user.isloggedin == true){
        return user.firstname + " " + user.lastname;
    }else{
        return false;
    }
}

let result = fullName();
console.log(result);


// 9
function max(...numbers){
    let maxNum = 0;
    for(let item of numbers){
        if(item > maxNum){
            maxNum = item;
        }
    }
    return maxNum;
}


let result = max(13, 5, -37, 23, 21);
console.log(result);


// 10
let array = [1, 2, 4, 10, 34, 5, 7, 87];

for(let item of array){
    if(item>0 && item<10){
        console.log(item);
    }
}


// 11
let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let item of numbers){
    if(item === 5){
        break;
    }
    console.log(item);
}












