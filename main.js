
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });

    document.addEventListener('click', function(e) {
      // Create a star element
      var star = document.createElement('div');
      
      // Set the star's style
      star.style.position = 'fixed';
      star.style.top = e.clientY + 'px';
      star.style.left = e.clientX + 'px';
      star.style.width = '0';
      star.style.height = '0';
      star.style.borderLeft = '20px solid transparent';
      star.style.borderRight = '20px solid transparent';
      star.style.borderBottom = '35px solid yellow';
      star.style.transform = 'rotate(35deg)';
      
      // Add the star to the page
      document.body.appendChild(star);
    });