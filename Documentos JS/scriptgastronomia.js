document.addEventListener('DOMContentLoaded', (event) => {
    document.body.onkeydown = function(event) {
        console.log(`Tecla presionada: ${event.key}`);
        
        // Cambiar el tipo de letra dependiendo de la tecla presionada
        let fontFamily = '';
        if (event.key === 'a' || event.key === 'A') {
            fontFamily = 'Arial, sans-serif';
        } else if (event.key === 's' || event.key === 'S') {
            fontFamily = '"Courier New", Courier, monospace';
        } else if (event.key === 'd' || event.key === 'D') {
            fontFamily = '"Times New Roman", Times, serif';
        }

        if (fontFamily) {
            document.body.style.fontFamily = fontFamily;
        }
    };
});
