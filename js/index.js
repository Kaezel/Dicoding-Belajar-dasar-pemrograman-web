// untuk carousel, menyetting agar carousel dan muncul dan berganti2 sendiri dengan waktu 3 detik

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
}

// smooth scroll ketika tombol ditekan

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});