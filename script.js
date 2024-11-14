var andar = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png",
    "urso-4.png",
    "urso-5.png",
    "urso-6.png"
];

var contador = 0;
var valor = 0;
var direcao = 1;

function moveRight(){
    var img = document.querySelector("#imagem");
    
    if (direcao === -1){
        direcao = direcao * -1
    }
    
    var indiceImagem = direcao === 1 ? contador % 3 : (contador % 3) + 3;

    valor = valor + 15 * direcao;
    contador = contador + 1 * direcao;

    img.src = andar[indiceImagem];
    img.style.left = valor + "px";

    if (contador === 100) {
        img.style.left = 0;
    }
}

function moveLeft(){
    var img = document.querySelector("#imagem");
    
    if (direcao === 1){
        direcao = direcao * -1
    }
    
    var indiceImagem = direcao === 1 ? contador % 3 : (contador % 3) + 3;

    valor = valor + 15 * direcao;
    contador = contador + 1 * direcao;

    img.src = andar[indiceImagem];
    img.style.left = valor + "px";

    if (contador === -1) {
        img.style.left = 100 + "px";
    }
}

function jump(){
    var img = document.querySelector("#imagem");
    img.style.top = 40 + "%"
    setTimeout(() => {
        img.style.top = "62.5%";
    }, 350);
}

function move(event){
    if(event.key == 'd'){
        moveRight();
    } else if(event.key == 'a'){
        moveLeft();
    }
    else if (event.key == 'w'){
        jump();
    }
}

window.addEventListener('keydown', move);
