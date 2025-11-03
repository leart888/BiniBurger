// floating icons background — tani para produkteve
const icons = ['🍔', '🍕', '🍩']; // mund t’i ndryshosh sipas dëshirës
for (let i = 0; i < 40; i++) {
  const icon = document.createElement('div');
  icon.className = 'floating-icon';
  icon.innerText = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + 'vw';
  icon.style.top = Math.random() * 100 + 'vh';
  icon.style.animationDuration = (10 + Math.random() * 20) + 's';
  icon.style.fontSize = (20 + Math.random() * 60) + 'px';
  icon.style.opacity = 0.05 + Math.random() * 0.5;
  icon.style.color = Math.random() > 0.5 ? 'black' : 'white';
  document.body.appendChild(icon);
}
