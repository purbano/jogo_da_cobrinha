let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Renderiza o desenho do canvas
let box = 32; //definição dos pixels
let snake =[]
snake[0] = {
    x: 8*box,
    y: 8*box
}

//Setar direções da cobrinha
let direction = "right";

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

//Atribuindo funcionalidades aos botões de comando
document.addEventListener('keydown', update) //keydown → clicar no botão

function update (event){ //Direção dos comandos com uma condição de não voltar para o lado oposto
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){ 
    //Lógica para que a cobrinha ao ultrapassar o canvas apareça do outro lado
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0
    if(snake[0].x < 0*box && direction == "left") snake[0].x = 15
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0
    if(snake[0].y < 0*box && direction == "up") snake[0].y = 15

    criarBG();
    criarCobrinha();

    //posições iniciais da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Direções da cobrinha
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //Função para aumentar a cobrinha
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

        snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //a cada 100 ms renova o jogo
