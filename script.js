let formulario = document.querySelector('form')

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxmedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

btnCalcular.addEventListener('click', function (event){
    //parseFloat comverte string para float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = ((nota1 + nota2) / 2).toFixed(1)

    cxmedia.value = media
    let calculo = situacaoFinal(media)
    media.textContent = calculo

    console.log(nota1)
    console.log(nota2)
    console.log(media)

    
    cxmedia.value = parseFloat(media)
    cxSituacao.value = situacaoFinal(media)
    formatarSituacao(situacaoFinal(media))
    
    event.preventDefault()
}) 

function situacaoFinal (final) {
    let situacaoFinal = ''

    if (final >= 7) {
        situacaoFinal = 'Aprovado(a)'
    } else {
        situacaoFinal = 'Reprovado(a)'
    }
    return situacaoFinal
}

function formatarSituacao(situacaoFinal) {
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break
        
        default:
            console.log('Situação Indefinida')
    } 

}

btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
})