const realizarSomatorio = (primeiroPar) => {
  const quatroParesAFrente = 8;
  let soma = 0;

  for (let i = primeiroPar; i <= primeiroPar + quatroParesAFrente; i += 2) {
    soma += i;
  }
  return soma;
};

const soma5ParesCallback = (X, callback) => {
  const primeiroPar = X % 2 === 0 ? X : X + 1;

  const resultado = callback(primeiroPar);

  console.log(resultado);

  return resultado;
};

soma5ParesCallback(4, realizarSomatorio);
soma5ParesCallback(11, realizarSomatorio);
