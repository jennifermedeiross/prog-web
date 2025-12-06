const usuarios = [
  { nome: "Cleciana", idade: "25", ativo: "true", saldo: "1234.56" },
  { nome: "Gustavo", idade: 30, ativo: true, saldo: 980 },
  { nome: "Rayane", idade: null, ativo: "false", saldo: "1500.90" },
  { nome: "Igor", idade: "NaN", ativo: 1, saldo: undefined },
  { nome: "Samuel", idade: "22 anos", ativo: false, saldo: "0" },
];

const normalizarUsuario = (usuario) => {
  const valorOriginal = usuario.idade;
  const idadeParcial = parseInt(valorOriginal);

  if (!isNaN(idadeParcial) && Number(valorOriginal) === idadeParcial) {
    usuario.idade = idadeParcial;
  } else {
    usuario.idade = null;
  }

  usuario.ativo =
    usuario.ativo === "true" || usuario.ativo === 1 || usuario.ativo === true;

  let saldo = parseFloat(usuario.saldo) || 0.0;
  usuario.saldo = saldo.toFixed(2);
};

const processarUsuario = (lista) => {
  lista.forEach((usuario) => {
    normalizarUsuario(usuario);
  });

  console.log(lista);
};

processarUsuario(usuarios);
