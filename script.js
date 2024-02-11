document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.querySelector('#yesBtn');
  const noButton = document.querySelector('#noBtn');
  const valentinePopup = document.getElementById('valentinePopup');

  noButton.addEventListener('mouseover', function() {
    const popupWidth = window.innerWidth - noButton.offsetWidth;
    const popupHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * popupWidth);
    const randomY = Math.floor(Math.random() * popupHeight);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  });

  yesButton.addEventListener('click', function() {
    valentinePopup.style.display = 'block';
  });
});
