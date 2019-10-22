


function resultCounter(string){
    let newArray = string.split(',')
    let redCount = 0;
    let greenCount = 0;
    let amberCount = 0;
    console.log(newArray)
    newArray.forEach(function(item){
        if (item === "Red"){
            redCount++
            console.log(redCount)
        } else if (item === "Green"){
            greenCount++
        } else if (item === "Amber"){
            amberCount++
        }
    })
    return `Red:${redCount} Green:${greenCount} Amber: ${amberCount}` 
}
