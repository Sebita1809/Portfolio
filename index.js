// ===================== I18N =====================
const i18n = {
    en: {
        nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        contact: "Contact Me"
        },
        presentationName: "I'm Sebastian",
        presentationText:
        "I'm a 22-year-old programming student with a strong focus on front-end development, and a solid understanding of back-end technologies as well.",
        languagesTitle: "Programming languages",

        aboutMe: "About Me",
        aboutMeText:
        "Hello, my name is Sebastian Diaz, a programming student with a focus on web development. My programming journey began a few years ago when I discovered the power of code and how it could accomplish so many things. My goals include mastering frameworks like React and Node.js, as well as participating in projects that impact people. Outside of programming, I really enjoy cooking, hanging out with friends, and playing video games. I'm always willing to work in a team, collaborate, and learn new things.",

        projects: "Projects",
        project1: "Chef AI",
        project1Text:
        "Smart cheff is an AI that helps you with recipies. You only have to tell him what ingridients do you have in your house and it will start making you five healthy recipies.",
        project2: "808 <br> Beat-Lab",
        project2Text:
        "The 808 Beat-Lap is a musical studio Landing Page. Here you can talk to the producer and create your own songs. You can also listen to the songs that other people have created.",

        contactMe: "Contact Me",
        name: "Name",
        email: "Email",
        message: "Leave your message here",
        send: "Send",
        contactP:
        "Feel free reach out for collaborations or any question that you have"
    },

    es: {
        nav: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto"
        },
        presentationName: "Soy Sebastián",
        presentationText:
        "Tengo 22 años y soy estudiante de Programación. Me especializo principalmente en el front-end, pero también tengo buen entendimiento de back-end.",
        languagesTitle: "Lenguajes de programación",

        aboutMe: "Sobre mí",
        aboutMeText:
        "Hola, me llamo Sebastián Díaz, estudiante de programación enfocado en desarrollo web. Empecé hace unos años cuando descubrí el poder del código y todo lo que se puede lograr. Mis objetivos incluyen dominar frameworks como React y Node.js, y participar en proyectos que impacten a las personas. Fuera de la programación, disfruto cocinar, salir con amigos y jugar videojuegos. Siempre estoy dispuesto a trabajar en equipo, colaborar y aprender cosas nuevas.",

        projects: "Proyectos",
        project1: "Chef AI",
        project1Text:
        "Smart Chef es una IA que te ayuda con las recetas. Solo tenés que decirle qué ingredientes tenés en tu casa y va a generarte cinco recetas saludables.",
        project2: "808 <br> Beat-Lab",
        project2Text:
        "808 Beat-Lab es una landing page de un estudio musical. Acá podés hablar con el productor y crear tus propias canciones. También podés escuchar los temas que hicieron otras personas.",

        contactMe: "Contacto",
        name: "Nombre",
        email: "Email",
        message: "Dejá tu mensaje aquí",
        send: "Enviar",
        contactP:
        "Escribime para colaborar o por cualquier consulta que tengas"
    }
};

// ===================== Utilidades =====================
const $ = (sel, ctx = document) => ctx.querySelector(sel);

const setText = (el, value, { html = false } = {}) => {
    if (!el) return;
    if (html) el.innerHTML = value;
    else el.textContent = value;
    };

// ===================== Mapeo de elementos =====================
const els = {
    // Nav (<a><ul>...</ul></a>) por orden
    navHome: $("header nav a:nth-child(1) ul"),
    navAbout: $("header nav a:nth-child(2) ul"),
    navProj: $("header nav a:nth-child(3) ul"),
    navCont: $("header nav a:nth-child(4) ul"),

    // Home
    presentationName: $("#presentationName"),
    presentationText: $("#presentationText"),
    languagesTitle: $("#languajes"), 

    // About
    aboutMe: $("#aboutMe"),
    aboutMeText: $("#aboutMeText"),

    // Projects (títulos y textos)
    projects: $("#projects"),
    project1: $(".projects_card_container .projects_card:nth-child(1) h3"),
    project1Text: $(".projects_card_container .projects_card:nth-child(1) p"),
    project2: $(".projects_card_container .projects_card:nth-child(2) h3"),
    project2Text: $(".projects_card_container .projects_card:nth-child(2) p"),

    // Contact
    contactMe: $("#contactMe"),
    name: $("#name"),
    email: $("#email"),
    message: $("#message"),
    sendBtn: $(".contactMe_form button[type='submit']"),
    contactP: $(".contactMe_social > p")
};

// ===================== Aplicar idioma =====================
function applyLang(lang) {
    const t = i18n[lang];
    if (!t) return;

    // Nav
    setText(els.navHome, t.nav.home);
    setText(els.navAbout, t.nav.about);
    setText(els.navProj, t.nav.projects);
    setText(els.navCont, t.nav.contact);

    // Home
    setText(els.presentationName, t.presentationName);
    setText(els.presentationText, t.presentationText);
    setText(els.languagesTitle, t.languagesTitle);

    // About
    setText(els.aboutMe, t.aboutMe);
    setText(els.aboutMeText, t.aboutMeText);

    // Projects
    setText(els.projects, t.projects);
    setText(els.project1, t.project1, { html: true }); 
    setText(els.project1Text, t.project1Text);
    setText(els.project2, t.project2, { html: true }); 
    setText(els.project2Text, t.project2Text);

    // Contact
    setText(els.contactMe, t.contactMe);
    setText(els.name, t.name);
    setText(els.email, t.email);
    setText(els.message, t.message);
    setText(els.sendBtn, t.send);
    setText(els.contactP, t.contactP);

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
}

// ===================== Toggle idioma =====================
const btn = document.querySelector(".traducir_button");
let current =
    localStorage.getItem("lang") || document.documentElement.lang || "en";

applyLang(current);

btn?.addEventListener("click", () => {
    current = current === "en" ? "es" : "en";
    applyLang(current);
});


// ===================== Formulario de contacto =====================
(function() {
    emailjs.init("gY4XPKEUjBw_hnk5N");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_aoerkfp", "template_z8uawq8", this)
        .then(function() {
            alert('¡Correo enviado con éxito!');
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});
