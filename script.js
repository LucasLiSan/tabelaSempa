document.addEventListener('DOMContentLoaded', function () {
  const vencedoresJogos = document.querySelectorAll('.vencedor-jogo');

  vencedoresJogos.forEach(vencedor => {
    const jogoRelacionadoID = vencedor.getAttribute('data-jogo-relacionado');
    const equipe1 = document.getElementById(`equipe-1-${jogoRelacionadoID}`);
    const equipe2 = document.getElementById(`equipe-2-${jogoRelacionadoID}`);
    const textoOriginal = vencedor.textContent;

    vencedor.addEventListener('mouseover', function () {
      vencedor.textContent = `${equipe1.textContent} x ${equipe2.textContent}`;
    });

    vencedor.addEventListener('mouseout', function () {
      vencedor.textContent = textoOriginal;
    });
  });
});