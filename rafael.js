class Banco {
    _CPF = 0;

    constructor(cliente, CPF) {
        this._cliente = cliente;
        this.CPF = CPF; // Use o setter para validar o CPF
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(novoNome) {
        if (typeof novoNome === 'string') {
            this._cliente = novoNome;
        } else {
            throw new Error("Insira um nome válido, por favor.");
        }
    }

    get CPF() {
        return this._CPF;
    }

    set CPF(novoCPF) {
        if (this.validarCPF(novoCPF)) {
            this._CPF = novoCPF;
        } else {
            console.log("CPF inválido. Insira um CPF válido, por favor.");
        }
    }

    validarCPF(cpf) {
        // Adicione a lógica de validação do CPF aqui
        // Retorna true se o CPF for válido e false caso contrário
        // Exemplo simplificado:
        return typeof cpf === "number";
    }
}

let p1 = new Banco("Rafael", 12150212451);
let p2 = new Banco("Neymar", 32150212452); 
let p3 = new Banco("Eduardo", 52150212453);
let p4 = new Banco("Cauly", 12167312453); // Isso resultará em um CPF inválido

// Correção: Use o setter CPF, não novoCPF
p1.CPF = "a";

console.log(`O nome do cliente é ${p1.cliente} e tem o CPF ${p1.CPF}`);
console.log(`O nome do cliente é ${p2.cliente} e tem o CPF ${p2.CPF}`);
console.log(`O nome do cliente é ${p3.cliente} e tem o CPF ${p3.CPF}`);
console.log(`O nome do cliente é ${p4.cliente} e tem o CPF ${p4.CPF}`);

function dividirNumeros(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }

        const resultado = a / b;
        return resultado;
    } catch (erro) {
        console.log("Ocorreu um erro: " + erro.message);
    } finally {
        console.log("Bloco finally sempre é executado, independentemente de ocorrer uma exceção ou não.");
    }
}

console.log(dividirNumeros(10, 2));  
console.log(dividirNumeros(0, 0));

  