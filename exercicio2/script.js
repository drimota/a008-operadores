let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))
let res 
res = num1>num2
console.log("O primeiro numero é maior que segundo?", res)
res = num1===num2
console.log("O primeiro numero é igual ao segundo?", res)
res = (num1 % num2) === 0
console.log("O primeiro numero é divisível pelo segundo?", res)
res = (num2 % num1) === 0
console.log("O segundo numero é divisível pelo primeiro?", res)