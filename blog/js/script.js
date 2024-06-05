const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const backgroundSound = document.getElementById('background-sound');
const playSoundBtn = document.getElementById('play-sound-btn');

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('expand');
});

playSoundBtn.addEventListener('click', () => {
    if (backgroundSound.paused) {
        backgroundSound.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
        playSoundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        backgroundSound.pause();
        playSoundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('aboutVideo');
    var videoContainer = document.querySelector('.video-container');
  
    window.addEventListener('scroll', function() {
      var videoPosition = videoContainer.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.5;
  
      if (videoPosition < screenPosition) {
        video.play();
        videoContainer.style.opacity = 1; /* Show the video */
      } else {
        video.pause();
        videoContainer.style.opacity = 0; /* Hide the video */
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
  
    slides.forEach((slide, index) => {
      slide.style.animation = `slideFadeIn 0.5s ease forwards ${index * 0.1 + 0.5}s`;
    });
  });
    
