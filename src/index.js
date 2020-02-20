//prueba
import cipher from './cipher.js';

let buttonCode = document.getElementById('buttonCode');
let buttonDecode = document.getElementById('buttonDecode');
let boxText = document.getElementById('boxText');
let boxNum = document.getElementById('boxNum');
let boxResult = document.getElementById('boxResult');

buttonCode.addEventListener('click',()=>
{  

    let valueText = boxText.value.toUpperCase();
    let valueNum = boxNum.value;
    boxResult.value = cipher.encode(valueNum,valueText);
})

buttonDecode.addEventListener('click',() =>
{
    let valueText = boxText.value.toUpperCase();
    let valueNum = boxNum.value;
    boxResult.value = cipher.decode(valueNum,valueNum);
    
})

console.log(cipher);
