/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */



const zucchine = [
    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    },

    {
        varietà: 'zucchina chiara',
        peso: 1,
        lunghezza: 14
    }
]

//calcolo il peso totale

//recupero il dato del peso

const {peso} = zucchine


let sum = 0;
function sumWeight(...peso){
    
    params.forEach(numb => {
        sum += numb
    })
    return sum
}

console.log(sum(peso))