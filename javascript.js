function add(firstNumber,secondNumber ){
    answer.innerText = `${Number(firstNumber) + Number(secondNumber)}`;
}

function subtract(firstNumber,secondNumber){
    answer.innerText = `${Number(firstNumber) - Number(secondNumber)}`;
}

function multiply(firstNumber,secondNumber){
    answer.innerText = `${Number(firstNumber) * Number(secondNumber)}`;
}

function divide(firstNumber,secondNumber){
    answer.innerText = `${Number(firstNumber) / Number(secondNumber)}`;
}

function clear(){
    question.innerText = '';
    answer.innerText = '';
}

function backspace(){
    let currentValue = question.innerText;
    let valueAfterBackspace = currentValue.slice(0,-1);
    question.innerText = valueAfterBackspace;
}

function percentage(){
    answer.innerText = `${question.innerText / 100}`;
}


function operate(operation,first,second){
   return  operation(first,second);

}




const digitButton = document.querySelectorAll('.btn.digit');
const functionButton = document.querySelectorAll('.btn.ftn');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');





for(let pressed of digitButton){
    pressed.addEventListener('click',(e)=>{
       question.append(pressed.innerText);  
    })
}

let operation;
let number;
let symbol;

for(let pressed of functionButton){
    pressed.addEventListener('click',(e)=>{

        if(question.innerText < 1) return;


        if(pressed.classList.value === 'btn ftn clear') return clear();
       
        if(pressed.classList.value === 'btn ftn backspace' ) return backspace();

        if(pressed.classList.value === 'btn ftn percent') return percentage();

        if(pressed.classList.value === 'btn ftn plus'){
            symbol = '+';
            operation = add;
        };

        if(pressed.classList.value === 'btn ftn minus'){
            symbol= '-';
            operation = subtract;
        };

        if(pressed.classList.value === 'btn ftn multiply'){
            symbol= '×';
            operation = multiply;
        };

        if(pressed.classList.value === 'btn ftn divide'){
            symbol= '÷';
            operation = divide;
        };



        if(pressed.classList.value === 'btn ftn equals') {
            number = question.innerText;
            let splitted = number.split(`${symbol}`);
           return  operate(operation,splitted[0],splitted[1]);
        };

       question.append(pressed.innerText); 
       
    })
}