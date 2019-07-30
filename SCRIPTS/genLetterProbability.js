const letterProbability = {
    a : 40,
    b : 7,
    c : 13,
    d : 21,
    e : 63,
    f : 11,
    g : 10,
    h : 30,
    i : 34,
    j : 1,
    k : 3,
    l : 20,
    m : 12,
    n : 33,
    o : 37,
    p : 9,
    q : 1,
    r : 29,
    s : 31,
    t : 45,
    u : 13,
    v : 4,
    w : 11,
    x : 1,
    y : 9,
    z : 1,
  }
  
var alphaArray = []
for(var i=67 ; i<123 ; i++){
    var char = String.fromCharCode(i)
    console.log(char)
    for(var j=0 ; j < letterProbability[char]; j++){
        alphaArray.push(char)
    }
}
console.log(JSON.stringify(alphaArray), "alphaArray");