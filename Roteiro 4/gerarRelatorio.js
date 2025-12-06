const vendas = [
  { produto: "Notebook", preco: 4500, quantidade: 3, vendedor: "Sara" },
  { produto: "Smartphone", preco: 2300, quantidade: 5, vendedor: "Matheus" },
  { produto: "Monitor", preco: 1200, quantidade: 2, vendedor: "Gabriel" },
  { produto: "Teclado Mecânico", preco: 350, quantidade: 4, vendedor: "Sara" },
  { produto: "Notebook", preco: 4500, quantidade: 6, vendedor: "Gabriel" },
  { produto: "Monitor", preco: 1200, quantidade: 3, vendedor: "Matheus" },
];

const gerarRelatorio = (vendas) => {
  let total = 0;
  let comissao = {};
  let relatorio = "Relatório de Vendas:\n";

  vendas.forEach((produto) => {
    let totalParcial = produto.preco * produto.quantidade;
    comissao[produto.vendedor] =
      (comissao[produto.vendedor] || 0) + totalParcial;
    total += totalParcial;

    relatorio += formatarProduto(produto, relatorio);
  });

  relatorio += `...` + `\nTotal Geral: R$${formatarMoeda(total)}`;

  relatorio += `\n\nTotal de comissão (5%):` + `${formatarComissao(comissao)}`;

  return relatorio;
};

const formatarMoeda = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

const formatarProduto = (produto, relatorio) => {
  relatorio +=
    `\n- Produto: ${produto.produto}` +
    `\n  Quantidade: ${produto.quantidade}` +
    `\n  Preço Unitário: ${formatarMoeda(produto.preco)}` +
    `\n  Total: ${formatarMoeda(produto.preco * produto.quantidade)}` +
    `\n  Vendedor: ${produto.vendedor}\n`;

  return relatorio;
};

const formatarComissao = (comissao) => {
  let resultado = "";

  Object.keys(comissao).forEach((vendedor) => {
    let valorVendas = comissao[vendedor];
    let valorComissao = valorVendas * 0.05;

    resultado += `\n${vendedor}: ${formatarMoeda(valorComissao)}`;
  });

  return resultado;
};

console.log(gerarRelatorio(vendas));
