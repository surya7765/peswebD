const isPrime = () => {
  const num =  parseInt(document.getElementById("isPrime").value);
    
  let prime = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = true;
            break;
        }
    }
    if (prime) {
        document.getElementById('result').textContent = "Not prime";
    } else {
        document.getElementById('result').textContent = "Prime";
    }
};



const changeColor = () => {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const alpha = Math.random();
    const color0 = `rgb(${red}, ${green}, ${blue})`
    const color1 = 'blue';
    document.getElementsByClassName('navbar')[0].style.backgroundImage = `linear-gradient(to bottom, ${color0}, ${color1})`;
}