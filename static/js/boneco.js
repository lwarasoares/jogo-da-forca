function desenharBoneco() {
    const forca = document.getElementById("forca");

    // Limpar o boneco antes de redesenhar
    forca.innerHTML = "";

    // Base da forca
    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "3px";
    palo.style.left = "93%";
    palo.style.transform = "translateX(-50%)";
    palo.style.width = "2px";
    palo.style.height = "100px";
    palo.style.backgroundColor = "#333";
    forca.appendChild(palo);

    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.top = "89px";
    travessa.style.left = "60%";
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "98px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "#333";
    forca.appendChild(travessa);

    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.top = "90px";
    travessaSuperior.style.left = "93%";
    travessaSuperior.style.transform = "translateX(-50%)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "60px";
    travessaSuperior.style.backgroundColor = "#333";
    forca.appendChild(travessaSuperior);

    // Adicionar a cabeça se restam 5 ou menos tentativas
    if (tentativasRestantes <= 5) {
        const cabeca = document.createElement("div");
        cabeca.style.position = "absolute";
        cabeca.style.bottom = "106px";
        cabeca.style.left = "56%";
        cabeca.style.transform = "translateX(-50%)";
        cabeca.style.width = "50px";
        cabeca.style.height = "50px";
        cabeca.style.border = "2px solid blue";
        cabeca.style.borderRadius = "50%";
        forca.appendChild(cabeca);
    }

    // Adiciona o corpo se restam 4 ou menos tentativas
    if (tentativasRestantes <= 4) {
        const corpo = document.createElement("div");
        corpo.style.position = "absolute";
        corpo.style.bottom = "47px";
        corpo.style.left = "56%";
        corpo.style.transform = "translateX(-50%)";
        corpo.style.width = "2px";
        corpo.style.height = "60px";
        corpo.style.backgroundColor = "blue";
        forca.appendChild(corpo);
    }

    // Adiciona os braços se restam 3 ou menos tentativas
    if (tentativasRestantes <= 3) {
        // Braço esquerdo
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.bottom = "83px";
        bracoEsquerdo.style.left = "42%"; // Ajustado
        bracoEsquerdo.style.transform = "translateX(-50%) rotate(-45deg)";
        bracoEsquerdo.style.width = "60px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "blue";
        forca.appendChild(bracoEsquerdo);
    }

    if (tentativasRestantes <= 2) {
        // Braço direito
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.bottom = "83px";
        bracoDireito.style.left = "90%"; // Ajustado
        bracoDireito.style.transform = "translateX(-100%) rotate(45deg)";
        bracoDireito.style.width = "60px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "blue";
        forca.appendChild(bracoDireito);
    }

    // Adiciona as pernas se restam 1 ou menos tentativas
    if (tentativasRestantes <= 1) {
        // Perna esquerda
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.top = "224px"; // Ajustado para melhor alinhamento
        pernaEsquerda.style.left = "70%"; // Ajustado
        pernaEsquerda.style.transform = "translateX(-50%) rotate(45deg)";
        pernaEsquerda.style.width = "60px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "blue";
        forca.appendChild(pernaEsquerda);
    }

    if (tentativasRestantes <= 0) {
        // Perna direita
        const pernaDireita = document.createElement("div");
        pernaDireita.style.position = "absolute";
        pernaDireita.style.top = "223px"; // Ajustado
        pernaDireita.style.left = "42%"; // Ajustado
        pernaDireita.style.transform = "translateX(-50%) rotate(-45deg)";
        pernaDireita.style.width = "60px";
        pernaDireita.style.height = "2px";
        pernaDireita.style.backgroundColor = "blue";
        forca.appendChild(pernaDireita);
    }
}
