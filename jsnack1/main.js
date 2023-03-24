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

const {Number(peso)} = zucchine
console.log(peso)


function sumWeight(...weight){
    let sum = 0;
    params.forEach(numb => {
        sum += numb
    })
    return sum
}

console.log(sumWeight(peso))