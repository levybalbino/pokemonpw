let aparicao = 0
const cartoes = document.querySelector(".cartoes")
cartoes.style.display = "none"
const imgCartao = cartoes.querySelector("img")
let indice = 0
let i = 0
const srcCartoes = ["cartao1.jpeg", "cartao2.jpeg", "cartao3.jpeg", "cartao4.jpeg"]
const altCartoes = ["1-3-5-7-9-11-13-15", "2-3-6-7-10-11-14-15", "4-5-6-7-12-13-14-15", "8-9-10-11-12-13-14-15"]
const respostas = ["", "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg"]
let resposta = 0
const botao = document.querySelector("#botao")
const NEsta = document.querySelector("#n-esta")
const Esta = document.querySelector("#esta")
function nEsta(){
    aparicao = 0
    NEsta.style.backgroundColor = "#c7cdd3"
    Esta.style.backgroundColor = "aliceblue"
}
function esta(){
    aparicao = 1
    Esta.style.backgroundColor = "#c7cdd3"
    NEsta.style.backgroundColor = "aliceblue"
}
function avancar(){
    if(indice == 5){
        location.reload()
    } else {
        if(aparicao != -1){
            if(indice == 0){
                botao.innerHTML = "avançar"
                cartoes.style.display = "block"
                imgCartao.src = "imgs/" + srcCartoes[i]
                imgCartao.alt = altCartoes[i]
            } else {
                resposta += 2**i*aparicao
                i++
                imgCartao.src = "imgs/" + srcCartoes[i]
                imgCartao.alt = altCartoes[i]
                if(i == 3){
                    botao.innerHTML = "adivinhar"
                } else if(indice == 4){
                    imgCartao.src = "imgs/" + respostas[resposta]
                    NEsta.style.display = "none"
                    Esta.style.display = "none"
                    botao.innerHTML = "recomeçar"
                }
            }
            indice++
            aparicao = -1
            NEsta.style.backgroundColor = "aliceblue"
            Esta.style.backgroundColor = "aliceblue"
        } else {
            alert("Precisa indicar se o pokémon aparece ou não no cartão antes de avançar.")
        }
    }
}