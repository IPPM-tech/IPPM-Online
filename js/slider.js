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
    "images/hero5.jpg",
    "images/hero6.jpg",
    "images/hero7.jpg",
    "images/hero8.jpg"
];

    let current = Math.floor(Math.random() * images.length);

heroImage.src = images[current];

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

    // Rotate every 8 seconds

    let slider = setInterval(changeImage,8000);

    // Pause when page is hidden

    document.addEventListener("visibilitychange",function(){

        if(document.hidden){

            clearInterval(slider);

        }else{

            slider=setInterval(changeImage,7000);

        }

    });

});
