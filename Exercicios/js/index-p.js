function buttonAlerta(){
    alert("Olá")
    
}
function buttonConfirm(){
    confirm("E aí, tudo bem?")
}
function buttonPrompt(){
    var frase = prompt("Manifeste sua satisfação com a fantasia do presidente vampiro: ") 
    alert (frase)

}
function BotaoTrocaNome(){
    var frase = prompt("Digite um nome: ")  
    botaoTrocaNome.textContent = "Olá, " + frase +", como vai?"
}
function criaTextArea(){
    var elementoPai = document.getElementById("elementoPai")
    var elementoFilho = document.createElement("textarea")
    elementoPai.appendChild(elementoFilho)
}