const imgs = ["", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15"]
//nome das imagens NA POSIÇÃO EM QUE APARECEM NO CARTÃO PRINCIPAL
const cartoes = document.querySelectorAll(".cartao")    //obtem os elementos cartões
const cartaoResp = document.querySelectorAll(".resp")   //obtem os elementos cartões com input radio
cartoes.forEach(cartao => {
    cartao.style.display = "none"   //esconde todos os cartões
})
cartoes[0].style.display = "block"  //exibe o primeiro cartão

function avancar(){
    for(i = 0; i < cartoes.length; i++){
        if(cartoes[i].style.display == "block"){    //executa o bloco quando chegar no cartão que está sendo exibido
            if(i < cartoes.length-2) {  //evita que esconda o última cartão (o cartão resposta)
                if(i > 0) {
                    resp = guardarResp(i-1)
                } else {
                    cartoes[i].style.display = "none"   //esconde o cartão atual
                    cartoes[i+1].style.display = "block"    //exibe o cartão seguinte
                    break
                }
                if(resp) {
                    cartoes[i].style.display = "none"   //esconde o cartão atual
                    cartoes[i+1].style.display = "block"    //exibe o cartão seguinte
                }
                break
            } else if(i == cartoes.length-2) {  //evita que esconda o último cartão (o cartão resposta)
                cartoes[i].style.display = "none"
                cartoes[i+1].style.display = "block"    
                document.querySelector("#avancar").style.display = "none"   //esconde o botao "avançar"
                if(i > 0) guardarResp(i-1)
            }
        }
    }
}

function guardarResp(i){
    const resp = cartaoResp[i].querySelectorAll('input[name="aparicao"]')
    for(j = 0; j < 2; j++) {
        if(resp[j].checked) return resp[j].value
    }
    alert("Selecione um campo antes de seguir")
    return false
}