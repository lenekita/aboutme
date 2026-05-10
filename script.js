const translations = {
  en: {
    nav_work: "Work", nav_services: "Services", nav_process: "Process", nav_contact: "Contact",
    hero_eyebrow: "Website creator & developer",
    hero_title: "Elegant websites for creative brands, independent projects and bold ideas.",
    hero_text: "I design and build modern, responsive websites that feel clear, refined and memorable — from portfolio pages to cinematic brand experiences.",
    hero_cta_primary: "Start a project", hero_cta_secondary: "View portfolio",
    hero_card_text: "Responsive design, elegant structure, smooth interactions.",
    intro_text: "A website should not only look good. It should guide, reassure, convert and leave a signature impression.",
    work_eyebrow: "Selected work", work_title: "Portfolio highlight",
    project_title: "A cinematic digital showcase",
    project_text: "A visual website built around atmosphere, motion, reels and strong identity. This project reflects the type of expressive, modern websites I can create for artists, creators and small brands.",
    project_link: "Visit irreallab.fr",
    services_eyebrow: "What I create", services_title: "Websites with style and purpose",
    service_1_title: "Portfolio websites", service_1_text: "Clean, elegant pages to present your work, your universe and your contact information.",
    service_2_title: "Brand landing pages", service_2_text: "Impactful one-page websites for launches, announcements, services or creative projects.",
    service_3_title: "Responsive development", service_3_text: "Fast, mobile-friendly pages prepared for GitHub Pages and simple hosting solutions.",
    process_eyebrow: "How we work", process_title: "Simple, clear, efficient",
    step_1_title: "1. Direction", step_1_text: "We define the style, structure, audience and main goal of the website.",
    step_2_title: "2. Creation", step_2_text: "I build the pages with responsive design, clear sections and subtle interactions.",
    step_3_title: "3. Launch", step_3_text: "The site is prepared for upload, SEO basics and easy future updates.",
    contact_eyebrow: "Let’s build something", contact_title: "Need a website that feels modern, personal and professional?", contact_text: "Tell me about your project and I will help you shape a clear, elegant online presence.", contact_cta: "Contact me",
    footer_rights: "© Hélène Nechita. All rights reserved."
  },
  fr: {
    nav_work: "Réalisations", nav_services: "Services", nav_process: "Méthode", nav_contact: "Contact",
    hero_eyebrow: "Créatrice et développeuse de sites web",
    hero_title: "Des sites élégants pour les marques créatives, les projets indépendants et les idées fortes.",
    hero_text: "Je conçois et développe des sites modernes, responsives, clairs et mémorables — du portfolio à l’expérience de marque plus cinématographique.",
    hero_cta_primary: "Démarrer un projet", hero_cta_secondary: "Voir le portfolio",
    hero_card_text: "Design responsive, structure élégante, interactions fluides.",
    intro_text: "Un site ne doit pas seulement être beau. Il doit guider, rassurer, convertir et laisser une impression forte.",
    work_eyebrow: "Sélection", work_title: "Projet portfolio",
    project_title: "Une vitrine digitale cinématographique",
    project_text: "Un site visuel construit autour de l’atmosphère, du mouvement, des reels et d’une identité forte. Ce projet reflète le type de sites expressifs et modernes que je peux créer pour des artistes, créateurs et petites marques.",
    project_link: "Visiter irreallab.fr",
    services_eyebrow: "Ce que je crée", services_title: "Des sites avec du style et du sens",
    service_1_title: "Sites portfolio", service_1_text: "Des pages claires et élégantes pour présenter votre travail, votre univers et vos informations de contact.",
    service_2_title: "Landing pages de marque", service_2_text: "Des sites one-page impactants pour les lancements, annonces, services ou projets créatifs.",
    service_3_title: "Développement responsive", service_3_text: "Des pages rapides, adaptées au mobile, prêtes pour GitHub Pages et les solutions d’hébergement simples.",
    process_eyebrow: "Méthode", process_title: "Simple, clair, efficace",
    step_1_title: "1. Direction", step_1_text: "Nous définissons le style, la structure, le public et l’objectif principal du site.",
    step_2_title: "2. Création", step_2_text: "Je construis les pages avec un design responsive, des sections claires et des interactions subtiles.",
    step_3_title: "3. Mise en ligne", step_3_text: "Le site est préparé pour la mise en ligne, les bases SEO et les futures modifications.",
    contact_eyebrow: "Créons quelque chose", contact_title: "Besoin d’un site moderne, personnel et professionnel ?", contact_text: "Parlez-moi de votre projet et je vous aide à construire une présence en ligne claire et élégante.", contact_cta: "Me contacter",
    footer_rights: "© Hélène Nechita. Tous droits réservés."
  }
};

const langToggle = document.getElementById("langToggle");
let currentLang = "en";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  langToggle.textContent = lang === "en" ? "FR" : "EN";
  currentLang = lang;
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "fr" : "en");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

applyLanguage("en");
