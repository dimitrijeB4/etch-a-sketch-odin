const container = document.querySelector(".container");
const gridBtn = document.querySelector(".newGrid");
let gridSize=16;


function changeGridSize(event){
    gridSize=prompt("Input a number between 1 and 100", "16");
    gridSize=parseInt(gridSize);

    if(100<gridSize<0){
        gridSize=prompt("invalid number try again", "16");
    gridSize=parseInt(gridSize);
    }else{
        removeGrid();
        createGrid();
    }
    
}
function removeGrid(){
    while(container.firstChild){
        let x = container.firstChild;
        container.removeChild(x);
    }
}

function changeColor(event){
    
    let r= Math.random()*1000%255;
    let g=Math.random()*1000%255;
    let b=Math.random()*1000%255;
    event.target.style.backgroundColor="rgb("+ r + ","+g+","+b+")";
    
}
function incOpacity(event){
    let o = parseFloat(event.target.style.opacity);
    o=o+0.1;
    event.target.style.opacity=o;
    

}
function createGrid(event){    

for(let i=0;i<gridSize;i++){
    const divi = document.createElement("div");
    for(let k=0;k<gridSize;k++)
        {   
            
            const divk = document.createElement("div"); 
            divk.textContent="";
            divk.addEventListener("mouseenter", changeColor);
            divk.addEventListener("mouseenter", incOpacity);
            divk.classList.add("cell");
            divk.style.width=960/gridSize +"px";
            divk.style.height=960/gridSize+"px";
            divi.appendChild(divk);
            divk.style.opacity=0.1;
        }
    
    container.appendChild(divi);
}
}

gridBtn.addEventListener("click",changeGridSize);

createGrid();

