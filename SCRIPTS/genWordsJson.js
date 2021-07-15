/* 
The script will generate json of words indexed by pairs of letters.
Limited to 8 letter words for compression. 
*/

const fs = require('fs') 
//Read the file
fs.readFile('words_alpha.txt', (err, data) => { 
    if (err) throw err; 
    var data = data.toString() // Binary to string
    var list = data.split(/\r?\n/) // Split the string by newline into an array
    var obj = {}
    var letters = ['a','b','c','d','e','f','g','j','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var pairs = []
    letters.forEach(l1 => letters.forEach(l2 => pairs.push(l1 + l2)))
    for(var i in pairs){ 
        obj[pairs[i]] = list.filter(o => o.length > 2 && o.length < 9 && o[0] === pairs[i][0] && o[1] === pairs[i][1])
    } // create object with alphabet indexing
    var json = JSON.stringify(obj) // convert to json
    fs.writeFile('words.json', json, 'utf8', () => {
        console.log("successfully generated the json !!!")
    }) // write it to a file
})