function BiggerThenSomething(x){
    return x>10
}
let array = []
for(i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() *20)
}
console.log("Решение третьей задачи:")
console.log(array.filter(BiggerThenSomething))