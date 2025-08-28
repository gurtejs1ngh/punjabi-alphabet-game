document.addEventListener('DOMContentLoaded', () => {
    const alphabetContainer = document.getElementById('alphabet-container');
    const targetContainer = document.getElementById('target-container');
    const resetButton = document.getElementById('reset-button');
    const wrongAudio = document.getElementById('wrong-audio');

    let currentLetterIndex = 0;
    const alphabet = ['ੳ', 'ਅ', 'ੲ', 'ਸ', 'ਹ', 'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ੜ'];
    const shuffledAlphabet = [...alphabet].sort(() => Math.random() - 0.5);

    let draggedLetter = null; // To keep track of the dragged letter

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
        letterDiv.draggable = true; // for mouse-based drag and drop
        alphabetContainer.appendChild(letterDiv);

        letterDiv.addEventListener('dragstart', handleDragStart);
        letterDiv.addEventListener('touchstart', handleTouchStart);
    }

    targetContainer.addEventListener('dragover', handleDragOver);
    targetContainer.addEventListener('drop', handleDrop);
    targetContainer.addEventListener('touchmove', handleDragOver);
    targetContainer.addEventListener('touchend', handleDrop);

    function handleDragStart(e) {
        draggedLetter = e.target.textContent; // Store the dragged letter
        e.dataTransfer.setData('text', draggedLetter); // for mouse-based drag and drop
    }

    function handleTouchStart(e) {
        draggedLetter = e.target.textContent; // Store the dragged letter
        // For touch devices, prevent default behavior like scrolling
        e.preventDefault();
    }


    function handleDragOver(e) {
        e.preventDefault(); // Necessary for drop to work
    }

    function handleDrop(e) {
        e.preventDefault();
        // Use the stored draggedLetter for the logic
        if (draggedLetter === alphabet[currentLetterIndex]) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('draggable');
            newDiv.textContent = draggedLetter;
            targetContainer.appendChild(newDiv);
            currentLetterIndex++;

            if (currentLetterIndex === alphabet.length) {
                alert('ਪੈਂਤੀ ਪੂਰੀ ਕਰਨ ਲਈ ਬਹੁਤ ਬਹੁਤ ਵਧਾਈ ਹੋਵੇ!');
            }
        } else {
            wrongAudio.play();
        }
    }

    resetButton.addEventListener('click', initializeGame);

    initializeGame();
});



