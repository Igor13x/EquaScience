function calcularGrandezas() {
    const vm = document.getElementById('vm').value;
    const deltaX = document.getElementById('deltaX').value;
    const deltaT = document.getElementById('deltaT').value;

    if (vm && deltaX && deltaT) {
        document.getElementById('resultado').textContent = "Preencha apenas dois campos.";
    } else if (vm && deltaX) {
        document.getElementById('resultado').textContent = `Δt = ${deltaX / vm} s`;
    } else if (vm && deltaT) {
        document.getElementById('resultado').textContent = `Δx = ${vm * deltaT} m`;
    } else if (deltaX && deltaT) {
        document.getElementById('resultado').textContent = `Vm = ${deltaX / deltaT} m/s`;
    } else {
        document.getElementById('resultado').textContent = "Preencha dois campos.";
    }
}

function calcularMRUV() {
    const vmruv = document.getElementById('vmruv').value;
    const a = document.getElementById('a').value;
    const deltaXmruv = document.getElementById('deltaXmruv').value;
    const deltaTmruv = document.getElementById('deltaTmruv').value;

    if (vmruv && deltaTmruv && a) {
        const deltaXCalc = vmruv * deltaTmruv + (0.5 * a * Math.pow(deltaTmruv, 2));
        document.getElementById('resultadoMRUV').textContent = `Δx = ${deltaXCalc} m`;
    } else {
        document.getElementById('resultadoMRUV').textContent = "Preencha todos os campos.";
    }
}

function calcularQuedaLivre() {
    const h = document.getElementById('h').value;
    const t = document.getElementById('t').value;
    const g = document.getElementById('g').value;

    if (h && t) {
        document.getElementById('resultadoQuedaLivre').textContent = "Preencha apenas um campo.";
    } else if (h && g) {
        const tempoCalc = Math.sqrt((2 * h) / g);
        document.getElementById('resultadoQuedaLivre').textContent = `Tempo (t) = ${tempoCalc.toFixed(2)} s`;
    } else if (t && g) {
        const alturaCalc = 0.5 * g * Math.pow(t, 2);
        document.getElementById('resultadoQuedaLivre').textContent = `Altura (h) = ${alturaCalc.toFixed(2)} m`;
    } else {
        document.getElementById('resultadoQuedaLivre').textContent = "Preencha um campo.";
    }
}
function calcularForca() {
    const massa = document.getElementById('massa').value;
    const aceleracao = document.getElementById('aceleracao').value;

    if (massa && aceleracao) {
        const forca = massa * aceleracao;
        document.getElementById('resultado-mecanica').textContent = `Força (F) = ${forca} N`;
    } else {
        document.getElementById('resultado-mecanica').textContent = "Por favor, insira valores válidos para massa e aceleração.";
    }
}

function calcularTensao() {
    const corrente = document.getElementById('corrente').value;
    const resistencia = document.getElementById('resistencia').value;

    if (corrente && resistencia) {
        const tensao = corrente * resistencia;
        document.getElementById('resultado-eletronica').textContent = `Tensão (V) = ${tensao} V`;
    } else {
        document.getElementById('resultado-eletronica').textContent = "Por favor, insira valores válidos para corrente e resistência.";
    }
}