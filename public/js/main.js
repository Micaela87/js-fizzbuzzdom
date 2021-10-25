const gameContainer = document.querySelector('.square-container');

for (let i = 1; i <= 100; i++) {
    let square = document.createElement('div');
    if ((i % 3 == 0) && (i % 5 == 0)) {
        square.classList.add('fizzbuzz');
        square.innerHTML = 'fizzbuzz';
        gameContainer.append(square);
    } else if (i % 3 == 0) {
        square.classList.add('fizz');
        square.innerHTML = 'fizz';
        gameContainer.append(square);
    } else if (i % 5 == 0) {
        square.classList.add('buzz');
        square.innerHTML = 'buzz';
        gameContainer.append(square);
    } else {
        square.classList.add('normal');
        square.innerHTML = i;
        gameContainer.append(square);
    }
};