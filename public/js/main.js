const gameContainer = document.querySelector('.square-container');

for (let i = 1; i <= 100; i++) {
    let square = document.createElement('div');
    square.classList.add('normal');
    square.innerHTML = i;
    if ((i % 3 == 0) && (i % 5 == 0)) {
        square.classList.add('fizzbuzz');
        square.innerHTML = 'fizzbuzz';
    } else if (i % 3 == 0) {
        square.classList.add('fizz');
        square.innerHTML = 'fizz';
    } else if (i % 5 == 0) {
        square.classList.add('buzz');
        square.innerHTML = 'buzz';
        gameContainer.append(square);
    }

    gameContainer.append(square);
};