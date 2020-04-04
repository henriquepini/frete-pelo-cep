//Instanciando os elementos
let btnCEP = document.querySelector('button');
let historicoElement = document.querySelector('.hist-container');
let boxLeft = document.querySelector('.box-left');
let boxRight = document.querySelector('.box-right');
let precoProduto = 999.9;

//Obtendo a ação realização no click do botão
btnCEP.addEventListener('click', () => {
  listarHistorico();
  console.log
});

function listarHistorico() {
  let cep = document.querySelector('#cep').value;
  let api = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(api)
    .then(response => response.json())
    .then(endereco => {
      let ufAtual = frete.find(e => e.sigla == endereco.uf);
      let freteAtual = precoProduto * (ufAtual.porcentagem/100);
      let valorTotal = precoProduto + (precoProduto * ufAtual.porcentagem/100);
      console.log(endereco);
      const divL = document.createElement('div');  

      const lograd = document.createElement('h1');
      lograd.textContent = endereco.logradouro;

      const bairro = document.createElement('p');
      bairro.textContent = endereco.bairro;

      const localidade = document.createElement('p');
      localidade.textContent = endereco.localidade;

      const uf = document.createElement('p');
      uf.textContent = endereco.uf;

      const cep = document.createElement('small');
      cep.textContent = endereco.cep;

      divL.appendChild(lograd);
      divL.appendChild(bairro);
      divL.appendChild(localidade);
      divL.appendChild(uf);
      divL.appendChild(cep);
      divL.classList.add('newDiv');
      boxLeft.appendChild(divL);


      const divR = document.createElement('div');

      const h1Frete = document.createElement('h1');
      h1Frete.textContent = 'Frete do produto';

      const pFrete = document.createElement('p');
      pFrete.textContent = 'R$ '+ freteAtual.toFixed(2);

      const h2Preco = document.createElement('h2');
      h2Preco.textContent = 'Valor final do produto';

      const pPreco = document.createElement('p');
      pPreco.textContent = 'R$ ' + valorTotal.toFixed(2);

      divR.appendChild(h1Frete);
      divR.appendChild(pFrete);
      divR.appendChild(h2Preco);
      divR.appendChild(pPreco);
      divR.classList.add('newDiv');
      boxRight.appendChild(divR);
    });
}

// Objeto para avaliar a UF atual, e 
const frete = [
  {nome: "Acre", sigla: "AC", porcentagem: 145},
  {nome: "Alagoas", sigla: "AL", porcentagem: 90},
  {nome: "Amapá", sigla: "AP", porcentagem: 145},
  {nome: "Amazonas", sigla: "AM", porcentagem: 140},
  {nome: "Bahia", sigla: "BA", porcentagem: 90},
  {nome: "Ceará", sigla: "CE", porcentagem: 100},
  {nome: "Distrito Federal", sigla: "DF", porcentagem: 55},
  {nome: "Espírito Santo", sigla: "ES", porcentagem: 70},
  {nome: "Goiás", sigla: "GO", porcentagem: 55},
  {nome: "Maranhão", sigla: "MA", porcentagem: 145},
  {nome: "Mato Grosso", sigla: "MT", porcentagem: 65},
  {nome: "Mato Grosso do Sul", sigla: "MS", porcentagem: 60},
  {nome: "Minas Gerais", sigla: "MG", porcentagem: 80},
  {nome: "Pará", sigla: "PA", porcentagem: 145},
  {nome: "Paraíba", sigla: "PB", porcentagem: 95},
  {nome: "Paraná", sigla: "PR", porcentagem: 40},
  {nome: "Pernambuco", sigla: "PE", porcentagem: 95},
  {nome: "Piauí", sigla: "PI", porcentagem: 140},
  {nome: "Rio de Janeiro", sigla: "RJ", porcentagem: 60},
  {nome: "Rio Grande do Norte", sigla: "RN", porcentagem: 140},
  {nome: "Rio Grande do Sul", sigla: "RS", porcentagem: 60},
  {nome: "Rondônia", sigla: "RO", porcentagem: 140},
  {nome: "Roraima", sigla: "RR", porcentagem: 140},
  {nome: "Santa Catarina", sigla: "SC", porcentagem: 50},
  {nome: "Campinas", sigla: "SP", porcentagem: 30},
  {nome: "Sumaré", sigla: "SP", porcentagem: 30},
  {nome: "Americana", sigla: "SP", porcentagem: 30},
  {nome: "Valinhas", sigla: "SP", porcentagem: 30},
  {nome: "Vinhedo", sigla: "SP", porcentagem: 30},
  {nome: "Salto", sigla: "SP", porcentagem: 30},
  {nome: "Sorocaba", sigla: "SP", porcentagem: 30},
  {nome: "Sergipe", sigla: "SE", porcentagem: 85},
  {nome: "Tocantins", sigla: "TO", porcentagem: 85}
]