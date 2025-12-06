const exportacao = {
  paisDestino: "Estados Unidos",
  produto: {
    nome: "aço",
    valorEmDolares: 100000,
    taxaImposta: 0.25,
  },
  empresa: "Siderúrgica Brasil Ltda",
};

const {
  produto: { nome, valorEmDolares, taxaImposta },
  empresa,
} = exportacao;

const valorFinal = valorEmDolares * (1 + taxaImposta);
const taxaPercentual = taxaImposta * 100;

console.log(`Produto: ${nome}`);
console.log(`Empresa: ${empresa}`);
console.log(`Valor original: US$ ${valorEmDolares}`);
console.log(`Taxa: ${taxaPercentual}%`);
console.log(`Valor com tarifa: US$ ${valorFinal}`);
