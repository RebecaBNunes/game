const button = document.querySelector('button');
const divError = document.querySelector('div.err');
const divResultado = document.querySelector('div.resultado');
const jogadasPossiveis = ['pedra', 'papel', 'tesoura'];

const defWinner = (jogadaUser) => {
    let jogadaConvertida = Number(jogadaUser);
    const jogadaPC = Math.floor(Math.random(1, 4) * (3) + 1);
    if (jogadaConvertida == jogadaPC) {
        divResultado.innerHTML = `<p>Empate 😐!</p> <p>Você escolheu ${jogadasPossiveis[jogadaConvertida - 1]} e o Computador tbm escolheu ${jogadasPossiveis[jogadaPC - 1]}</p>`;
    } else if (jogadaConvertida == 1 && jogadaPC == 3 || jogadaConvertida == 2 && jogadaPC == 1 || jogadaConvertida == 3 && jogadaPC == 2) {
        divResultado.innerHTML = `<p>Você venceu 🎉!</p> <p>Jogada Escolhida: Você - ${jogadasPossiveis[jogadaUser - 1]}; PC - ${jogadasPossiveis[jogadaPC - 1]}</p>`;
    } else {
        divResultado.innerHTML = `<p>Você perdeu 😕!</p> <p>Jogada Escolhida: Você - ${jogadasPossiveis[jogadaUser - 1]}; PC - ${jogadasPossiveis[jogadaPC - 1]}</p>`
    }
}

button.onclick = function () {
    divError.innerHTML = "";
    const jogadaSelecionada = document.querySelector("input[name='jogada']:checked");
    let jogada = 0;
    if (jogadaSelecionada) {
        jogada = jogadaSelecionada.value;
        defWinner(jogada);
    } else {
        document.querySelector('div.err').innerHTML += `<p>*É necessário selecionar uma jogada!!!</p>`
    }
};
