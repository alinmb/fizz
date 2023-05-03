// Indiquer entre 0 et 30 si un chiffre/nombre est divisible par 3 ou 5 ou les deux
// Résultat dans la console
// Indicate between 0 and 30 if a digit/number is divisible by 3 or 5 or both
// Result in the console
const estDivisible = () => {
    for (let i = 0; i < 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' FizzBuzz')
        } else if (i % 3 === 0) {
            console.log(i + ' Fizz')
        } else if (i % 5 === 0) {
            console.log(i + ' Buzz')
        } else {
            console.log(i)
        }
    }
}

estDivisible()

// En utilisant prompt
// Using prompt

const isDivisable = () => {
    const qst = prompt('Is this number divisible by 3 or 5?')
    const qstValue = parseInt(qst)

    if (qstValue % 3 === 0 && qst % 5 === 0) {
        alert(qstValue + ' is divisible  by 3 & 5 !')
    } else if ( qstValue % 3 === 0) {
        alert(qstValue + ' is divisible  by 3 !')
    } else if ( qstValue % 5 === 0) {
        alert(qstValue + ' is divisible  by 5 !')
    } else {
        alert('Error, type a number')
    }

}
const estDivisibleQst = () => {
    const qst = prompt('Ce chiffre est-il divisible par 3 ou 5 ?')
    const qstValue = parseInt(qst)

    if (qstValue % 3 === 0 && qst % 5 === 0) {
        alert(qstValue + ' est divisible par 3 & 5 !')
    } else if ( qstValue % 3 === 0) {
        alert(qstValue + ' est divisible par 3 !')
    } else if ( qstValue % 5 === 0) {
        alert(qstValue + ' est divisible par 5 !')
    } else {
        alert('Erreur, écrivez un nombre')
    }
}