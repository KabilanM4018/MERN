 function createCell(){

        var cell = document.createElement('input')
        cell.className ='cell'
        let parentDiv = document.getElementById('container')
        parentDiv.appendChild(cell)

        console.log("cell created")
}
createCell();
createCell();
createCell();