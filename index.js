import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, "01529674000");
diretor.cadastrarSenha(681203);
const gerente = new Gerente("Ricardo", 5000, "01529674923");
gerente.cadastrarSenha(586585);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 64535);
const estaLogado = SistemaAutenticacao.login(diretor, 681203);

console.log(estaLogado, gerenteEstaLogado);


