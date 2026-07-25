/* =====================================================
   IPPM Animated Statistics Counter
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const speed = 100;

    function startCounter(counter){

        const target = Number(counter.getAttribute("data-target"));

        const update = () => {

            const current = Number(counter.innerText);

            const increment = Math.ceil(target / speed);

            if(current < target){

                counter.innerText = current + increment;

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        };

        update();

    }

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                startCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.6

    });

    counters.forEach(counter=>{

        counter.innerText=0;

        observer.observe(counter);

    });

});
