let number = Number(prompt(`Inserisci il numero che vuoi analizzare:`));

function cifra(numero){
    if(numero >= 0 && numero <= 9){
        console.log(`Il numero ${numero} è composto da 1 cifra`);

    }else if(numero >= 10 && numero <= 99){
        console.log(`Il numero ${numero} è composto da 2 cifre`);

    }else if(numero >= 100 && numero <= 999){
        console.log(`Il numero ${numero} è composto da 3 cifre`);

    }else if(numero >= 1000 && numero <= 9999){
        console.log(`Il numero ${numero} è composto da 4 cifre`);

    }else{
        console.log(`Il numero inserito è troppo grande o non previsto dalla funzione`);

    }
}

// Lo stesso principio può essere utilizzato per i numeri negativi aggiungendo altre else if

cifra(number)