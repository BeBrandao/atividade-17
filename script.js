var andar = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png"
];

var contador = 0;
var valor = 0;
var direcao = 1;

function moveRight(){
    var img = document.querySelector("#imagem");
    img.classList.remove("flip-image");
    
    if (direcao === -1){
        direcao = direcao * -1
    }


    valor = valor + 15 * direcao;
    contador = contador + 1;

    img.src = andar[contador % 3];
    img.style.left = valor + "px";

}

function moveLeft(){
    var img = document.querySelector("#imagem");
    img.classList.add("flip-image");
    
    if (direcao === 1){
        direcao = direcao * -1
    }
    

    valor = valor + 15 * direcao;
    contador = contador + 1;

    img.src = andar[contador % 3];
    img.style.left = valor + "px";

}

function jump(){
    var img = document.querySelector("#imagem");
    img.style.top = 40 + "%"
    setTimeout(() => {
        img.style.top = "65%";
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
