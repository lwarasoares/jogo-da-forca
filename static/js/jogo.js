let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;

function normalizeString(str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function iniciarjogo() {
    const indicesAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indicesAleatorio];
    dicaAtual = dicas[indicesAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    atualizarDisplayDojogo();
    limparBoneco()
}

function limparBoneco(){
    const forca = document.getElementById("forca");
    forca.innerHTML = "";
}

function atualizarDisplayDojogo() {
    let palavrasExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = normalizeString(palavraAtual[i]);
        if (letrasAdivinhadas.indexOf(letra) !== -1 || letra === " ") {
            palavrasExibida += letra;  // Mostrar letra adivinhada ou espaço
        } else {
            palavrasExibida += "_"; // Mostrar um underline para letras não adivinhadas
        }
    }
    document.getElementById("palavra").textContent = palavrasExibida;
    document.getElementById("dica").textContent = `dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `tentativas restantes: ${tentativasRestantes}`;
}
``
function adivinharLetras() {
    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = normalizeString(entradaAdivinhacao.value);
    if (letraAdivinhada.length === 1 && /^[a-záéíóúãõç\s]+$/.test(letraAdivinhada)) {
        if (letrasAdivinhadas.lastIndexOf(letraAdivinhada) === -1) {
            letrasAdivinhadas.push(letraAdivinhada);
            let letrasNaoEncobtrada = true;
            if (palavraAtual.indexOf(letraAdivinhada) === -1) {
                tentativasRestantes--;
            }
            atualizarDisplayDojogo();
            desenharBoneco();

            let palavracompleta = true;
            for (let i = 0; i < palavraAtual.length; i++) {
                if (letrasAdivinhadas.indexOf(normalizeString(palavraAtual[i])) === -1 && palavraAtual[i] !== " ") {
                    palavracompleta = false;
                    break;
                }
            }

            if (palavracompleta) {
                document.getElementById("status").textContent = "voce venceu!";
            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `voce perdeu! A palavra era: ${palavraAtual}`;
            }
        }
    }
    entradaAdivinhacao.value = "";
}

document.addEventListener("DOMContentLoaded", iniciarjogo);