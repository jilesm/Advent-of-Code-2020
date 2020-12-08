

const fs = require('fs')
    
// Part 1
fs.readFile('./data.txt', (err, data) => {
    if (err) { 
        console.log('error!', err)
    } else {
        data = data.toString()
        const arr = data.split('\n').map(Number);

        for (let i = 0; i < arr.length; i++)  {
            for(let j = i + 1; j < arr.length; j++)
            if((arr[i] + arr[j]) === 2020)  { 
                console.log(
                    `When you add ${arr[i]} + ${arr[j]} you get ${arr[i] + arr[j]}`
                )
                console.log(
                    `When you multiply ${arr[i]} * ${arr[j]} you get ${arr[i] * arr[j]}`
                )
            }
        
        }
    }
});

//Part 2

fs.readFile('./data.txt', (err, data) => {
    if (err) {+
        console.log('error!', err)
    } else {
        data = data.toString()
        const arr = data.split('\n').map(Number)

        for(var i = 0; i < arr.length; i++) {
            for(var j = i + 1; j < arr.length; j++ ) {
                for(var x = j + 1; x <arr.length; x++) {
                    if((arr[i] + arr[j] + arr[x]) === 2020) {
                        console.log('When you add', arr[i], '+', arr[j], '+', arr[x], 'you get 2020.', 'When you multiply', arr[i], '*', arr[j],  'you get', arr[i] * arr[j] * arr[x])
                    }
                }
            }
        }
    }
})