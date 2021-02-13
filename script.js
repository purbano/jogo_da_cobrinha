let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Renderiza o desenho do canvas
let box = 32; //definição dos pixels
let snake =[]
snake[0] = {
    x: 8*box,
    y: 8*box
}

//Função inicial do Canvas
function criarBG(){
    context.fillStyle = "lightgreen"; //Estilo do canvas
    context.fillRect(0, 0, 16*box, 16*box); //Desenho do retângulo em que ocorrerá o jogo (x, y, altura e largura)
}

function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();