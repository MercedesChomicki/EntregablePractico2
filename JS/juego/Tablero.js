class Tablero{
    constructor(img, filas, cols, ctx, canvasW){
        this.img = img;
        this.filas = filas;
        this.cols = cols;
        this.ctx = ctx;
        this.wT = 525;
        this.hT = 450;
        this.padding = 10;
        this.canvasW = canvasW;
        this.posX_inicial = (this.canvasW - this.wT)/2; //337.5
        this.posX_final = this.posX_inicial + this.wT;
        this.posY_inicial = 115;
        this.posY_final= this.posY_inicial + this.hT;
        this.squares = new Array();
        this.lado = this.wT/this.cols;
        this.radius = (this.lado - this.padding) / 2;
    }

    drawBoard(){
        for(let i=0; i < cols; i++){
            for(let j=0; j<filas; j++){
                let x = (i * this.lado) + this.posX_inicial;
                let y= (j * this.lado) + this.posY_inicial;
                let square = new Rect(x, y, this.lado, this.lado, this.ctx, this.img, this.padding, this.radius);
                this.squares.push(square);
                square.draw();
            }
        }
    }

    isOnTheBoard(x, y){
        if(x > this.posX_inicial && x < this.posX_final && y < this.posY_inicial){
            return true;
        } else {
            return false;
        }
    }

    isInsideTheBoard(x, y){
        if(x > this.posX_inicial && x < this.posX_final && y > this.posY_inicial){
            return true;
        } else {
            return false;
        }
    }

    getRadius(){
        return this.radius;
    }

    getPosXInicial(){
        return this.posX_inicial;
    }

    getPosXFinal(){
        return this.posX_final;
    }

    getPosYInicial(){
        return this.posY_inicial;
    }

    getPosYFinal(){
        return this.posY_final;
    }

    getLado(){
        return this.lado;
    }

    getPadding(){
        return this.padding;
    }

    getSquares(){
        return new Array(this.squares);
    }

}