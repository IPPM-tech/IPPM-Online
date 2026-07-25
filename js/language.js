/* ==========================================================
   IPPM Website
   Multilingual Language Controller
   Version 1.0 (Run 1)
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ----------------------------------------------------
       Translation Dictionary
    ----------------------------------------------------- */

    const translations = {

        en: {

            institute: "Institute of Public Peace and Management",

            slogan: "Peace • Progress • Prosperity",

            motto: "Through Knowledge • Through Partnership • For Humanity",

            home: "Home",

            about: "About",

            membership: "Membership",

            training: "Training",

            focus: "Focus Areas",

            contact: "Contact",

            welcomeTitle: "Welcome to IPPM",

            welcomeText:
            "IPPM is an international professional institute committed to promoting sustainable peace, management excellence, research, professional development and global partnerships.",

            apply: "Become a Member",

            learn: "Learn More"

        },

        fr: {

            institute:
            "Institut International de la Paix et du Management",

            slogan:
            "Paix • Progrès • Prospérité",

            motto:
            "Par la Connaissance • Par le Partenariat • Pour l'Humanité",

            home:"Accueil",

            about:"À Propos",

            membership:"Adhésion",

            training:"Formation",

            focus:"Domaines",

            contact:"Contact",

            welcomeTitle:
            "Bienvenue à l'IPPM",

            welcomeText:
            "L'IPPM est un institut professionnel international dédié à la paix durable, au management, à la recherche et au développement professionnel.",

            apply:"Adhérer",

            learn:"En savoir plus"

        },

        es:{

            institute:
            "Instituto Internacional de Paz y Gestión",

            slogan:
            "Paz • Progreso • Prosperidad",

            motto:
            "A Través del Conocimiento • A Través de la Cooperación • Para la Humanidad",

            home:"Inicio",

            about:"Nosotros",

            membership:"Membresía",

            training:"Capacitación",

            focus:"Áreas",

            contact:"Contacto",

            welcomeTitle:
            "Bienvenido al IPPM",

            welcomeText:
            "IPPM es un instituto profesional internacional dedicado a promover la paz sostenible, la excelencia en la gestión y el desarrollo profesional.",

            apply:"Hazte Miembro",

            learn:"Más Información"

        }

    };

    /* ----------------------------------------------------
       Change Language
    ----------------------------------------------------- */

    function setLanguage(lang){

        document.querySelectorAll("[data-lang]").forEach(function(item){

            const key = item.getAttribute("data-lang");

            if(translations[lang][key]){

                item.innerHTML = translations[lang][key];

            }

        });

        localStorage.setItem("ippmLanguage",lang);

    }

    /* ----------------------------------------------------
       Language Selector
    ----------------------------------------------------- */

    const selector = document.getElementById("languageSelector");

    if(selector){

        selector.addEventListener("change",function(){

            setLanguage(this.value);

        });

    }

    /* ----------------------------------------------------
       Load Previous Selection
    ----------------------------------------------------- */

    const saved = localStorage.getItem("ippmLanguage") || "en";

    if(selector){

        selector.value = saved;

    }

    setLanguage(saved);

});
