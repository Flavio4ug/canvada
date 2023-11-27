// pega o Id canvas do html
let canvas = document.getElementById("canvas");
// pegamos o contexto do desenho , esse éo metodo que  retorma um desenho, usar o parametro 2dsignifica que o objeto que sera renderizado sera bidimensional
let contexto = canvas.getContext("2d")
// Variavel que vamos usar para indentificar se estamos desenhando
let desenhando = false;

canvas.addEventListener("mousedown", function (event) {
    // vamos usar i metidi addenventlistener para ouvir nosso mouse, ele ira identificar quando clicarmos
    desenhando = true
    contexto.beginPath();
    // a variavel contexto recebe o metodo beginpath(), esse metodo significa que um novo caminho sera criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    // nessa função vamos dizer como o contexto ira funcionar, o client ira fornecer cordenadas horizontais enquanto o canvas.offsetleft vai retornar a medida em pixel, a mesma coisa acontece com o y de forma vertical.
})

canvas.addEventListener("mousemove", function (event) {
    // essa funçao identifica quando movemos o mouse
    if (desenhando) {
        // esse if vai identificar se estamos clicando o mouse enquanto movemos o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        // ele vai identificar toda a linha que estamos tracando enquanto clicamos e  e movemos o mouse
        contexto.stroke();
        
    }
});

canvas.addEventListener("mouseup", function(event){

    desenhando = false;
})
// Array de cores para a paleta (você pode adicionar mais cores)
const cores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

// Obtém o elemento da paleta no HTML
let paleta = document.getElementById("paleta");

// Loop para criar elementos de cor e adicioná-los à paleta
for (let i = 0; i < cores.length; i++) {
    // Cria um elemento div para representar a cor
    let corElement = document.createElement("div");
    
    // Define a cor de fundo do elemento div com base no array de cores
    corElement.style.backgroundColor = cores[i];
    
    // Adiciona uma classe CSS para estilização opcional
    corElement.classList.add("cor-paleta");
    
    // Adiciona um ouvinte de eventos para quando uma cor é clicada
    corElement.addEventListener("click", function () {
        // Obtém a cor clicada
        let corSelecionada = cores[i];
        
        // Use a cor selecionada em sua lógica de desenho
        // Por exemplo, você pode definir a cor de traçado no contexto do canvas
        contexto.strokeStyle = corSelecionada;
    });
    
    // Adiciona o elemento de cor à paleta
    paleta.appendChild(corElement);
}