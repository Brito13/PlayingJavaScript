




const createCard = (carta) =>  {  

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('cartas');
    imgCarta.src = `/Assets/cartas/${carta}.png`;
    return imgCarta;
}

export default createCard;