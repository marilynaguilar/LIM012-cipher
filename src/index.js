//prueba
import cipher from './cipher.js';

let buttonEncode = document.getElementById('buttonEncode');
let buttonDecode = document.getElementById('buttonDecode');

let boxText = document.getElementById('boxText');
let boxNum = document.getElementById('boxNum');
let boxResult = document.getElementById('boxResult');


buttonEncode.addEventListener('click',() =>
{ 
    let valueText = boxText.value.toUpperCase();
    let valueNum = boxNum.value;
    boxResult.value = cipher.encode(valueNum,valueText);
});

buttonDecode.addEventListener('click',() =>
{
    let valueText = boxText.value.toUpperCase();
    let valueNum = boxNum.value;
    boxResult.value = cipher.decode(valueNum,valueText);
    
});

// console.log(cipher);
