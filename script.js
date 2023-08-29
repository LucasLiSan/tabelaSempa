//document.addEventListener('DOMContentLoaded', function () {
//  const vencedoresJogos = document.querySelectorAll('.vencedor-jogo');

//  vencedoresJogos.forEach(vencedor => {
//    const jogoRelacionadoID = vencedor.getAttribute('data-jogo-relacionado');
//    const equipe1 = document.getElementById(`equipe-1-${jogoRelacionadoID}`);
//    const equipe2 = document.getElementById(`equipe-2-${jogoRelacionadoID}`);
//    const textoOriginal = vencedor.textContent;

//    vencedor.addEventListener('mouseover', function () {
//      vencedor.textContent = `${equipe1.textContent} x ${equipe2.textContent}`;
//    });

//    vencedor.addEventListener('mouseout', function () {
//      vencedor.textContent = textoOriginal;
//    });
//  });
//});

//document.addEventListener('DOMContentLoaded', function () {
//  const vencedoresJogos = document.querySelectorAll('.vencedor-jogo');

//  vencedoresJogos.forEach(vencedor => {
//    const jogoRelacionadoID = vencedor.getAttribute('data-jogo-relacionado');
    
    // Faz uma requisição para o arquivo jogos.html
//    fetch('2808.html')
//      .then(response => response.text())
//      .then(data => {
//        const parser = new DOMParser();
//        const doc = parser.parseFromString(data, 'text/html');
        
//        const equipe1 = doc.getElementById(`equipe-1-${jogoRelacionadoID}`);
//        const equipe2 = doc.getElementById(`equipe-2-${jogoRelacionadoID}`);
//        const textoOriginal = vencedor.textContent;

//        vencedor.addEventListener('mouseover', function () {
//          vencedor.textContent = `${equipe1.textContent} x ${equipe2.textContent}`;
//        });

//        vencedor.addEventListener('mouseout', function () {
//          vencedor.textContent = textoOriginal;
//        });
//      })
//      .catch(error => {
//        console.error('Erro ao carregar o arquivo:', error);
//      });
//  });
//});

function manipularArquivo(arquivo, vencedor) {
  fetch(arquivo)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      
      const jogoRelacionadoID = vencedor.getAttribute('data-jogo-relacionado');
      const equipe1 = doc.getElementById(`equipe-1-${jogoRelacionadoID}`);
      const equipe2 = doc.getElementById(`equipe-2-${jogoRelacionadoID}`);
      const textoOriginal = vencedor.textContent;

      vencedor.addEventListener('mouseover', function () {
        vencedor.textContent = `${equipe1.textContent} x ${equipe2.textContent}`;
      });

      vencedor.addEventListener('mouseout', function () {
        vencedor.textContent = textoOriginal;
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const vencedoresJogos = document.querySelectorAll('.vencedor-jogo');

  vencedoresJogos.forEach(vencedor => {
    const arquivo = '2808.html'; // Substitua pelo nome do arquivo específico
    manipularArquivo(arquivo, vencedor);
  });

  // Repita o processo para mais arquivos, se necessário
  vencedoresJogos.forEach(vencedor => {
    const arquivo2 = '2908.html'; // Substitua pelo nome de outro arquivo
    manipularArquivo(arquivo2, vencedor);
  });

  vencedoresJogos.forEach(vencedor => {
    const arquivo2 = '3008.html'; // Substitua pelo nome de outro arquivo
    manipularArquivo(arquivo2, vencedor);
  });

  vencedoresJogos.forEach(vencedor => {
    const arquivo2 = '3108.html'; // Substitua pelo nome de outro arquivo
    manipularArquivo(arquivo2, vencedor);
  });

  vencedoresJogos.forEach(vencedor => {
    const arquivo2 = '0109.html'; // Substitua pelo nome de outro arquivo
    manipularArquivo(arquivo2, vencedor);
  });

  vencedoresJogos.forEach(vencedor => {
    const arquivo2 = '0609.html'; // Substitua pelo nome de outro arquivo
    manipularArquivo(arquivo2, vencedor);
  });
});
