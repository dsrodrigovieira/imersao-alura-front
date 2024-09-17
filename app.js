function buscaPersonagem() {
    // Obtém o elemento HTML onde os resultados da busca serão exibidos.
    let resultado = document.getElementById("resultado");
  
    // Obtém o termo de busca digitado pelo usuário e converte para letras minúsculas.
    let termoBusca = document.getElementById("termoBusca").value.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da busca.
    let textoResultado = "";
  
    // Verifica se o usuário digitou algum termo de busca.
    if (!termoBusca.trim()) {
      // Se o termo de busca estiver vazio, exibe uma mensagem informando que não há resultados.
      textoResultado = `<p class="sem-resultado-busca">Não localizei nenhuma informação.</br>Digite um termo para pesquisar.</p>`;
    } else {
      // Percorre a lista de personagens.
      for (let personagem of personagensZelda) {
        // Converte o nome e a descrição do personagem para letras minúsculas para facilitar a comparação.
        let nome = personagem.nome.toLowerCase();
        let descricao = personagem.descricao.toLowerCase();
  
        // Verifica se o termo de busca está presente no nome ou na descrição do personagem.
        if (nome.includes(termoBusca) || descricao.includes(termoBusca)) {
          // Se o termo de busca foi encontrado, adiciona o personagem aos resultados da busca.
          textoResultado += `
            <div class="item-resultado">
              <h2>${personagem.nome}</h2>
              <p>${personagem.descricao}</p>
              <a href=${personagem.link}>Mais informações</a>
            </div>
          `;
        }
      }
  
      // Verifica se algum resultado foi encontrado.
      if (!textoResultado) {
        // Se nenhum resultado foi encontrado, exibe uma mensagem informando que não há resultados.
        textoResultado = `<p class="sem-resultado-dados">Nada encontrei nada sobre isso :(</br>Teste novamente mais tarde.</p>`;
      }
    }
  
    // Atualiza o conteúdo HTML do elemento "resultado" com os resultados da busca.
    resultado.innerHTML = textoResultado;
  }