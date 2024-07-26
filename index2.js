
// let yosh = +prompt("Yoshingizni kiriting")
// if (yosh <= 30) {
//    alert( yosh + 5)

// }
// let Yosh = +prompt("Yoshingizni kiriting")
// if (Yosh <= 60) {
//    alert("Siz kattasiz")
// }

// else { 
//     alert("Siz qarisiz") }


// let parol = prompt("Parolingizni kiriting")
// if (parol = sarimsoqpiyoz){ 
//     alert("assalomu aleykum")
// }
// else{
//     alert("parol noto'g'ri")
// }
// const yosh = +prompt("Yoshingizni kiriting")
// const result = confirm("Sizda prava bormi?")

// if (yosh>=20 && result) {
//     alert("getavar")
// }
// else alert("Getting 10 yilo")

// let son = +prompt("Raqamni kiriting")
// if (son = 1){
//     alert("yanvar")
// }
// if (son = 2){
//     alert("Fevral")
// }
// if (son = 3){
//     alert("Mart")
// }
// if (son = 4){
//     alert("Aprel")
// }
// if (son = 5){
//     alert("May")
// }
// if (son = 6){
//     alert("Iyun")
// }if (son = 7){
//     alert("Iyul")
// }
// if (son = 8){
//     alert("Avgust")
// }
// if (son = 9){
//     alert("Sentabr")
// }
// if (son = 10){
//     alert("Oktabr")
// }
// if (son = 11){
//     alert("Noyabr")
// }
// if (son = 12){
//     alert("Decabr")
// }

// else alert("Boshqa son kiriting")




const number1 = document.getElementById("num1")
const number2 = document.getElementById("num2")

const p1 = document.getElementById("result1")
const p2 = document.getElementById("result2")
const p3 = document.getElementById("result3")
const p4 = document.getElementById("result4")

function add() {
    const result = Number(number1.value) + Number(number2.value);
    p1.innerHTML = result;
}
function add1() {
    const result = Number(number1.value) - Number(number2.value);
    p2.innerHTML = result;
}
function add2() {
    const result = Number(number1.value) * Number(number2.value);
    p3.innerHTML = result;
}
function add3() {
    const result = Number(number1.value) / Number(number2.value);
    p4.innerHTML = result;
}