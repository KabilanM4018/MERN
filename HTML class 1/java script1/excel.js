 function createCell(elementID){

        var cell = document.createElement('input');
        cell.className ='cell';
		cell.setAttribute("id", elementID);
        let parentDiv = document.getElementById('container');
        parentDiv.appendChild(cell);
}
for(let i=0;i<=1000;i++){
	createCell(i);
}