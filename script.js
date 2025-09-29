// Музыка
let music = new Audio("song.mp3"); // замени на свой файл
music.loop = true;
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
    document.querySelector(".music-btn").innerText = "🎵 Включить нашу песню";
  } else {
    music.play();
    isPlaying = true;
    document.querySelector(".music-btn").innerText = "⏸ Пауза";
  }
}

// Анимация сердечек
const heartsContainer = document.querySelector('.floating-hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

// Таймер совместного времени
const startDate = new Date("2025-03-29T00:00:00"); // дата начала отношений

function updateTimeTogether() {
  const now = new Date();
  const diff = now - startDate; // разница в миллисекундах

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timeTogether").innerText =
    `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
}

// Обновляем каждую секунду
setInterval(updateTimeTogether, 1000);
updateTimeTogether(); // сразу при загрузке страницы

