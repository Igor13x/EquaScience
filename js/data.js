// Inicializar Firebase (usando a variável global `firebase`)
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.getDatabase(app);

// Exemplo de salvar uma fórmula
async function saveFormula(formula) {
    const formulaRef = firebase.push(firebase.ref(database, 'formulas'));
    await firebase.set(formulaRef, formula);
    console.log("Fórmula salva com sucesso!");
}


// Função para carregar todas as fórmulas do Firebase
export async function loadFormulas() {
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
export async function deleteFormula(id) {
    try {
        // Referência para a fórmula específica
        const formulaRef = ref(database, 'formulas/' + id);
        await remove(formulaRef); // Exclui a fórmula
        console.log("Fórmula excluída com sucesso!");
    } catch (error) {
        console.error("Erro ao excluir fórmula:", error);
    }
}

// Função para atualizar uma fórmula no Firebase
export async function updateFormula(id, updatedFormula) {
    try {
        // Referência para a fórmula específica
        const formulaRef = ref(database, 'formulas/' + id);
        await set(formulaRef, updatedFormula); // Atualiza a fórmula
        console.log("Fórmula atualizada com sucesso!");
    } catch (error) {
        console.error("Erro ao atualizar fórmula:", error);
    }
}

// Função para favoritar uma fórmula
export async function favoriteFormula(id) {
    try {
        const formulaRef = ref(database, 'formulas/' + id);
        const snapshot = await get(formulaRef); // Pega a fórmula específica

        if (snapshot.exists()) {
            const formula = snapshot.val();
            formula.favorita = true; // Marca a fórmula como favorita

            await set(formulaRef, formula); // Atualiza a fórmula com o status de favorito
            console.log("Fórmula favoritada com sucesso!");
        } else {
            console.log("Fórmula não encontrada.");
        }
    } catch (error) {
        console.error("Erro ao favoritar fórmula:", error);
    }
}
