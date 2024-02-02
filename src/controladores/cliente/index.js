function calcularConsumoMedioPorMes(consumo) {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  const consumoMedioPorMes = Array(12).fill(0);

  for (let i = 0; i < consumo.length; i++) {
    for (let j = 0; j < consumo[i].length; j++) {
      consumoMedioPorMes[j] += consumo[i][j];
    }
  }

  for (let i = 0; i < consumoMedioPorMes.length; i++) {
    consumoMedioPorMes[i] /= consumo.length;
    console.log(`Consumo médio de ${meses[i]}: ${consumoMedioPorMes[i].toFixed(2)}`);
  }

  return consumoMedioPorMes;
}

function encontrarMaiorConsumo(consumo, consumoMedioPorMes) {
  let maiorConsumo = 0;
  let ano = 2010;
  let mes = 0;

  for (let i = 0; i < consumo.length; i++) {
    for (let j = 0; j < consumo[i].length; j++) {
      if (consumo[i][j] > maiorConsumo) {
        maiorConsumo = consumo[i][j];
        ano = 2010 + i;
        mes = j;
      }
    }
  }

  console.log(`O mês/ano com maior consumo foi ${meses[mes]} de ${ano} com ${maiorConsumo} unidades de energia.`);
}

const consumoMedioPorMes = calcularConsumoMedioPorMes(consumo);

encontrarMaiorConsumo(consumo, consumoMedioPorMes);
