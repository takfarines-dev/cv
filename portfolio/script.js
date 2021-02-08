let typed = new Typed(".typed", {
  strings: [
    "Bonjour à tous et à toutes, Je me présente je m’appelle takfarines je suis ingénieur en électroniques systèmes de télécommunications et en compatibilité électromagnétique. j'ai décidé de me lancer à fond dans le l'apprentissage du code en autodidacte aux langes de programmation front HTML Css Javascript jquery sass et en  back-end  le Php avec le framework Symfony ça fait maintenant plus de 4 mois, je me suis forger une passion et une ambition de  devenir développeur professionnelle ",
  ],
  typeSpeed: 40,
});
let nav = document.querySelector("nav");
let lastscroltop = 0;
window.addEventListener("scroll", (e) => {
  let scrolposition = window.scrollY;

  if (scrolposition > lastscroltop) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  lastscroltop = scrolposition;
});
// ***********************COMPTEUR***********
let compteur = 0;
$(window).scroll(function () {
  let top = $(".counter").offset().top - window.innerHeight;
  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        counTo = parseInt($this.attr("data-count"));
      console.log(this);

      $({
        countNum: parseInt($this.text()),
      }).animate(
        {
          countNum: counTo,
        },
        {
          duration: 5000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

// *************AOS ANIMATE ON SCROL*******

AOS.init();
