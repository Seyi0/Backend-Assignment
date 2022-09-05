const deriveMultiples =() =>{
    for (let k= 1; k <= 100; k++){
        if (k% 3 == 0){
            console.log(`${k}/3 : fizz`)
        }
        else if (k% 5 == 0){
            console.log(`${k}/5 :buzz `)
        }
        else if (k% 3 == 0 && k% 5 == 0){
            console.log(`${k}/3: fizzbuzz and ${k}/5: fizzbuzz`)
        }
    }
}
deriveMultiples()