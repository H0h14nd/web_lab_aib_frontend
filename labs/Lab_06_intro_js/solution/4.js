function MaxRandom(x){
    return Math.floor(Math.random() * x)
}
console.log("Решение четвёртой задачи:")
console.log(MaxRandom(30))
function MultiArray(array, x){
    array.forEach(element => {
    
        console.log(element * x)
    });
}
let arr = [1, 2, 3]
MultiArray(arr, 5)