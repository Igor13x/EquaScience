1- Favoritar Formulas
2- Histórico de Formulas

 curl -X POST -H "Content-Type: application/json" -d "{\"user_id\":\"jack\",\"text\":\"Ahoy!\"}" https://equascience-5653d-default-rtdb.firebaseio.com:443/formulas.json

A cada nova incognita, criar um input pra definir - identificador: "g" por ex, desc: "gravidade" p exemplo, boolean se for constante, o valor caso seja constante
Procurar elementos inválidos dentro do input da formula, (checar se é operador matematico ou um dos elementos inserido)

Metodo para Salvar formula
Metodo para Mostrar formula
Metodo generico para Calcular formula


----------------------------------------
Modelo da Formula:
```json

{
  "nome":"calcular algo",
  "desc":"uma formula bem lkegal pra fazer uma coisa mais legal ainda",
  "categoria":"fisica",
  "expressao": "g + 5 = u",
  "elementos": [{
    "identificador": "g",
    "desc": "gravidade",
    "isConstante": true,
    "valor": 10
 }, {
    "identificador": "u",
    "desc": "umacoisamtloucaai"
 }],
}

```
--------------------------------------------
