const form = document.getElementById("contatos")
const nomes = []
const tel = []
let res = document.getElementById('anuncio')

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaAgenda()

})

function adicionaLinha(){
    const inputNome = document.getElementById('name')
    const inputTel = document.getElementById('telefone')

    if (tel.includes(inputTel.value)){
        alert(`Esse número pertence a alguém já incluído na agenda!`)
    } else {
        nomes.push(inputNome.value)
        tel.push(inputTel.value)

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTel.value}</td>`
        linha += '<tr>'

        linhas += linha

    }

    inputNome.value = ''
    inputTel.value = ''
    inputNome.focus()

    let tot = nomes.length

    if (nomes.length == 1){
    res.innerHTML = `Você possui ${tot} contato na agenda.`
    } else{
        res.innerHTML = `Você possui ${tot} contatos na agenda.`
    }

}

function atualizaAgenda(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}