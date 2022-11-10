const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const randomButton = document.querySelector(".random-button").addEventListener('click', random);
const submitButton = document.querySelector(".submit-button").addEventListener('click', submit);


function submit() {
    alert(output.textContent);
}

function random(){
    outputInt = randomNumber(0, 99999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max){
    const num = Math.floor(Math.random() * ((max - min + 1)) + min);
    return num;
}