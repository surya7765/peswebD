var a = 12;
var a = 31;

let b = 31;
b = 2341;
const c = 123;
// c = 234;
console.log(a);


sum = (a,b) => a + b;
// sum = 123
console.log(sum)


isPrime = (n) => {
    flag = false
    // statement1.....
    // statement2.....
    return flag
}



const obj = {
    a: 41,
    sum: (a,b) => a+b
}

console.log(typeof obj);
obj.sum(2,3)




const classroom = Object()


const h1_tag = document.getElementsByTagName('h1')[0]


h1_tag.textContent  = 'Hello World'

h1_tag.style.color = 'red'
h1_tag.style.backgroundColor = 'blue'



// console.log(document.querySelector('#input_text').value)


let x = '',y = '';
let operator = '';

const appendNumber = (value) => {
    x += value
    document.getElementById('result').value = x
    enableOperator();
}

const selectOperator = (op) => {
    if (x !== ""){
        y = x
        x = ''
        operator = op
        disableOperator();
    }
}

// const stopTalking = ()

const calculate = () => {
    let res = 0;
    x = parseInt(x)
    y = parseInt(y)

    console.log(operator);

    switch (operator) {
        case '+':
            res = x + y;
            break;
        case '-':
            res = x - y;
            break;
        case '*':
            res = x * y;
            break;
        case '/':
            res = x / y;
            break;
        default:
            console.log("Error");
    }
    x = "";
    operator = "";
    console.log(res);
    document.getElementById('result').value = res.toString();
    disableOperator();
}


const enableOperator = () => {
    const operator_btn = document.querySelectorAll('.operator');
    for (const btn of operator_btn){
        btn.disabled = false;
    }
}

const disableOperator = () => {
    const operator_btn = document.querySelectorAll('.operator')
    for (const btn of operator_btn){
        btn.disabled = true;
    }
}




