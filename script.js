const translations = {
  en: {
    navWork: 'Work', navServices: 'Services', navProcess: 'Process', navContact: 'Contact',
    heroEyebrow: 'Website creator & front-end developer',
    heroTitle: 'Elegant websites for creative brands, portfolios and small businesses.',
    heroCopy: 'I design and build modern, responsive websites with a clear structure, refined visuals and a smooth user experience.',
    heroCta: 'Start a project', heroSecondary: 'View portfolio',
    introText: 'My work combines clean development, strong visual hierarchy and a precise sense of atmosphere. Design support can also be shaped with the creative universe of irreallab, led by Radu Nechita.',
    workEyebrow: 'Selected work', workTitle: 'A portfolio built to show what your future clients could feel.',
    workOne: 'A cinematic visual portfolio with a strong artistic identity, motion-driven energy and immersive presentation.',
    visitSite: 'Visit site', workTwoTitle: 'Creator portfolio', workTwo: 'A refined one-page website for a personal brand, built to present work, services and contact clearly.',
    workThreeTitle: 'Business landing page', workThree: 'A responsive landing page for a service, product or studio, focused on trust, conversion and clarity.',
    servicesEyebrow: 'Services', servicesTitle: 'Simple, polished and ready to publish.',
    serviceOneTitle: 'Website design', serviceOne: 'Visual direction, structure, sections, typography and responsive layout.',
    serviceTwoTitle: 'Development', serviceTwo: 'Clean HTML, CSS and JavaScript files prepared for GitHub Pages.',
    serviceThreeTitle: 'Launch support', serviceThree: 'SEO basics, preview images, links, contact page and publishing guidance.',
    processEyebrow: 'Process', processTitle: 'From idea to online presence.',
    stepOneTitle: '1. Direction', stepOne: 'We define the style, message and pages needed.',
    stepTwoTitle: '2. Creation', stepTwo: 'I build a modern responsive version of the website.',
    stepThreeTitle: '3. Launch', stepThree: 'Files are delivered ready for GitHub or your domain.',
    ctaEyebrow: 'Available for projects', ctaTitle: 'Need a website that looks serious, modern and memorable?', ctaButton: 'Contact me', footerContact: 'Contact', footerHome: 'Back home',
    contactEyebrow: 'Contact', contactTitle: 'Tell me about your website project.', contactCopy: 'Share the essentials: your activity, the style you like, the pages you need and your desired timing.',
    labelName: 'Name', labelProject: 'Project type', optionPortfolio: 'Portfolio website', optionBusiness: 'Business website', optionLanding: 'Landing page', optionOther: 'Other', labelMessage: 'Message', sendButton: 'Send message',
    formNote: 'Replace YOUR_FORM_ID with your Formspree ID, or change the form action to your own service.',
    panelTitle: 'A clear website, a refined image.', panelCopy: 'I can help you turn a simple idea into a modern online presence ready to share.'
  },
  fr: {
    navWork: 'Réalisations', navServices: 'Services', navProcess: 'Méthode', navContact: 'Contact',
    heroEyebrow: 'Créatrice de sites web & développeuse front-end',
    heroTitle: 'Des sites élégants pour marques créatives, portfolios et petites entreprises.',
    heroCopy: 'Je conçois et développe des sites modernes, responsives, avec une structure claire, une image soignée et une expérience fluide.',
    heroCta: 'Démarrer un projet', heroSecondary: 'Voir le portfolio',
    introText: 'Mon travail associe un développement propre, une hiérarchie visuelle forte et une atmosphère précise. La direction artistique peut aussi s’appuyer sur l’univers créatif d’irreallab, mené par Radu Nechita.',
    workEyebrow: 'Sélection', workTitle: 'Un portfolio pensé pour montrer ce que vos futurs clients peuvent ressentir.',
    workOne: 'Un portfolio visuel cinématographique avec une identité artistique forte, une énergie liée au mouvement et une présentation immersive.',
    visitSite: 'Voir le site', workTwoTitle: 'Portfolio créatif', workTwo: 'Un site one-page raffiné pour une marque personnelle, pensé pour présenter le travail, les services et le contact clairement.',
    workThreeTitle: 'Landing page professionnelle', workThree: 'Une page responsive pour un service, un produit ou un studio, axée sur la confiance, la conversion et la clarté.',
    servicesEyebrow: 'Services', servicesTitle: 'Simple, soigné et prêt à publier.',
    serviceOneTitle: 'Design de site', serviceOne: 'Direction visuelle, structure, sections, typographie et mise en page responsive.',
    serviceTwoTitle: 'Développement', serviceTwo: 'Fichiers HTML, CSS et JavaScript propres, préparés pour GitHub Pages.',
    serviceThreeTitle: 'Aide au lancement', serviceThree: 'Bases SEO, images de partage, liens, page contact et accompagnement à la publication.',
    processEyebrow: 'Méthode', processTitle: 'De l’idée à la présence en ligne.',
    stepOneTitle: '1. Direction', stepOne: 'Nous définissons le style, le message et les pages nécessaires.',
    stepTwoTitle: '2. Création', stepTwo: 'Je construis une version moderne et responsive du site.',
    stepThreeTitle: '3. Mise en ligne', stepThree: 'Les fichiers sont livrés prêts pour GitHub ou votre domaine.',
    ctaEyebrow: 'Disponible pour projets', ctaTitle: 'Besoin d’un site sérieux, moderne et mémorable ?', ctaButton: 'Me contacter', footerContact: 'Contact', footerHome: 'Retour accueil',
    contactEyebrow: 'Contact', contactTitle: 'Parlez-moi de votre projet de site.', contactCopy: 'Partagez l’essentiel : votre activité, le style souhaité, les pages nécessaires et votre délai idéal.',
    labelName: 'Nom', labelProject: 'Type de projet', optionPortfolio: 'Site portfolio', optionBusiness: 'Site professionnel', optionLanding: 'Landing page', optionOther: 'Autre', labelMessage: 'Message', sendButton: 'Envoyer le message',
    formNote: 'Remplacez YOUR_FORM_ID par votre identifiant Formspree, ou changez l’action du formulaire vers votre propre service.',
    panelTitle: 'Un site clair, une image raffinée.', panelCopy: 'Je peux vous aider à transformer une idée simple en présence en ligne moderne, prête à partager.'
  }
};

const languageButton = document.querySelector('.lang-toggle');
const savedLanguage = localStorage.getItem('hn-language') || 'en';
let currentLanguage = savedLanguage;

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) element.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-placeholder-en]').forEach((element) => {
    element.placeholder = lang === 'fr' ? element.dataset.placeholderFr : element.dataset.placeholderEn;
  });
  if (languageButton) languageButton.textContent = lang === 'en' ? 'FR' : 'EN';
  localStorage.setItem('hn-language', lang);
}

if (languageButton) {
  languageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    applyLanguage(currentLanguage);
  });
}
applyLanguage(currentLanguage);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a, button, input, textarea, select, .magnetic').forEach((element) => {
    element.addEventListener('mouseenter', () => ring.classList.add('active'));
    element.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });
}
