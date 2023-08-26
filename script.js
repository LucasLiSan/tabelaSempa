let selectedCell = null;

  function changeText(cell) {
    if (selectedCell) {
      selectedCell.textContent = selectedCell.textContent.replace("Vencedor Jogo 1", "EMEB Oleriano Gonçalves x EMEB Fernando Sérgio");
      selectedCell.classList.remove("selected");
    }

    if (cell !== selectedCell) {
      selectedCell = cell;
      selectedCell.classList.add("selected");
      selectedCell.textContent = selectedCell.textContent.replace("EMEB Oleriano Gonçalves x EMEB Fernando Sérgio", "Vencedor Jogo 1");
    } else {
      selectedCell = null;
    }
  }

  function handleClick(event) {
    const clickedCell = event.target.closest("td");
    if (clickedCell) {
      changeText(clickedCell);
    } else if (selectedCell) {
      changeText(selectedCell);
    }
  }