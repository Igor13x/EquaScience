const database = "https://equascience-5653d-default-rtdb.firebaseio.com/";
const response = await fetch("https://equascience-5653d-default-rtdb.firebaseio.com/formulas.json");



async function setItem (formula){
    const salvarformula =  {
        nome:formula.nome,
        desc:formula.desc,
        categoria:formula.categoria,
        expressao: formula.formula,
        elementos: [{
            identificador: "g",
            desc: "gravidade",
            isConstante: true,
            valor: 10
        }],
    }

    const referencia = ref(database, 'formulas/' + Date.now()); // Usando o timestamp como chave única

  try {
    // Salvando os dados na referência
    await set(referencia, salvarformula); 
    console.log("Usuário adicionado com sucesso!");
    document.getElementById('resultado').innerText = 'Usuário adicionado com sucesso!';
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    document.getElementById('resultado').innerText = 'Erro ao adicionar usuário.';
  }
}

setItem({nome:"Igor", desc:"dola"});

