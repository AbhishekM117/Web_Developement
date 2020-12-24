let input = document.getElementById('input-part');
let mul = document.getElementById('mul-btn');
let div = document.getElementById('div-btn');
let sub = document.getElementById('sub-btn');
let add = document.getElementById('add-btn');
let decimal = document.getElementById('decimal-btn');
let btn_9 = document.getElementById('9-btn');
let btn_8 = document.getElementById('8-btn');
let btn_7 = document.getElementById('7-btn');
let btn_6 = document.getElementById('6-btn');
let btn_5 = document.getElementById('5-btn');
let btn_4 = document.getElementById('4-btn');
let btn_3 = document.getElementById('3-btn');
let btn_2 = document.getElementById('2-btn');
let btn_1 = document.getElementById('1-btn');
let btn_0 = document.getElementById('0-btn');
let res = document.getElementById('res-btn');
let clear = document.getElementById('clear-btn');



mul.addEventListener('click', function(e) {
    input.value += '*';
})
div.addEventListener('click', function(e) {
    input.value += '/';
})
sub.addEventListener('click', function(e) {
    input.value += '-';
})
add.addEventListener('click', function(e) {
    input.value += '+';
})

decimal.addEventListener('click', function(e) {
    input.value += '.';
})

btn_9.addEventListener('click', function(e) {
    input.value += '9';
})
btn_8.addEventListener('click', function(e) {
    input.value += '8';
})
btn_7.addEventListener('click', function(e) {
    input.value += '7';
})
btn_6.addEventListener('click', function(e) {
    input.value += '6';
})
btn_5.addEventListener('click', function(e) {
    input.value += '5';
})
btn_4.addEventListener('click', function(e) {
    input.value += '4';
})
btn_3.addEventListener('click', function(e) {
    input.value += '3';
})
btn_2.addEventListener('click', function(e) {
    input.value += '2';
})
btn_1.addEventListener('click', function(e) {
    input.value += '1';
})
btn_0.addEventListener('click', function(e) {
    input.value += '0';
})
res.addEventListener('click', function(e) {
    let final_ans = eval(input.value);
    input.value = final_ans;
})
clear.addEventListener('click', function(e) {
    input.value = '';
})



//Better Version

// let input = document.getElementById('input-part');
// let res = document.getElementById('res-btn');
// let clear = document.getElementById('clear-btn');
// let buttons = document.querySelectorAll('.btn');


// buttons.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         input.value += `${btn.value}`;
//     })

// })
// res.addEventListener('click', function(e) {
//     let final_ans = eval(input.value);
//     input.value = final_ans;
// })
// clear.addEventListener('click', function(e) {
//     input.value = '';
// })