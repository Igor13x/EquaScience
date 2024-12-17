function calcularGrandezas() {
    const vm = parseFloat(document.getElementById('vm').value);
    const deltaX = parseFloat(document.getElementById('deltaX').value);
    const deltaT = parseFloat(document.getElementById('deltaT').value);

    let resultado = '';
    if (vm && deltaX) {
        const deltaTCalc = deltaX / vm;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> Δt = Δx / Vm<br>
            • <b>Substituindo os valores:</b> Δt = ${deltaX} / ${vm}<br>
            • <b>Resultado:</b> Δt = ${deltaTCalc.toFixed(2)} s
        `;
    } else if (vm && deltaT) {
        const deltaXCalc = vm * deltaT;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> Δx = Vm × Δt<br>
            • <b>Substituindo os valores:</b> Δx = ${vm} × ${deltaT}<br>
            • <b>Resultado:</b> Δx = ${deltaXCalc.toFixed(2)} m
        `;
    } else if (deltaX && deltaT) {
        const vmCalc = deltaX / deltaT;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> Vm = Δx / Δt<br>
            • <b>Substituindo os valores:</b> Vm = ${deltaX} / ${deltaT}<br>
            • <b>Resultado:</b> Vm = ${vmCalc.toFixed(2)} m/s
        `;
    } else {
        resultado = "Por favor, preencha dois dos três campos.";
    }

    document.getElementById('resultado').innerHTML = resultado;
}


function calcularMRUV() {
    const vmruv = parseFloat(document.getElementById('vmruv').value);
    const a = parseFloat(document.getElementById('a').value);
    const deltaXmruv = parseFloat(document.getElementById('deltaXmruv').value);
    const deltaTmruv = parseFloat(document.getElementById('deltaTmruv').value);

    let resultado = '';
    if (vmruv && deltaTmruv && a) {
        const deltaXCalc = vmruv * deltaTmruv + 0.5 * a * Math.pow(deltaTmruv, 2);
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> Δx = Vm × Δt + 0.5 × a × (Δt)²<br>
            • <b>Substituindo os valores:</b> Δx = ${vmruv} × ${deltaTmruv} + 0.5 × ${a} × (${deltaTmruv})²<br>
            • <b>Resultado:</b> Δx = ${deltaXCalc.toFixed(2)} m
        `;
    } else if (deltaXmruv && deltaTmruv && a) {
        const vmruvCalc = (deltaXmruv - 0.5 * a * Math.pow(deltaTmruv, 2)) / deltaTmruv;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> Vm = (Δx - 0.5 × a × (Δt)²) / Δt<br>
            • <b>Substituindo os valores:</b> Vm = (${deltaXmruv} - 0.5 × ${a} × (${deltaTmruv})²) / ${deltaTmruv}<br>
            • <b>Resultado:</b> Vm = ${vmruvCalc.toFixed(2)} m/s
        `;
    } else if (deltaXmruv && deltaTmruv && vmruv) {
        const aCalc = (2 * (deltaXmruv - vmruv * deltaTmruv)) / Math.pow(deltaTmruv, 2);
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> a = 2 × (Δx - Vm × Δt) / (Δt)²<br>
            • <b>Substituindo os valores:</b> a = 2 × (${deltaXmruv} - ${vmruv} × ${deltaTmruv}) / (${deltaTmruv})²<br>
            • <b>Resultado:</b> a = ${aCalc.toFixed(2)} m/s²
        `;
    } else {
        resultado = "Por favor, preencha dois dos quatro campos.";
    }

    document.getElementById('resultadoMRUV').innerHTML = resultado;
}


function calcularQuedaLivre() {
    const h = parseFloat(document.getElementById('h').value);
    const t = parseFloat(document.getElementById('t').value);
    const g = parseFloat(document.getElementById('g').value) || 9.8;

    let resultado = '';
    if (h) {
        const tempoCalc = Math.sqrt((2 * h) / g);
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> t = √(2 × h / g)<br>
            • <b>Substituindo os valores:</b> t = √(2 × ${h} / ${g})<br>
            • <b>Resultado:</b> t = ${tempoCalc.toFixed(2)} s
        `;
    } else if (t) {
        const alturaCalc = 0.5 * g * Math.pow(t, 2);
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> h = 0.5 × g × (t)²<br>
            • <b>Substituindo os valores:</b> h = 0.5 × ${g} × (${t})²<br>
            • <b>Resultado:</b> h = ${alturaCalc.toFixed(2)} m
        `;
    } else {
        resultado = "Por favor, insira um dos valores.";
    }

    document.getElementById('resultadoQuedaLivre').innerHTML = resultado;
}


function calcularForca() {
    const massaInput = document.getElementById('m');
    const aceleracaoInput = document.getElementById('aForca');
    const resultadoElement = document.getElementById('resultadoForca');

    const massa = parseFloat(massaInput.value);
    const aceleracao = parseFloat(aceleracaoInput.value);

    if (isNaN(massa) || isNaN(aceleracao)) {
        resultadoElement.innerHTML = "Por favor, insira valores válidos para massa e aceleração.";
        return;
    }

    const forca = massa * aceleracao;
    resultadoElement.innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> F = m × a<br>
        • <b>Substituindo os valores:</b> F = ${massa} × ${aceleracao}<br>
        • <b>Resultado:</b> F = ${forca.toFixed(2)} N
    `;
}


function calcularTensao() {
    const corrente = parseFloat(document.getElementById('corrente').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);

    if (isNaN(corrente) || isNaN(resistencia)) {
        document.getElementById('resultado-eletronica').innerHTML = "Por favor, insira valores válidos para corrente e resistência.";
        return;
    }

    const tensao = corrente * resistencia;
    document.getElementById('resultado-eletronica').innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> V = R × I<br>
        • <b>Substituindo os valores:</b> V = ${resistencia} × ${corrente}<br>
        • <b>Resultado:</b> V = ${tensao.toFixed(2)} V
    `;
}


function calcularHooke() {
    const forca = parseFloat(document.getElementById("forca-hooke").value);
    const k = parseFloat(document.getElementById("constante-k").value);
    const deformacao = parseFloat(document.getElementById("deformacao-hooke").value);
    let resultado = '';

    if (forca && k) {
        const deformacaoCalc = forca / k;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> Δx = F / k<br>
            • <b>Substituindo os valores:</b> Δx = ${forca} / ${k}<br>
            • <b>Resultado:</b> Δx = ${deformacaoCalc.toFixed(2)} m
        `;
    } else if (forca && deformacao) {
        const constanteKCalc = forca / deformacao;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> k = F / Δx<br>
            • <b>Substituindo os valores:</b> k = ${forca} / ${deformacao}<br>
            • <b>Resultado:</b> k = ${constanteKCalc.toFixed(2)} N/m
        `;
    } else if (k && deformacao) {
        const forcaCalc = k * deformacao;
        resultado = `
            <b>Passo a passo:</b><br>
            • <b>Fórmula:</b> F = k × Δx<br>
            • <b>Substituindo os valores:</b> F = ${k} × ${deformacao}<br>
            • <b>Resultado:</b> F = ${forcaCalc.toFixed(2)} N
        `;
    } else {
        resultado = "Por favor, insira dois dos três valores.";
    }

    document.getElementById("resultado-hooke").innerHTML = resultado;
}


function calcularEnergiaCinetica() {
    const massa = parseFloat(document.getElementById("massa-ec").value);
    const velocidade = parseFloat(document.getElementById("velocidade-ec").value);

    if (isNaN(massa) || isNaN(velocidade)) {
        document.getElementById("resultado-ec").innerHTML = "Por favor, insira valores válidos para massa e velocidade.";
        return;
    }

    const energiaCinetica = 0.5 * massa * Math.pow(velocidade, 2);
    document.getElementById("resultado-ec").innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> EC = ½ × m × v²<br>
        • <b>Substituindo os valores:</b> EC = ½ × ${massa} × (${velocidade}²)<br>
        • <b>Cálculo:</b> EC = ½ × ${massa} × ${Math.pow(velocidade, 2)}<br>
        • <b>Resultado:</b> EC = ${energiaCinetica.toFixed(2)} J
    `;
}


function calcularTrabalho() {
    const forca = parseFloat(document.getElementById("forca-trabalho").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const angulo = parseFloat(document.getElementById("angulo").value);

    if (isNaN(forca) || isNaN(distancia) || isNaN(angulo)) {
        document.getElementById("resultado-trabalho").innerHTML = "Por favor, insira valores válidos para força, distância e ângulo.";
        return;
    }

    const radianos = angulo * (Math.PI / 180);
    const trabalho = forca * distancia * Math.cos(radianos);
    document.getElementById("resultado-trabalho").innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> T = F × d × cos(θ)<br>
        • <b>Substituindo os valores:</b> T = ${forca} × ${distancia} × cos(${angulo})<br>
        • <b>Convertendo o ângulo para radianos:</b> θ = ${angulo}° = ${radianos.toFixed(2)} rad<br>
        • <b>Cálculo:</b> T = ${forca} × ${distancia} × ${Math.cos(radianos).toFixed(2)}<br>
        • <b>Resultado:</b> T = ${trabalho.toFixed(2)} J
    `;
}


function calcularImpulso() {
    const forca = parseFloat(document.getElementById("forca-impulso").value);
    const deltaT = parseFloat(document.getElementById("deltaT-impulso").value);

    if (isNaN(forca) || isNaN(deltaT)) {
        document.getElementById("resultado-impulso").innerHTML = "Por favor, insira valores válidos para força e intervalo de tempo.";
        return;
    }

    const impulso = forca * deltaT;
    document.getElementById("resultado-impulso").innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> I = F × Δt<br>
        • <b>Substituindo os valores:</b> I = ${forca} × ${deltaT}<br>
        • <b>Resultado:</b> I = ${impulso.toFixed(2)} Ns
    `;
}

function calcularAceleracao() {
    const variacaoVelocidade = parseFloat(document.getElementById('dv').value);
    const intervaloTempo = parseFloat(document.getElementById('dt').value);

    if (isNaN(variacaoVelocidade) || isNaN(intervaloTempo) || intervaloTempo === 0) {
        document.getElementById('resultadoAceleracao').innerHTML = 'Por favor, insira valores válidos e certifique-se de que Δt não seja zero.';
        return;
    }

    const aceleracao = variacaoVelocidade / intervaloTempo;
    document.getElementById('resultadoAceleracao').innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> a = Δv / Δt<br>
        • <b>Substituindo os valores:</b> a = ${variacaoVelocidade} / ${intervaloTempo}<br>
        • <b>Cálculo:</b> a = ${aceleracao.toFixed(2)} m/s²<br>
        • <b>Resultado:</b> A aceleração é ${aceleracao.toFixed(2)} m/s²
    `;
}


function calcularVelocidadeMedia() {
    const variacaoPosicao = parseFloat(document.getElementById('dx').value);
    const intervaloTempo = parseFloat(document.getElementById('dTempo').value);

    if (isNaN(variacaoPosicao) || isNaN(intervaloTempo) || intervaloTempo === 0) {
        document.getElementById('resultadoVm').innerHTML = 'Por favor, insira valores válidos e certifique-se de que Δt não seja zero.';
        return;
    }

    const velocidadeMedia = variacaoPosicao / intervaloTempo;
    document.getElementById('resultadoVm').innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> Vm = Δx / Δt<br>
        • <b>Substituindo os valores:</b> Vm = ${variacaoPosicao} / ${intervaloTempo}<br>
        • <b>Cálculo:</b> Vm = ${velocidadeMedia.toFixed(2)} m/s<br>
        • <b>Resultado:</b> A velocidade média é ${velocidadeMedia.toFixed(2)} m/s
    `;
}


function calcularMomentoLinear() {
    const massa = parseFloat(document.getElementById('massaMomento').value);
    const velocidade = parseFloat(document.getElementById('velocidadeMomento').value);

    if (isNaN(massa) || isNaN(velocidade)) {
        document.getElementById('resultadoMomento').innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const momentoLinear = massa * velocidade;
    document.getElementById('resultadoMomento').innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> p = m × v<br>
        • <b>Substituindo os valores:</b> p = ${massa} × ${velocidade}<br>
        • <b>Cálculo:</b> p = ${momentoLinear.toFixed(2)} kg·m/s<br>
        • <b>Resultado:</b> O momento linear é ${momentoLinear.toFixed(2)} kg·m/s
    `;
}


function calcularPotenciaMecanica() {
    const trabalho = parseFloat(document.getElementById('trabalho').value);
    const intervaloTempo = parseFloat(document.getElementById('tempoPotencia').value);

    if (isNaN(trabalho) || isNaN(intervaloTempo) || intervaloTempo === 0) {
        document.getElementById('resultadoPotencia').innerHTML = 'Por favor, insira valores válidos e certifique-se de que Δt não seja zero.';
        return;
    }

    const potencia = trabalho / intervaloTempo;
    document.getElementById('resultadoPotencia').innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> P = W / Δt<br>
        • <b>Substituindo os valores:</b> P = ${trabalho} / ${intervaloTempo}<br>
        • <b>Cálculo:</b> P = ${potencia.toFixed(2)} W<br>
        • <b>Resultado:</b> A potência é ${potencia.toFixed(2)} W
    `;
}


function calcularForcaPeso() {
    const massa = parseFloat(document.getElementById('massaPeso').value);
    const gravidade = parseFloat(document.getElementById('gravidade').value);

    if (isNaN(massa) || isNaN(gravidade)) {
        document.getElementById('resultadoPeso').innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const peso = massa * gravidade;
    document.getElementById('resultadoPeso').innerHTML = `
        <b>Passo a passo:</b><br>
        • <b>Fórmula:</b> P = m × g<br>
        • <b>Substituindo os valores:</b> P = ${massa} × ${gravidade}<br>
        • <b>Cálculo:</b> P = ${peso.toFixed(2)} N<br>
        • <b>Resultado:</b> A força peso é ${peso.toFixed(2)} N
    `;
}
function calcularOhm() {
    const tensaoOhm = parseFloat(document.getElementById('tensaoOhm').value);
    const correnteOhm = parseFloat(document.getElementById('corrente').value);
    const resistenciaOhm = parseFloat(document.getElementById('resistencia').value);

    let resultado = '';

    // Verifica se há pelo menos dois valores preenchidos
    if ((isNaN(tensaoOhm) && isNaN(correnteOhm) && isNaN(resistenciaOhm)) ||
        (isNaN(tensaoOhm) && isNaN(correnteOhm)) ||
        (isNaN(tensaoOhm) && isNaN(resistenciaOhm)) ||
        (isNaN(correnteOhm) && isNaN(resistenciaOhm))) {
        resultado = "Por favor, insira dois dos três valores (Tensão, Corrente, Resistência).";
    } else {
        // Se a resistência e a corrente forem fornecidas, calcular a tensão
        if (!isNaN(resistenciaOhm) && !isNaN(correnteOhm) && isNaN(tensaoOhm)) {
            const tensaoCalc = resistenciaOhm * correnteOhm;
            resultado = `
                <b>Passo a passo:</b><br>
                • <b>Fórmula:</b> V = R × I<br>
                • <b>Substituindo os valores:</b> V = ${resistenciaOhm} × ${correnteOhm}<br>
                • <b>Resultado:</b> V = ${tensaoCalc.toFixed(2)} V
            `;
        }
        // Se a tensão e a corrente forem fornecidas, calcular a resistência
        else if (!isNaN(tensaoOhm) && !isNaN(correnteOhm) && isNaN(resistenciaOhm)) {
            const resistenciaCalc = tensaoOhm / correnteOhm;
            resultado = `
                <b>Passo a passo:</b><br>
                • <b>Fórmula:</b> R = V / I<br>
                • <b>Substituindo os valores:</b> R = ${tensaoOhm} / ${correnteOhm}<br>
                • <b>Resultado:</b> R = ${resistenciaCalc.toFixed(2)} Ω
            `;
        }
        // Se a tensão e a resistência forem fornecidas, calcular a corrente
        else if (!isNaN(tensaoOhm) && !isNaN(resistenciaOhm) && isNaN(correnteOhm)) {
            const correnteCalc = tensaoOhm / resistenciaOhm;
            resultado = `
                <b>Passo a passo:</b><br>
                • <b>Fórmula:</b> I = V / R<br>
                • <b>Substituindo os valores:</b> I = ${tensaoOhm} / ${resistenciaOhm}<br>
                • <b>Resultado:</b> I = ${correnteCalc.toFixed(2)} A
            `;
        }
    }

    document.getElementById('resultadoOhm').innerHTML = resultado;
}

function calcularCapacitor() {
    const tensaoCapacitor = parseFloat(document.getElementById('tensaoCapacitor').value);
    const cargaCapacitor = parseFloat(document.getElementById('carga').value);
    const capacitanciaCapacitor = parseFloat(document.getElementById('capacitancia').value);

    let resultado = '';

    // Verifica se há pelo menos dois valores preenchidos
    if ((isNaN(tensaoCapacitor) && isNaN(cargaCapacitor) && isNaN(capacitanciaCapacitor)) ||
        (isNaN(tensaoCapacitor) && isNaN(cargaCapacitor)) ||
        (isNaN(tensaoCapacitor) && isNaN(capacitanciaCapacitor)) ||
        (isNaN(cargaCapacitor) && isNaN(capacitanciaCapacitor))) {
        resultado = "Por favor, insira dois dos três valores (Tensão, Carga, Capacitância).";
    } else {
        // Se a carga e a capacitância forem fornecidas, calcular a tensão
        if (!isNaN(cargaCapacitor) && !isNaN(capacitanciaCapacitor) && isNaN(tensaoCapacitor)) {
            const tensaoCalc = cargaCapacitor / capacitanciaCapacitor;
            resultado = `
                <b>Passo a passo:</b><br>
                • <b>Fórmula:</b> V = Q / C<br>
                • <b>Substituindo os valores:</b> V = ${cargaCapacitor} / ${capacitanciaCapacitor}<br>
                • <b>Resultado:</b> V = ${tensaoCalc.toFixed(2)} V
            `;
        }
        // Se a tensão e a capacitância forem fornecidas, calcular a carga
        else if (!isNaN(tensaoCapacitor) && !isNaN(capacitanciaCapacitor) && isNaN(cargaCapacitor)) {
            const cargaCalc = capacitanciaCapacitor * tensaoCapacitor;
            resultado = `
                <b>Passo a passo:</b><br>
                • <b>Fórmula:</b> Q = C × V<br>
                • <b>Substituindo os valores:</b> Q = ${capacitanciaCapacitor} × ${tensaoCapacitor}<br>
                • <b>Resultado:</b> Q = ${cargaCalc.toFixed(2)} C
            `;
        }
        // Se a tensão e a carga forem fornecidas, calcular a capacitância
        else if (!isNaN(tensaoCapacitor) && !isNaN(cargaCapacitor) && isNaN(capacitanciaCapacitor)) {
            const capacitanciaCalc = cargaCapacitor / tensaoCapacitor;
            resultado = `
                <b>Passo a passo:</b><br>
                • <b>Fórmula:</b> C = Q / V<br>
                • <b>Substituindo os valores:</b> C = ${cargaCapacitor} / ${tensaoCapacitor}<br>
                • <b>Resultado:</b> C = ${capacitanciaCalc.toFixed(2)} F
            `;
        }
    }

    document.getElementById('resultadoCapacitor').innerHTML = resultado;
}
