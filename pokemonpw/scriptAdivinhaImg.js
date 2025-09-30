let aparicao = 0
const cartoes = document.querySelector(".cartoes")
cartoes.style.display = "none"
const imgCartao = cartoes.querySelector("img")
let indice = 0
let i = 0
const srcCartoes = ["cartao1.jpeg", "cartao2.jpeg", "cartao3.jpeg", "cartao4.jpeg"]
const respostas = ["pokemon_zero.png", "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg"]
let resposta = 0
const botao = document.querySelector("#botao")
const NEsta = document.querySelector("#n-esta")
const Esta = document.querySelector("#esta")
function nEsta(){
    aparicao = 0
    NEsta.style.backgroundColor = "#056e4d"
    Esta.style.backgroundColor = "#059669"
}
function esta(){
    aparicao = 1
    Esta.style.backgroundColor = "#056e4d"
    NEsta.style.backgroundColor = "#059669"
}
function Avancar(){
    if(indice == 5){
        location.reload()
    } else {
        if(aparicao != -1){
            if(indice == 0){
                botao.innerHTML = "Avançar"
                cartoes.style.display = "block"
                imgCartao.src = "imgs/" + srcCartoes[i]
            } else {
                resposta += 2**i*aparicao
                i++
                imgCartao.src = "imgs/" + srcCartoes[i]
                if(i == 3){
                    botao.innerHTML = "Adivinhar"
                } else if(indice == 4){
                    if (resposta === 0) {
                        document.querySelector("#msg").innerHTML = "Pokémon não encontrado.";
                        imgCartao.src = "imgs/pokemon_zero.png";
                        imgCartao.alt = "Pokémon não encontrado";
                        } else {
                        document.querySelector("#msg").innerHTML = "Seu pokémon é:";
                        imgCartao.src = "imgs/" + respostas[resposta];
                        imgCartao.alt = respostas[resposta];
                        }
                        NEsta.style.display = "none";
                        Esta.style.display = "none";
                        botao.innerHTML = "Recomeçar";

                }
            }
            indice++
            aparicao = -1
            NEsta.style.backgroundColor = "#059669"
            Esta.style.backgroundColor = "#059669"
        } else {
            alert("Precisa indicar se o pokémon aparece ou não no cartão antes de avançar.")
        }
    }
}
function Menu() {
  window.location.href = "index.html";
}