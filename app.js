const card = document.querySelector('.card');
const aura = document.querySelector('.aura');

card.addEventListener('mouseover', (event) => {
  aura.style.top = event.offsetY + 'px';
  aura.style.left = event.offsetX + 'px';
  aura.style.width = event.target.offsetWidth + 'px';
  aura.style.height = event.target.offsetHeight + 'px';
  aura.style.opacity = 1;
});

card.addEventListener('mouseout', () => {
  aura.style.opacity = 0;
});
