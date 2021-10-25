const gameContainer = document.querySelector('.container');


for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i, 'divisibile per 5 e per 3')
    } else if (i % 3 == 0) {
        console.log(i, 'divisibile solo per 3')
    } else if (i % 5 == 0) {
        console.log(i, 'divisibile solo per 5')
    }
}