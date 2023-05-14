
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });

document.addEventListener('click', function(event) {
  var star = document.createElement('div');
  star.classList.add('star');
  star.style.top = (event.clientY - 5) + 'px';
  star.style.left = (event.clientX - 5) + 'px';
  document.body.appendChild(star);
});