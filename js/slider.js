/* ==========================================================
   IPPM Website
   Hero Banner Slider
   Version 1.0 (Run 1)
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Hero image element
    const heroImage = document.querySelector(".hero img");

    // Stop if no hero image exists
    if (!heroImage) return;

    // Images to rotate
    const images = [
        "images/hero1.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg",
        "images/hero4.jpg",
        "images/hero5.jpg"
    ];

    let current = 0;

    // Fade speed
    heroImage.style.transition = "opacity 1.2s ease";

    function changeImage() {

        heroImage.style.opacity = 0;

        setTimeout(function () {

            current++;

            if (current >= images.length) {
                current = 0;
            }

            heroImage.src = images[current];

            heroImage.style.opacity = 1;

        }, 700);

    }

    // Rotate every 7 seconds

    let slider = setInterval(changeImage,7000);

    // Pause when page is hidden

    document.addEventListener("visibilitychange",function(){

        if(document.hidden){

            clearInterval(slider);

        }else{

            slider=setInterval(changeImage,7000);

        }

    });

});
