function calcularGrandezas() {
    const vm = document.getElementById('vm').value;
    const deltaX = document.getElementById('deltaX').value;
    const deltaT = document.getElementById('deltaT').value;

    if (vm && deltaX) {
        document.getElementById('resultado').textContent = `Δt = ${deltaX / vm} s`;
    } else if (vm && deltaT) {
        document.getElementById('resultado').textContent = `Δx = ${vm * deltaT} m`;
    } else if (deltaX && deltaT) {
        document.getElementById('resultado').textContent = `Vm = ${deltaX / deltaT} m/s`;
    } else {
        document.getElementById('resultado').textContent = "Preencha dois dos três campos.";
    }
}

function calcularMRUV() {
    const vmruv = document.getElementById('vmruv').value;
    const a = document.getElementById('a').value;
    const deltaXmruv = document.getElementById('deltaXmruv').value;
    const deltaTmruv = document.getElementById('deltaTmruv').value;

    if (vmruv && deltaTmruv) {
        const deltaXCalc = vmruv * deltaTmruv + (0.5 * a * Math.pow(deltaTmruv, 2));
        document.getElementById('resultadoMRUV').textContent = `Δx = ${deltaXCalc} m`;
    } else if (a && deltaTmruv) {
        const vmruvCalc = (deltaXmruv - (0.5 * a * Math.pow(deltaTmruv, 2))) / deltaTmruv;
        document.getElementById('resultadoMRUV').textContent = `Vm = ${vmruvCalc} m/s`;
    } else if (deltaXmruv && deltaTmruv) {
        const aCalc = (2 * (deltaXmruv - (vmruv * deltaTmruv))) / Math.pow(deltaTmruv, 2);
        document.getElementById('resultadoMRUV').textContent = `Aceleração (a) = ${aCalc} m/s²`;
    } else {
        document.getElementById('resultadoMRUV').textContent = "Preencha dois dos quatro campos.";
    }
}

function calcularQuedaLivre() {
    const h = document.getElementById('h').value;
    const t = document.getElementById('t').value;
    const g = document.getElementById('g').value || 9.8; // Valor padrão da gravidade

    if (h) {
        const tempoCalc = Math.sqrt((2 * h) / g);
        document.getElementById('resultadoQuedaLivre').textContent = `Tempo (t) = ${tempoCalc.toFixed(2)} s`;
    } else if (t) {
        const alturaCalc = 0.5 * g * Math.pow(t, 2);
        document.getElementById('resultadoQuedaLivre').textContent = `Altura (h) = ${alturaCalc.toFixed(2)} m`;
    } else {
        document.getElementById('resultadoQuedaLivre').textContent = "Preencha um dos campos.";
    }
}

function calcularForca() {
    const massaInput = document.getElementById('m');
    const aceleracaoInput = document.getElementById('aForca');
    const resultadoElement = document.getElementById('resultadoForca');

    const massa = parseFloat(massaInput.value);
    const aceleracao = parseFloat(aceleracaoInput.value);

    if (isNaN(massa) || isNaN(aceleracao)) {
        resultadoElement.textContent = "Por favor, insira valores válidos para massa e aceleração.";
        return;
    }

    const forca = massa * aceleracao;
    resultadoElement.textContent = `Força (F) = ${forca.toFixed(2)} N`;
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

function calcularHooke() {
    const forca = parseFloat(document.getElementById("forca-hooke").value);
    const k = parseFloat(document.getElementById("constante-k").value);
    const deformacao = parseFloat(document.getElementById("deformacao-hooke").value);
    let resultado = '';

    if (forca && k) {
        resultado = (forca / k).toFixed(2) + ' m';
        document.getElementById("deformacao-hooke").value = resultado;
    } else if (forca && deformacao) {
        resultado = (forca / deformacao).toFixed(2) + ' N/m';
        document.getElementById("constante-k").value = resultado;
    } else if (k && deformacao) {
        resultado = (k * deformacao).toFixed(2) + ' N';
        document.getElementById("forca-hooke").value = resultado;
    } else {
        resultado = 'Por favor, insira dois dos três valores.';
    }

    document.getElementById("resultado-hooke").innerText = 'Resultado: ' + resultado;
}

function calcularEnergiaCinetica() {
    const massa = parseFloat(document.getElementById("massa-ec").value);
    const velocidade = parseFloat(document.getElementById("velocidade-ec").value);
    let resultado = '';

    if (massa && velocidade) {
        resultado = (0.5 * massa * Math.pow(velocidade, 2)).toFixed(2) + ' J';
    } else {
        resultado = 'Por favor, insira ambos os valores.';
    }

    document.getElementById("resultado-ec").innerText = 'Resultado: ' + resultado;
}

function calcularTrabalho() {
    const forca = parseFloat(document.getElementById("forca-trabalho").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const angulo = parseFloat(document.getElementById("angulo").value);
    let resultado = '';

    if (forca && distancia && angulo !== undefined) {
        const radianos = angulo * (Math.PI / 180); // Convertendo graus para radianos
        resultado = (forca * distancia * Math.cos(radianos)).toFixed(2) + ' J';
    } else {
        resultado = 'Por favor, insira todos os valores.';
    }

    document.getElementById("resultado-trabalho").innerText = 'Resultado: ' + resultado;
}

function calcularImpulso() {
    const forca = parseFloat(document.getElementById("forca-impulso").value);
    const deltaT = parseFloat(document.getElementById("deltaT-impulso").value);
    let resultado = '';

    if (forca && deltaT) {
        resultado = (forca * deltaT).toFixed(2) + ' Ns';
    } else {
        resultado = 'Por favor, insira ambos os valores.';
    }

    document.getElementById("resultado-impulso").innerText = 'Resultado: ' + resultado;
}
