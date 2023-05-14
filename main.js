
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
			star.className = 'star';
			star.style.top = event.pageY + 'px';
			star.style.left = event.pageX + 'px';
			document.body.appendChild(star);
			setTimeout(function() {
				star.remove();
			}, 1000);
		});