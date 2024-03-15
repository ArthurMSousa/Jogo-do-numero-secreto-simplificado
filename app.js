alert('Boas vindas ao jogo do número secreto');
let maxNumber = 5000
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let guess;
let attempts = 1; 

//ENQUANTO o chute não for igual ao número secreto
while (guess != secretNumber) {
    guess = prompt(`Digite um número entre 1 e ${maxNumber}`); 
// SE o chute for igual ao número secreto
    if (guess == secretNumber) {
        break;
            } else {
        if (guess > secretNumber) {
            alert(`O número secreto é menor que ${guess}`);
        } else {
            alert(`O número secreto é maior que ${guess}`);
        }
        // Calcular tentativas: attempts = attempts + 1; ou 
        attempts++;
    }
}

let wordAttempt = attempts > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto: ${secretNumber} com ${attempts} ${wordAttempt}.`);

//if (attempts > 1) {
//    alert(`Isso aí! Você descobriu o número secreto: ${secretNumber} com ${attempts} tentativas`);
//} else {
//    alert(`Isso aí! Você descobriu o número secreto: ${secretNumber} com ${attempts} tentativa`);
//}
