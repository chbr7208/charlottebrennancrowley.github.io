const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const randomButton = document.querySelector(".no-button").addEventListener('click', no);
const submitButton = document.querySelector(".yes-button").addEventListener('click', yes);


function yes() {
    alert(output.textContent);
}

function no(){
    outputInt = randomNumber(0, 99999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max){
    const num = Math.floor(Math.random() * ((max - min + 1)) + min);
    return num;
}