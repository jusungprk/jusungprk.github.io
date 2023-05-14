
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });

    document.addEventListener('click', function (event) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${event.clientY}px`;
      star.style.left = `${event.clientX}px`;
      document.body.appendChild(star);
    });