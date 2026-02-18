// Render notasi musik menggunakan ABCjs
document.addEventListener('DOMContentLoaded', function() {
    // Treble clef
    ABCJS.renderAbc('treble-clef', 'X:1\nK:C\nM:4/4\nL:1/4\nG4|');

    // Bass clef
    ABCJS.renderAbc('bass-clef', 'X:1\nK:C bass\nM:4/4\nL:1/4\nE,,4|');

    // C major scale
    ABCJS.renderAbc('c-major-scale', 'X:1\nK:C\nM:4/4\nL:1/4\nC D E F G A B c|');
});

// Fungsi quiz sederhana
function checkAnswer(correct, inputId) {
    const answer = document.getElementById(inputId).value.toLowerCase();
    const result = document.getElementById('result' + inputId.slice(-1));
    if (answer === correct) {
        result.textContent = 'Benar!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Salah, coba lagi.';
        result.style.color = 'red';
    }
}