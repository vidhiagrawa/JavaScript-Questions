// <!-- ttake a number n as an input from user create an arrays of a number from 1-n .... use the reduce method to calculate the "sum and product" of all numbers in array -->


let n = prompt("enter a number")
let arr = []

for(let i = 1; i <= n; i++){
    arr[i - 1] = i
}

console.log(arr)

let add = arr.reduce( (sum, curr) => {
    return sum + curr;
} )

let prod = arr.reduce( (sum, curr) => {
    return sum * curr;
// } )

// console.log("the sum : ", add)

// console.log("the product : ", prod)

