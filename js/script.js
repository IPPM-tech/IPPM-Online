/* =====================================================
   IPPM Website
   Main JavaScript
   Institute of Public Peace and Management
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------
       Sticky Navigation
    -------------------------------- */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });

    /* -------------------------------
       Scroll Reveal
    -------------------------------- */

    const reveals = document.querySelectorAll("section");

    function revealSections() {

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            const visible = 120;

            if (top < window.innerHeight - visible) {

                section.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealSections);

    revealSections();

    /* -------------------------------
       Back To Top Button
    -------------------------------- */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topButton";

    document.body.appendChild(topButton);

    topButton.onclick = () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.style.display="block";

        }

        else{

            topButton.style.display="none";

        }

    });

    /* -------------------------------
       Active Navigation
    -------------------------------- */

    const navLinks=document.querySelectorAll(".navbar a");

    navLinks.forEach(link=>{

        if(link.href===window.location.href){

            link.classList.add("active");

        }

    });

    /* -------------------------------
       Floating WhatsApp Button
    -------------------------------- */

    const whatsapp=document.createElement("a");

    whatsapp.href="https://wa.me/message/UBFOZ3D7BZ44O1?src=qr";

    whatsapp.target="_blank";

    whatsapp.id="whatsappButton";

    whatsapp.innerHTML="💬";

    document.body.appendChild(whatsapp);

    /* -------------------------------
       Dynamic Footer Year
    -------------------------------- */

    const footer=document.querySelector("footer");

    if(footer){

        footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

    }

    /* -------------------------------
       Hero Fade
    -------------------------------- */

    const hero=document.querySelector(".hero-overlay");

    if(hero){

        hero.style.opacity=0;

        setTimeout(()=>{

            hero.style.opacity=1;

        },300);

    }

});

/* ======================================
   Loading Screen
====================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
