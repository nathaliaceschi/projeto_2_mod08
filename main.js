const form = document.getElementById('form-contato')
let nomeContato = document.getElementById('nome-contato')
let telContato = document.getElementById('telnumber')
let formEvalido = false
let listaNome = [ ]
let listaNumero = [ ]

function validaNomeCompleto(nome){
    nomeComoArray = nome.trim().split(' ')
    return nomeComoArray.length>=2
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    formEvalido = validaNomeCompleto(nomeContato.value) && !(listaNome.includes(nomeContato.value)) && !(listaNumero.includes(telContato.value))

    if(formEvalido){
        adicionaLinha()
    }else if(!validaNomeCompleto(nomeContato.value)){
        alert("Nome não está completo. Por favor, digite pelo menos um sobrenome.")
    }else{
        alert("Nome/Número já cadastrado.")
    }

})

function adicionaLinha(){
    listaNome.push(nomeContato.value)
    listaNumero.push(telContato.value)

    const tabela = document.querySelector('tbody')

    let tr = document.createElement('tr')
    let nomeTd = document.createElement('td')
    let telTd = document.createElement('td')

    nomeTd.textContent = nomeContato.value
    telTd.textContent = telContato.value.replace(/\D/g, '')

    tr.appendChild(nomeTd)
    tr.appendChild(telTd)
    tabela.appendChild(tr)   

    nomeContato.value = ''
    telContato.value = ''
    nomeContato.focus()
}

