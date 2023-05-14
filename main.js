
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });

    document.addEventListener("click", function(event) {
      var star = document.getElementById("star");
      star.style.display = "block";
      star.style.left = event.pageX - star.offsetWidth / 2 + "px";
      star.style.top = event.pageY - star.offsetHeight / 2 + "px";
      star.classList.add("animate");
      setTimeout(function() {
        star.style.display = "none";
        star.classList.remove("animate");
      }, 1000);
    });
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }