function toggleCardButtonColors() {
    const card = document.querySelector('.card');
    const button = document.querySelector('.boton-verFotos');

    card.classList.toggle('card-hover');
    button.classList.toggle('boton-hover');
}