import { database } from './firebase-config';
import { ref, set, push, get, remove, child } from 'firebase/database';

// Função para salvar uma fórmula no Firebase
async function saveFormula(formula) {
    try {
        // Referência para salvar a fórmula na coleção 'formulas'
        const formulaRef = push(ref(database, 'formulas'));  // Usa push para criar uma chave única
        await set(formulaRef, formula);  // Salva a fórmula no Firebase
        console.log("Fórmula salva com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar fórmula:", error);
    }
}

// Função para carregar todas as fórmulas do Firebase
async function loadFormulas() {
    try {
        const snapshot = await get(ref(database, 'formulas')); // Pega todas as fórmulas
        if (snapshot.exists()) {
            return snapshot.val(); // Retorna as fórmulas salvas
        } else {
            console.log("Nenhuma fórmula encontrada.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao carregar fórmulas:", error);
    }
}

// Função para excluir uma fórmula com base no id
async function deleteFormula(id) {
    try {
        // Referência para a fórmula específica
        const formulaRef = ref(database, 'formulas/' + id);
        await remove(formulaRef);  // Exclui a fórmula
        console.log("Fórmula excluída com sucesso!");
    } catch (error) {
        console.error("Erro ao excluir fórmula:", error);
    }
}

// Função para atualizar uma fórmula no Firebase
async function updateFormula(id, updatedFormula) {
    try {
        // Referência para a fórmula específica
        const formulaRef = ref(database, 'formulas/' + id);
        await set(formulaRef, updatedFormula);  // Atualiza a fórmula
        console.log("Fórmula atualizada com sucesso!");
    } catch (error) {
        console.error("Erro ao atualizar fórmula:", error);
    }
}

// Função para favoritar uma fórmula
async function favoriteFormula(id) {
    try {
        const formulaRef = ref(database, 'formulas/' + id);
        const snapshot = await get(formulaRef);  // Pega a fórmula específica

        if (snapshot.exists()) {
            const formula = snapshot.val();
            formula.favorita = true;  // Marca a fórmula como favorita

            await set(formulaRef, formula);  // Atualiza a fórmula com o status de favorito
            console.log("Fórmula favoritada com sucesso!");
        } else {
            console.log("Fórmula não encontrada.");
        }
    } catch (error) {
        console.error("Erro ao favoritar fórmula:", error);
    }
}

// Exporta as funções para que possam ser usadas em outros arquivos
export { saveFormula, loadFormulas, deleteFormula, updateFormula, favoriteFormula };
