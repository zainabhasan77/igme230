
//this refers to the headline on my home page
$(".headline").each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
//this allows my headline to animate on a loop forever.
anime.timeline({
        loop: true
    })
//this targets the beginning of my sentence
    .add({
        targets: '.headline .letters',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
//this targets animating each letter, changes the opacity as the animation goes through, the udartion, and easing
    .add({
        targets: '.headline .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        offset: '-=775',
        delay: function (el, i) {
            return 34 * (i + 1)
        }
    })

//most of this code is from tutorialspoint
//this identifies the slideIndex as 1
var slideIndex = 1;
showSlides(slideIndex);

// Next and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//this identifies which slide is shown per dot clicked.
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
