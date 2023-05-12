import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Igor", 10000, 10010101019)
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Anthony", 5000, 20973882000)
gerente.cadastrarSenha("123456")
const cliente = new Cliente("Lais", 192899203, "567")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "567")
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)
