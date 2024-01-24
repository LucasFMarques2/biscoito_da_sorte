const cookieClosed = document.querySelector('#cookClose');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnOther = document.querySelector('#btnOther');


const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}


const showAndHide = () => {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

const openCookie = () => {
    const randomNumber = getRandomNumber();

    switch (randomNumber) {
        case 1:
            screen2.querySelector('span').innerText = 'A perseverança é a chave para alcançar seus maiores sonhos. Continue persistindo, e o sucesso virá.'
            break;

        case 2:
            screen2.querySelector('span').innerText = 'Grandes jornadas começam com pequenos passos. Este é o momento de começar a trilhar o caminho que o levará ao seu destino.'
            break;
        case 3:
            screen2.querySelector('span').innerText = 'Acredite em si mesmo, pois a confiança é o alicerce de grandes realizações. Você é mais forte do que imagina'
            break;
        case 4:
            screen2.querySelector('span').innerText = 'A felicidade está nas pequenas coisas. Hoje é o dia perfeito para apreciar as pequenas alegrias que a vida oferece.'
            break;
        case 5:
            screen2.querySelector('span').innerText = 'Seja gentil consigo mesmo e com os outros. A generosidade cria laços duradouros e espalha a luz em seu caminho.'
            break;
    }

    showAndHide();
}

const closeCookie = () => {
    getRandomNumber()
    showAndHide();
}


cookieClosed.addEventListener('click', openCookie)
btnOther.addEventListener('click', closeCookie)