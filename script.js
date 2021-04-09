let arr = [
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ']
]

//ruivo eh viado

const posisoes = (evento) => {
    let colunas = evento.currentTarget
    let coluna = 0
    let quantidade = colunas.childElementCount
    if (colunas.id === 'coluna1') {
        coluna = 1
    }
    if (colunas.id === 'coluna2') {
        coluna = 2
    }
    if (colunas.id === 'coluna3') {
        coluna = 3
    }
    if (colunas.id === 'coluna4') {
        coluna = 4
    }
    if (colunas.id === 'coluna5') {
        coluna = 5
    }
    if (colunas.id === 'coluna6') {
        coluna = 6
    }
    if (colunas.id === 'coluna7') {
        coluna = 7
    }
    
    
    let posicao = [coluna - 1, quantidade - 1]
    
    return posicao
}
const vitoriaVertical = () => {
    let vencedor = ''
    for (let i = 0; i < arr.length; i++) {
        let frequencia = arr[i].join('')
        if (frequencia.indexOf('aaaa') !== -1) {
            vencedor = 'player1'
        }
        if (frequencia.indexOf('bbbb') !== -1) {
            vencedor = 'player2'
        }
        
    }
    if (vencedor !== '') {
        return vencedor
    }
}
const tabuleiro = document.createElement('div')
tabuleiro.classList.add('tabuleiro')
const vitoriaHorizontal = (posisoes) => {
    let posisao = posisoes[1]
    let vencedor = ''
    let parametro = ''
    for (let i = 0; i < arr.length; i++) {
        parametro += arr[i][posisao]
        if (parametro.indexOf('aaaa') !== -1) {
            vencedor = 'player1'
        }
        if (parametro.indexOf('bbbb') !== -1) {
            vencedor = 'player2'
        }
    }
    if (vencedor !== '') {
        return vencedor
    }
}
let mensagemVitoria = document.getElementById('mensagemVitoria')
let verificacaoVitoria = false
tabuleiro.appendChild(mensagemVitoria)

let empate = false


const mensagemDeVitoria = (vertical, horizontal, diagonalDecresente, diagonalCresente) => {
    console.log('mdv')
    if (empate === true) {
    mensagemVitoria.innerText = 'EMPATE'
    mensagemVitoria.classList.remove('none')
    mensagemVitoria.classList.add('empate')
    criaBotaoReset()
    }
    if (vertical === 'player2' || horizontal === 'player2' || diagonalCresente === 'player2' || diagonalDecresente === 'player2') {
        mensagemVitoria.innerText = 'PLAYER 2 WINS'
        mensagemVitoria.classList.remove('none')
        mensagemVitoria.classList.add('vitoria1')
        verificacaoVitoria = true
        console.log('mdv P2')
        criaBotaoReset()
        pont2()
    }
    if (vertical === 'player1' || horizontal === 'player1' || diagonalCresente === 'player1' || diagonalDecresente === 'player1') {
        mensagemVitoria.innerText = 'PLAYER 1 WINS'
        mensagemVitoria.classList.remove('none')
        mensagemVitoria.classList.add('vitoria2')
        verificacaoVitoria = true
        console.log('mdv P1')
        criaBotaoReset()
        pont1()
    }
}

const vitoriaDiagonalCrecente = (posisoes) => {
    let iC = posisoes[0]
    let iL = posisoes[1]

    // console.log(posisao)
    let vencedor = ''
    let parametro = ''
    // console.log(parametro)
    //console.log(iC)
    //console.log(iL)

    for (let i = 0; i < arr.length; i++) {
        //console.log('ui1')
        if (arr[i][0] !== ' ') {

            for (let u = 0; u < arr[i].length; u++) {
                //console.log('ui2')
                if (arr[i][u] !== ' ') {
                    //console.log('ui3')
                    if (arr[i + 1] !== undefined &&
                        arr[i + 2] !== undefined &&
                        arr[i + 3] !== undefined
                    ) {

                        //console.log('ui4')
                        if (arr[i + 1][u + 1] !== ' ' &&
                            arr[i + 2][u + 2] !== ' ' &&
                            arr[i + 3][u + 3] !== ' ') {
                            if (
                                arr[i][u] === arr[i + 1][u + 1] &&
                                arr[i][u] === arr[i + 2][u + 2] &&
                                arr[i][u] === arr[i + 3][u + 3]
                            ) {
                                //console.log('ui5')
                                //console.log(arr[i][u])
                                if (arr[i][u] === 'a') {
                                    vencedor = 'player1'
                                    // console.log(vencedor)
                                }
                                if (arr[i][u] === 'b') {
                                    vencedor = 'player2'
                                    //console.log(vencedor)
                                }
                                if (vencedor !== '') {

                                    console.log(vencedor + ' DC')
                                    return vencedor
                                }
                            }
                        }

                    }
                }
            }
        }
    }

}

const vitoriaDiagonalDegrecente = (posisoes) => {
    let posisao = posisoes[1]
    // console.log(posisao)
    let vencedor = ''
    let parametro = ''
    for (let i = 6; i >= 0; i--) {
        //console.log('oi1')
        if (arr[i][0] !== ' ') {

            for (let u = 0; u < arr[i].length; u++) {
                //console.log('oi2')
                //console.log(arr[i][u])
                if (arr[i][u] !== ' ') {
                    //console.log('oi3')
                    //console.log(arr[i][u])

                    if (
                        arr[i - 1] !== undefined &&
                        arr[i - 2] !== undefined &&
                        arr[i - 3] !== undefined
                    ) {
                        if (arr[i][u] === arr[i - 1][u + 1] &&
                            arr[i][u] === arr[i - 2][u + 2] &&
                            arr[i][u] === arr[i - 3][u + 3]) {
                            //console.log('oi4')
                            if (arr[i][u] === 'a') {
                                vencedor = 'player1'
                                //console.log(vencedor)
                            }
                            if (arr[i][u] === 'b') {
                                vencedor = 'player2'
                                //console.log(vencedor)
                            }
                        }

                    }
                    if (vencedor !== '') {
                        //console.log('oi5')
                        console.log(vencedor + 'DD')
                        return vencedor
                    }
                }
            }
        }
    }
}

const empat = () => {
    let colunasCheias = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(' ') === -1) {
            colunasCheias++
            
        }
    }
    console.log(colunasCheias)
    
    if (colunasCheias === 7) {
        console.log('empate')
        // mensagemVitoria.innerText = 'EMPATE'
        // mensagemVitoria.className = 'empate'
        // criaBotaoReset()
        return empate = true
    }
}

const controleDeVitoria = (evento, disco) => {
    let posisao = posisoes(evento)
    let pCl = posisao[0]
    let pDc = posisao[1]
    //console.log(posisao)
    if (disco.className === "discoPlayer1") {
        arr[pCl][pDc] = 'a'

    } else {
        arr[pCl][pDc] = 'b'
    }

    //==????===

    //console.log(arr)
    //console.log(arr[pCl][pDc])
    let vitoriaEmVertical = vitoriaVertical()
    let vitoriaEmHorizontal = vitoriaHorizontal(posisao)
    let vitoriaEmDiagonalCrecente = vitoriaDiagonalCrecente(posisao)
    let vitoriaEmDiagonalDegrecente = vitoriaDiagonalDegrecente(posisao)
    
    //
    //console.log(empate)
    console.log(vitoriaEmVertical)
    console.log(vitoriaEmHorizontal)
    // console.log(vitoriaEmDiagonalCrecente)
    // console.log(vitoriaEmDiagonalDegrecente)

    empat()

    mensagemDeVitoria(vitoriaEmHorizontal, vitoriaEmVertical , vitoriaEmDiagonalDegrecente, vitoriaEmDiagonalCrecente)

    //==????===

}
let contagem
let valor = false
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let vezPlayer1 = true
player1.classList.add('jogadorOn')
player2.classList.add('jogadorOff')


function cliquePlayer1(e) {

    if (vezPlayer1 == true) {
        player1.classList.remove('jogadorOn')
        player1.classList.add('jogadorOff')
        player2.classList.remove('jogadorOff')
        player2.classList.add('jogadorOn')
    }

    if (valor == false) {
        contagem = e.currentTarget.childElementCount;
        if (contagem < 6) {
            let coluna = e.currentTarget
            let discoPlayer1 = document.createElement('div')
            discoPlayer1.classList = "discoPlayer1"
            coluna.appendChild(discoPlayer1)
            valor = true
            controleDeVitoria(e, discoPlayer1)
            vezPlayer1 = false


        }
    } else {
        cliquePlayer2(e)
    }
    verificaVit()
}

function cliquePlayer2(u) {

    if (vezPlayer1 == false) {
        player1.classList.remove('jogadorOff')
        player1.classList.add('jogadorOn')
        player2.classList.remove('jogadorOn')
        player2.classList.add('jogadorOff')
    }
    if (valor == true) {
        contagem = u.currentTarget.childElementCount
        if (contagem < 6) {
            let coluna = u.currentTarget
            let discoPlayer2 = document.createElement('div')
            discoPlayer2.classList = "discoPlayer2"
            coluna.appendChild(discoPlayer2)
            valor = false
            controleDeVitoria(u, discoPlayer2)
            vezPlayer1 = true


        }
    }
    verificaVit()
}
// const tabuleiro = document.createElement('div')
// tabuleiro.classList.add('tabuleiro')
function criarTabuleiro() {
    for (let i = 0; i < 7; i++) {
        let divColuna = document.createElement('div')
        divColuna.classList.add('coluna')
        divColuna.id = `coluna${i+1}`
        tabuleiro.appendChild(divColuna)
    }
}
criarTabuleiro()
document.body.appendChild(tabuleiro)

document.querySelector('#coluna1').addEventListener('click', cliquePlayer1)
document.querySelector('#coluna2').addEventListener('click', cliquePlayer1)
document.querySelector('#coluna3').addEventListener('click', cliquePlayer1)
document.querySelector('#coluna4').addEventListener('click', cliquePlayer1)
document.querySelector('#coluna5').addEventListener('click', cliquePlayer1)
document.querySelector('#coluna6').addEventListener('click', cliquePlayer1)
document.querySelector('#coluna7').addEventListener('click', cliquePlayer1)


function verificaVit() {
    if (verificacaoVitoria === true) {
        document.querySelector('#coluna1').removeEventListener('click', cliquePlayer1)
        document.querySelector('#coluna2').removeEventListener('click', cliquePlayer1)
        document.querySelector('#coluna3').removeEventListener('click', cliquePlayer1)
        document.querySelector('#coluna4').removeEventListener('click', cliquePlayer1)
        document.querySelector('#coluna5').removeEventListener('click', cliquePlayer1)
        document.querySelector('#coluna6').removeEventListener('click', cliquePlayer1)
        document.querySelector('#coluna7').removeEventListener('click', cliquePlayer1)
    }

}

//criacao do botao reset
let botao = document.createElement('button')
botao.addEventListener('click', botaoReset)
botao.type = "button"
botao.innerText = 'RESET'
botao.className = "botao"
botao.style.display = "none"
let placar = document.getElementsByClassName('placar')
placar[0].appendChild(botao)

function criaBotaoReset() {
    botao.style.display = "inherit"
}

//funcao do botao reset
function botaoReset() {
    document.querySelector('#coluna1').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna2').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna3').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna4').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna5').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna6').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna7').addEventListener('click', cliquePlayer1)
    document.querySelector('#coluna1').innerHTML = ""
    document.querySelector('#coluna2').innerHTML = ""
    document.querySelector('#coluna3').innerHTML = ""
    document.querySelector('#coluna4').innerHTML = ""
    document.querySelector('#coluna5').innerHTML = ""
    document.querySelector('#coluna6').innerHTML = ""
    document.querySelector('#coluna7').innerHTML = ""
    empate = false
    mensagemVitoria.className = 'none'
    player1.classList.remove('jogadorOff')
    player1.classList.add('jogadorOn')
    player2.classList.remove('jogadorOn')
    player2.classList.add('jogadorOff')
    vezPlayer1 = true
    valor = false
    verificacaoVitoria = false
    botao.style.display = "none"
    arr = [
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ']
    ]
}



//acrescentar pontos no placar
let pontuacao1 = document.getElementById("pontuacao1")
let pontuacao2 = document.getElementById("pontuacao2")
let pontos1 = 0
let pontos2 = 0

function pont1() {

    if (verificacaoVitoria === true) {
        pontos1++
    }
    pontuacao1.innerText = pontos1
}

function pont2() {

    if (verificacaoVitoria === true) {
        pontos2++
    }
    pontuacao2.innerText = pontos2
}