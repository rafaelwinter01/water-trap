function calculateArea(wallArray) {
    var maxHeight = Math.max(...wallArray)
    var pool = []

    for(let i=0; i<wallArray.length; i++) {
        let wall = new Array(maxHeight).fill(0).fill(1,0,(wallArray[i]))
        pool.push(wall) 
    }

    var area=0
    var areaTemp=0

    function verifyWall(posX, height, leftWall) {
        if(leftWall) {
            if(pool[posX][height]===0){
                areaTemp++
            } else {
                area+=areaTemp
                areaTemp=0
            }
        } else {
            if(pool[posX][height]===1){
                leftWall=1
            }
        }
        posX++
        if(posX>=pool.length){
            posX=0
            height++
            leftWall=0
            areaTemp=0
        }
        if(height<maxHeight){
            verifyWall(posX, height, leftWall) 
        }
    }

    verifyWall(0,0,0)
    return area
}

console.log('Prob01', calculateArea([1,2,3,2,3]))
console.log('Prob02', calculateArea([2,0,0,2,1]))
console.log('Prob03', calculateArea([5,3,1,3,5]))
console.log('Prob04', calculateArea([2,0,2,0,1]))
console.log('Prob05', calculateArea([8,0,15,10,2,10,0,10,0,1]))


