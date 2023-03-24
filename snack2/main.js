/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */



const array = [
    1,
    2,
    3,
    4,
    5
]

const {number} = array
console.log(array)

const numberA = 1

const numberB = 5


function getArray(array, number1, number2){
    let newarray
    array.forEach(number => {
       
       
        if (number > number1 && number < number2) {
             newarray = {number}
        }
        return newarray
    });
    console.log(newarray)
}

getArray(array, numberA, numberB)