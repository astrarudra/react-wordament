//alphaArrayWithProbability and word indexed map is generated using script in the script folder. 
var alphaArrayWithProbability = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","f","f","f","f","f","f","f","f","f","f","f","g","g","g","g","g","g","g","g","g","g","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","j","k","k","k","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","m","m","m","m","m","m","m","m","m","m","m","m","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","p","p","p","p","p","p","p","p","p","q","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","u","u","u","u","u","u","u","u","u","u","u","u","u","v","v","v","v","w","w","w","w","w","w","w","w","w","w","w","x","y","y","y","y","y","y","y","y","y","z"]

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
  
export function genTiles(rowN, colN) {
    var alphaMatrix = [], scoreMatrix = []
    var alphaLength = alphaArrayWithProbability.length
    for(var j = 0; j < rowN; j++){
      var row = [], row2 = []
      for(var i = 0; i < colN; i++){
        row.push(alphaArrayWithProbability[getRndInteger(0,alphaLength)])
        row2.push(getRndInteger(1,6))
      }
      alphaMatrix.push(row)
      scoreMatrix.push(row2)
    }
    return { alphaMatrix , scoreMatrix }
  }
  
export function validateSelection(rowNo, colNo, address) {    
    if(address.length > 0){
      var lastAddress = address[address.length - 1]
      if(lastAddress[0] - 1 === rowNo && lastAddress[1] === colNo || // left
        lastAddress[0] + 1 === rowNo && lastAddress[1] === colNo || // right
        lastAddress[1] - 1 === colNo && lastAddress[0] === rowNo || // top
        lastAddress[1] + 1 === colNo && lastAddress[0] === rowNo || // bottom
        (lastAddress[0] - 1 === rowNo && lastAddress[1] - 1 === colNo ) || // left top 
        (lastAddress[0] - 1 === rowNo && lastAddress[1] + 1 === colNo ) || // left bottom
        (lastAddress[0] + 1 === rowNo && lastAddress[1] - 1 === colNo ) || // right top 
        (lastAddress[0] + 1 === rowNo && lastAddress[1] + 1 === colNo ) // right bottom
        ) return true
      else return false
    }
    else return true
}  


