const fs = require('fs') 
//Read the file
fs.readFile('words_alpha.txt', (err, data) => { 
    if (err) throw err; 
    var data = data.toString() // Binary to string
    var list = data.split(/\r?\n/) // Split the string by newline into an array
    var obj = {}
    var letters = ['a','b','c','d','e','f','g','j','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(var i in letters){ 
        obj[letters[i]] = list.filter(o => o.length > 2 && o[0] === letters[i])
    } // create object with alphabet indexing
    var json = JSON.stringify(obj) // convert to json
    fs.writeFile('words.json', json, 'utf8', () => {
        console.log("successfully generated the json !!!")
    }) // write it to a file
})