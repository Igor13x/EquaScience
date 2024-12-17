import { database } from './firebase-config';
import { ref, set, push, get, child } from 'firebase/database';

// Função para adicionar elementos dinamicamente
function addElemento() {
    const container = document.getElementById('elementos-container');
    const id = `elem-${Date.now()}`;
    const group = document.createElement('div');
    group.className = 'input-group';
    group.innerHTML = `
        <input placeholder="Identificador (ex: g)" id="${id}-id" />
        <input placeholder="Descrição" id="${id}-desc" />
        <label>
            Constante:
            <input type="checkbox" id="${id}-is-constant" />
        </label>
        <input placeholder="Valor" id="${id}-value" />
        <button onclick="removeElemento('${id}')">Remover</button>
    `;
    container.appendChild(group);
}

// Função para remover um elemento
function removeElemento(id) {
    document.getElementById(`${id}-id`).parentElement.remove();
}

// Função para salvar uma fórmula no Firebase
async function saveFormula() {
    const nome = document.getElementById('formula-name').value;
    const desc = document.getElementById('formula-desc').value;
    const categoria = document.getElementById('formula-category').value;
    const expressao = document.getElementById('formula-expression').value;

    const formulaElementos = [];
    const elementos = document.querySelectorAll('#elementos-container .input-group');
    elementos.forEach((elem) => {
        const identificador = elem.querySelector('input[id$="-id"]').value;
        const descricao = elem.querySelector('input[id$="-desc"]').value;
        const isConstante = elem.querySelector('input[id$="-is-constant"]').checked;
        const valor = parseFloat(elem.querySelector('input[id$="-value"]').value) || null;
        formulaElementos.push({ identificador, desc: descricao, isConstante, valor });
    });

    const formula = {
        nome,
        desc,
        categoria,
        expressao,
        elementos: formulaElementos
    };

    // Salvar no Firebase
    try {
        const formulaRef = push(ref(database, 'formulas'));
        await set(formulaRef, formula);
        alert('Fórmula salva com sucesso!');
        loadFormulas();
    } catch (error) {
        console.error('Erro ao salvar fórmula:', error);
        alert('Erro ao salvar fórmula.');
    }
}

// Função para carregar fórmulas do Firebase
async function loadFormulas() {
    try {
        const snapshot = await get(ref(database, 'formulas'));
        if (snapshot.exists()) {
            const formulas = snapshot.val();
            const list = document.getElementById('formula-list');
            list.innerHTML = '';
            Object.keys(formulas).forEach((id) => {
                const formula = formulas[id];
                const li = document.createElement('li');
                li.textContent = `${formula.nome} - ${formula.desc}`;
                list.appendChild(li);
            });
        } else {
            alert('Nenhuma fórmula salva!');
        }
    } catch (error) {
        console.error('Erro ao carregar fórmulas:', error);
    }
}

// Carregar as fórmulas assim que a página for carregada
loadFormulas();
