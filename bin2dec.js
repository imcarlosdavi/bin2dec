const numDecimal = parseInt(prompt("Coloque um Decimal"))
const convertDec = document.querySelector('h1')
convertDec.textContent = numDecimal


function binary2Decimal(str){
    let binary = String(str)
    let convertBin = parseInt(binary, numDecimal)
    let result = document.querySelector('h3')
    result.textContent = convertBin
    
    if(numDecimal == binary){
        alert("invalid value")
    }
}