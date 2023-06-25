// Array de exemplo
const data = ['Maçã', 'Banana', 'Laranja', 'Abacaxi', 'Pera'];

// Função para buscar um elemento no array
function searchFruta() {
  const search = document.getElementById('search');
  const searchValue = search.value;

  // Utiliza o método "find" do array para buscar o elemento que corresponde ao valor de busca
  // Usa a função de callback para comparar os itens ignorando o caso (maiúsculas/minúsculas)
  const result = data.find(item => item.toLowerCase() === searchValue.toLowerCase());

  const resultElement = document.getElementById('result');
  if (result) {
    // Se o elemento for encontrado, exibe uma mensagem com o elemento encontrado
    resultElement.textContent = `Elemento encontrado: ${result}`;
  } else {
    // Caso contrário, exibe uma mensagem indicando que o elemento não foi encontrado
    resultElement.textContent = 'Elemento não encontrado';
  }
}

// Adiciona um listener de eventos para o input de busca
const search = document.getElementById('search');

// Define o evento "input" para acionar a função de busca quando o valor do input é alterado
search.addEventListener('input', searchFruta);
