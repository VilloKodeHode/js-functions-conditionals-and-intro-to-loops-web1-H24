let num = 10;


if (num === 10) {
    console.log(num, "er 10")
} else if (num < 10) {
    console.log(num, "er mindre enn 10")
} else if (num > 10) {
    console.log(num, "er større enn 10")
}




function numCheck() {
    let result;
    if (num === 10) {
        return result = `${num} er 10`
    } else if (num < 10) {
        return result = `${num} er mindre enn 10`
    } else if (num > 10) {
        return result = `${num} er større enn 10`
    }
}

console.log(numCheck())

num = 9

console.log(num % 2)

if (num % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

num % 2 ? console.log("odd") : console.log("even")



const isMale = true

if (isMale) {
    console.log("is male")
} else {
    console.log("is female")
}



//! loops

for (let i = 0; i < 5; i++) {
    console.log(i)
}

for (let i = 5; i > 0; i--) {
    console.log(i - 1)
}



const animals = [
    "Lion",
    "Elephant",
    "Tiger",
    "Giraffe",
    "Kangaroo",
    "Panda",
    "Zebra",
    "Penguin",
    "Dolphin",
    "Koala",
    "Rhinoceros",
    "Leopard",
    "Cheetah",
    "Hippopotamus",
    "Polar Bear"
];

console.log(animals.length)

// Console logging the array with a for loop:
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

// Reversing the console log for the array with a for loop:
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i])
}

//! DRY - Do not repeat yourself!
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])



let randomNum = Math.ceil(Math.random() * 10) // expected output: 1-10

let x = 1

while (x != randomNum) {
    console.log("trying to find the number.. " + x)
    if (x === 9) break;
    x++
}

