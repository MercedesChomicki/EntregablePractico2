class Juego{
    constructor(j1, j2, img1, img2, imgF, filas, cols, canvasWidth, canvasHeight, ctx){
        this.j1 = j1;
        this.j2 = j2;
        this.img1 = img1;
        this.img2 = img2;
        this.imgF = imgF;
        this.filas = filas;
        this.cols = cols;
        this.lastClickedFigure = null;
        this.isMouseDown = false;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.posYfigure1 = canvasHeight - 50; 
        this.posYfigure2 = canvasHeight - 50; 
        this.cantFig = (filas * cols)-1;
        this.ctx = ctx;
        this.tablero = new Tablero(this.imgF, this.filas, this.cols, this.ctx, this.canvasWidth);
        this.figures = new Array();
        this.radius = this.getRadius();
        this.padding = this.tablero.getPadding();
        this.xInicial = this.tablero.getPosXInicial();
        this.xFinal = this.tablero.getPosXFinal();
        this.yFinal = this.tablero.getPosYFinal() - this.radius - (this.padding/2);
        this.lado = this.tablero.getLado();
    }

    getRadius(){
        return this.tablero.getRadius();
    }


    drawGame(){
        this.drawBoard();
        this.addFigures();
    }

    drawBoard(){
        this.tablero.drawBoard();
    }

    addFigure(){
        this.addFigureJ1();
        this.addFigureJ2();
        this.drawFigure();
    }
    
    drawFigure(){
        this.clearCanvas();
        this.drawBoard();
        for(let i = 0; i < this.figures.length; i++){
            this.figures[i].draw();
        }
    }

    addFigureJ1(){
        let posX =  this.canvasWidth/8;
        let posY =  this.posYfigure1;
       
        let circle1 = new Circle(posX, posY, this.radius, this.ctx, this.img1);    
        this.figures.push(circle1);
        this.posYfigure1 -= 20; 
    }

    addFigureJ2(){
        let posX =  this.canvasWidth - (this.canvasWidth/8);
        let posY =  this.posYfigure2;
    
        let circle2 = new Circle(posX, posY, this.radius, this.ctx, this.img2);    
        this.figures.push(circle2);
        this.posYfigure2 -= 20; 
    }

    addFigures() {
        this.addFigure();
        if(this.figures.length < this.cantFig){
            setTimeout(this.addFigures(), 200);
        }
    }

    tirar(fig){ 
        //BUSCAR LA FORMA PARA QUE INGRESE EN LA COLUMNA CORRESPONDIENTE (QUE LA FICHA SE ENCUENTRE DENTRO DE UN RANGO EN X)
        //VERIFICAR QUE LA COLUMNA NO ESTÉ LLENA 
        //TIRAR LA FICHA EN UNA POS QUE ESTÉ DESOCUPADA
        //let x = 340 + 25 +5; //posX inicial del tablero + radius + padding/2
        // let x = 337.5 + this.radius + (this.paddingT/2);
        //let y =  490 + this.radius + (this.paddingT/2); //posY inicial del tablero + radius + padding/2

    
        while(this.xInicial < this.xFinal){
            if(fig.posX > this.xInicial && fig.posX < (this.xInicial + this.lado)){
                let x = this.xInicial + this.radius + (this.padding/2);
                if(this.findClickedFigure(x, this.yFinal) == null){
                    this.lastClickedFigure.setPos(x, this.yFinal);
                    this.isMouseDown = false;
                    this.drawFigure();
                    console.log("y: "+ this.yFinal);
                    this.yFinal -= this.lado;
                    console.log("x1 "+x, "y1: "+ this.yFinal);
                    return;
                } 
            }
            this.xInicial += this.lado;
        }

    }
    
    onMouseDown(e){
        let fig = this.findClickedFigure(e.layerX, e.layerY);
        if(this.tablero.isInsideTheBoard(fig.posX, fig.posY)){
            //SI LA FICHA SE ENCUENTRA DENTRO DE ESAS POSICIONES, BLOQUEARLA
        }
        this.isMouseDown = true;
        if(this.lastClickedFigure != null){
            this.lastClickedFigure.setHighlight(false);
            this.lastClickedFigure = null;
        }
        if(fig != null){
            fig.setHighlight(true);
            this.lastClickedFigure = fig;
        }
        this.drawFigure();
    }

    onMouseUp(e){
        this.isMouseDown = false;
        let fig = this.findClickedFigure(e.layerX, e.layerY);

        if(this.tablero.isOnTheBoard(fig.posX, fig.posY)){
            console.log("dentro del tablero");
            this.tirar(fig);
            //bloquear figura
        } else{
            //LA FIGURA VUELVE A LA POS INICIAL
        }
    }

    onMouseMove(e){
        if(this.isMouseDown && this.lastClickedFigure != null){
            this.lastClickedFigure.setPos(e.layerX - MARGIN_LEFT_CANVAS, e.layerY - MARGIN_TOP_CANVAS);
            this.drawFigure();
        }
    }

    clearCanvas(){
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    findClickedFigure(x, y){
        for(let i = 0; i < this.figures.length; i++){
            let element = this.figures[i];
            if(element.isPointInside(x, y)){
                console.log(element);
                return element;
            }
        }
    }
    
 
}