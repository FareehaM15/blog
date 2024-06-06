document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');

    const commentName = document.createElement('strong');
    commentName.textContent = name;
    commentContainer.appendChild(commentName);

    const commentMessage = document.createElement('p');
    commentMessage.textContent = message;
    commentContainer.appendChild(commentMessage);

    document.getElementById('commentsContainer').appendChild(commentContainer);

    // Clear the form
    document.getElementById('commentForm').reset();
});

// Hide header on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px"; // Adjust to hide header
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
const soundButton = document.getElementById('soundButton');
        const bgMusic = document.getElementById('bgMusic');

        soundButton.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play();
                soundButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                bgMusic.pause();
                soundButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        function navigateHome() {
            window.location.href = "index.html";
        }

        function navigateToBlog() {
            const dropdown = document.getElementById('blogDropdown');
            const selectedBlog = dropdown.value;
            window.location.href = selectedBlog;
          }
          