function binToDec() {
    
    const binValue = document.querySelector("#value").value;

    let decValue = 0;
    let binLength = binValue.length;

    for (let index = 0; index < binLength; index++) {

        decValue += parseInt(binValue[index]) * Math.pow(2, binLength -1 - index); 

    } 

    document.querySelector("#decValue").innerHTML = decValue;

}