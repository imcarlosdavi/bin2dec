const numDecimal = 2


function binary2Decimal(str){
    let binary = String(str)
    let convertBin = parseInt(binary, numDecimal)
    let result = document.querySelector('h3')
    result.textContent = convertBin
    
    if(numDecimal == binary){
        alert("invalid value")
    }
}