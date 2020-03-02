function mostrar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var nascimento = document.getElementById ("nascimento").value
      
    var ano = nascimento.substring(0,4)
    var mes = nascimento.substring(5,7)
    var dia = nascimento.substring(8,10)
    

    var estado = document.getElementById ("Estados").value
    var senha = document.getElementById ("Senha").value
    var sexo = document.querySelector("input[name='sexo']:checked").value
    var almoco = document.getElementById("almoco").checked
    if (almoco==true)
    {
        almoco="sim"
    }
    else{almoco="não"}

    var VT = document.getElementById("VT").checked
    
    if (VT==true){
        VT="sim"
    }
    else{
        VT="não"
    }
    
    alert ("Nome: " + nome + "\nIdade: " + idade + "\nData de nascimento: " + dia + "/" + mes + "/" + ano + "\nEstado: " + estado + "\nSexo: " + sexo + "\nAlmoço: " + almoco + "\nVT: " + VT)
}