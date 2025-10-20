var numerosSecreto = Math.floor(Math.random()*100)+1;
var tentativas = 0;

function verificar(){
    const input = document.getElementById("inputNumero")
    var mensagem = document.getElementById("mensagem")
    const valor = parseInt(input.value)

    if(isNaN(valor)|| valor<1 || valor>100){
        mensagem.textContent = "Por favor insira um número entre 1 e 100";
        return;
    }

    tentativas++;
    document.getElementById("tentativas").textContent = tentativas

    if(valor === numerosSecreto){
        mensagem.textContent = `Parabens! Voce acertou o numero secreto com ${tentativas} tentativas`
        mensagem.style.color = "green"
    }
    else if(valor < numerosSecreto){
        mensagem.textContent = "Digite um numero maior"
        mensagem.style.color = "red"
    }
    else{
        mensagem.textContent = "Digite um numero menor"
        mensagem.style.color = "red"
    }

    input.value = "";
    input.focus()
}