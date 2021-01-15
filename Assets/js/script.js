
/*
Case Sensitive = linguagem que reconhece letras maiúsculas e minúsculas
PODE TBM SER ACESSADO POR 

TAG: getElementByTagName()
ID: getElementById(#id)
NOME: getElementsByName()                    Ex: getElementsByTecla()
Classe: getElementsByClassName(.nome)             Obs:Varios elementos
Seletor: querySelector()
*/

let nome = window.document.getElementById("nome") /* poder ser aspas duplas ou simples*/
let email = document.querySelector('#email')/* outro jeito de fazer, poderia ser do mesmo jeito de cima*/ /*se fosse uma classe, era só colocar .email*/ /*input#email ou input.email*/
let assunto = document.querySelector ("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'


function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = '✔' /*OU NOME VÁLIDO*/
        txtNome.style.color = 'green'
        let nomeOk = true

    }
} 

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
       txtEmail.innerHTML = 'E-mail Inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = '✔' /*OU E-MAIL VÁLIDO*/
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }

 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto') 

    if (assunto.value.length >= 101){
        txtAssunto.innerHTML = 'digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.innerHTML = '✔' /*OU ASSUNTO VÁLIDO*/
        txtAssunto.style.color = 'green' /* OU txtAssunto.style.display = 'block' PARA NÃO APARECER NADA*/
        let assuntoOk = true
    }
 }
 
 function enviar() {
   if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert ('Formulário enviado')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}

function mapaZoom() {
   mapa.style.width = "800px"
   mapa.style.height = "600px"
}

function mapaNormal() {
   mapa.style.width = "400px"
   mapa.style.height = "250px"

}