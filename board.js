const keys = document.querySelectorAll('.key');
        const textInput = document.getElementById('textInput');

        
        keys.forEach(key => {
            key.addEventListener('click', () => {
                if (key.id === 'space') {
                    textInput.value += ' ';
                } else if (key.id === 'backspace') {
                    textInput.value = textInput.value.slice(0, -1);
                } else if (key.id === 'enter') {
                    textInput.value += '\n'; 
                } else {
                    textInput.value += key.textContent;
                }
            });
        });