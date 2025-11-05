  const images = document.querySelectorAll('.image');
  const fullContainer = document.getElementById('fullImageContainer');
  const fullImage = document.getElementById('fullImage');
  let currentIndex = 0;

  // Відкрити велике зображення при кліку
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showFullImage();
    });
  });

  function showFullImage() {
    fullImage.src = images[currentIndex].src;
    fullContainer.style.display = 'block';
  }

  // Закрити по кліку на фон
  fullContainer.addEventListener('click', (e) => {
    if (e.target === fullContainer) {
      fullContainer.style.display = 'none';
    }
  });

  // Обробка клавіш
  document.addEventListener('keydown', (e) => {
    if (fullContainer.style.display === 'block') {
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        showFullImage();
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showFullImage();
      } else if (e.key === 'Escape') {
        fullContainer.style.display = 'none';
      }
    }
  });
