document.addEventListener('DOMContentLoaded', () => {
  const alphabetContainer = document.getElementById('alphabet-container');
  const targetContainer = document.getElementById('target-container');
  const resetButton = document.getElementById('reset-button');
  const wrongAudio = document.getElementById('wrong-audio');

  let currentLetterIndex = 0;
    const alphabet = ['ੳ', 'ਅ', 'ੲ', 'ਸ', 'ਹ', 'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ੜ'];


  const shuffledAlphabet = [...alphabet].sort(() => Math.random() - 0.5);

  function initializeGame() {
      alphabetContainer.innerHTML = '';
      targetContainer.innerHTML = '';
      currentLetterIndex = 0;

      shuffledAlphabet.forEach(letter => createDraggableLetter(letter));
  }

  function createDraggableLetter(letter) {
      const letterDiv = document.createElement('div');
      letterDiv.classList.add('draggable');
      letterDiv.textContent = letter;
      letterDiv.draggable = true;
      alphabetContainer.appendChild(letterDiv);

      letterDiv.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text', letter);
      });
  }

  targetContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
  });

  targetContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      const letter = e.dataTransfer.getData('text');
      if (letter === alphabet[currentLetterIndex]) {
          const newDiv = document.createElement('div');
          newDiv.classList.add('draggable');
          newDiv.textContent = letter;
          targetContainer.appendChild(newDiv);
          currentLetterIndex++;

          if (currentLetterIndex === alphabet.length) {
              alert('ਪੈਂਤੀ ਪੂਰੀ ਕਰਨ ਲਈ ਬਹੁਤ ਬਹੁਤ ਵਧਾਈ ਹੋਵੇ!');
          }
      } else {
          wrongAudio.play();
      }
  });

  resetButton.addEventListener('click', initializeGame);

  initializeGame();
});
