class BlockMap{
    constructor(row,column){
        this.Row = row;
        this.Column = column;
        this.Map = Array.from(Array(row), ()=> Array(column).fill(0));
        this.div_app = document.getElementById("app");        
    }
    addblock(x,y,block){
        block.setactive(true);
        block.setcoord(x,y);
        this.Map[x][y] = block;
        this.div_app.appendChild(block.div_element)
    }
    addrandomblock(block){
        block.setactive(true);
        block.setcoord(x,y);
        this.Map[x][y] = block;
        this.div_app.appendChild(block.div_element)
    }
    removeblock(x,y){
        block.setactive(false);
        this.Map[x][y] = null;
    }
    moveleft(){
        
    }
    moveright(){

    }
    moveup(block){
        for(var i=1;i<4;i++){
            for(var j=0;j<4;j++){
                var tempY = i-1;
                while(tempY>0 && this.Map[tempY][j]==0) tempY--;
                if(this.Map[tempY][j]==0){
                    this.Map[tempY][j] = this.Map[i][j];
                    this.Map[i][j] = 0;
                    this.XPos = j*150;
                    this.YPos = i*150;
                }
                else if(this.Map[tempY][j]!=this.Map[i][j]){
                    if(tempY+1==i) continue;
                    this.Map[tempY+1][j]=this.Map[i][j];
                    this.Map[i][j]=0;
                }
                else{
                    if(isPlused[tempY][j]==0){
                        this.Map[tempY][j]*=2;
                        this.Map[i][j]=0;
                    }
                    else{
                        this.Map[tempY+1][j]=this.Map[i][j];
                        this.Map[i][j]=0;
                    }
                }
            }
        }
    }
    movedown(){

    } 

    draw(){
        for(let i=0;i<this.Row;i++)
            for(let j=0;j<this.Column;j++)
        
        this.Map[x][y]
    }
}

class Block{
    constructor(value){
        this.Value = value;
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
        this.div_element = document.createElement("div");
        this.div_element.setAttribute("class","blockPrefab")
        this.div_element.appendChild(document.createTextNode("2"));
    }
    changevalue(value){
        this.Value = value;
    }
    setactive(isActivated){
        this.Active = isActivated;        
    }
    setcoord(x,y){
        this.XPos += 150*x;
        this.YPos += 150*y;
        this.div_element.style.left = this.XPos;
        this.div_element.style.top = this.YPos;
    }
    removeblock(){
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
    }

}
/*
function keyArrowRight(){
    console.log("Right Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        console.log(blocks[i].style.left);
        blocks[i].style.left += 170;                           
    }
}

function keyArrowLeft(){
    console.log("Left Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.left -= 170;        
    }
}
function keyArrowUp(){
    console.log("Up Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top -= 170;        
    }
}
function keyArrowDown(){
    console.log("Down Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top += 170;        
    }
}*/

var blockmap = new BlockMap(4,4);

function gameStart(){    
    blockmap.addblock(Math.floor(Math.random() * 4),Math.floor(Math.random() * 4),new Block(2));
}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':
            gameStart();
            break;
        case 'ArrowRight':
            blockmap.moveright();
            break;
        case 'ArrowLeft':
            blockmap.moveleft();
            break;
        case 'ArrowUp':
            blockmap.moveup();
            break;
        case 'ArrowDown':
            blockmap.movedown();
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;


