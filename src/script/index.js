const areas = document.querySelectorAll('.area');
let cont = 0;

areas.forEach(div => {
    
    div.onclick= function(){

        if(this.innerHTML === ''){
        let mark = cont %2 === 0 ? 'X' : 'O';
        this.innerHTML= `<p>${mark}</p>`;
        cont++;
        detectWin();
    } else{
        alert('Você não pode mais marcar aqui, tente outro quadrado!')
    }
    }

});

function detectWin() {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const areaA = document.getElementById(a).innerHTML;
        const areaB = document.getElementById(b).innerHTML;
        const areaC = document.getElementById(c).innerHTML;

        if (areaA === areaB && areaB === areaC && areaA !== '') {
            // Um jogador venceu!
            const winner = areaA === 'X' ? 'Jogador X' : 'Jogador O';
            alert(`${winner} venceu!`);
            // Aqui você pode adicionar lógica para encerrar o jogo ou reiniciar.
            break; // Saia do loop, pois já encontramos um vencedor.
        }
    }
}