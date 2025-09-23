// Language switching functionality with Irish flag
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'en';
        this.translations = {};
        this.init();
    }

    init() {
        this.loadTranslations();
        this.createLanguageSwitch();
        this.setLanguage(this.currentLanguage);
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-engineering': 'Engineering Course',
                'nav-mobility': 'International mobility',
                'nav-sustainability': 'Sustainability & Civic Engagement',
                'nav-hobbies': 'Personal Interests',
                'nav-professional': 'Professional Project',
                'nav-contact': 'Contact',
                
                // Home page
                'hero-subtitle': 'Welcome to my portfolio!',
                'home-greeting': 'Hi!',
                'home-intro': 'My name is Alice and I am a first year masters computer science student at Enseeiht in Toulouse focussing on Images and multimedia. You can navigate through this website to learn more about me and my work. You can also watch this short video presentation about myself just below!',
                'quote-text': '"And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye."',
                'quote-author': '― Antoine de Saint-Exupéry, The Little Prince',
                
                // Contact page
                'contact-title': 'Contact',
                'contact-intro': 'Feel free to reach out to me through any of the following channels:',
                'contact-email': 'Email',
                'contact-linkedin': 'LinkedIn',
                'contact-phone': 'Phone',
                'contact-location': 'Location',
                'contact-form-title': 'Send me a message',
                'contact-form-name': 'Your Name',
                'contact-form-email': 'Your Email',
                'contact-form-message': 'Your Message',
                'contact-form-send': 'Send Message',
                
                // CV section
                'cv-title': 'CV',
                'cv-download': 'Download PDF',
                
                // Common
                'language-switch': 'Français'
            },
            fr: {
                // Navigation
                'nav-home': 'Accueil',
                'nav-engineering': 'Cursus Ingénieur',
                'nav-mobility': 'Mobilité internationale',
                'nav-sustainability': 'Développement durable & Engagement civique',
                'nav-hobbies': 'Centres d\'intérêt personnels',
                'nav-professional': 'Projet professionnel',
                'nav-contact': 'Contact',
                
                // Home page
                'hero-subtitle': 'Bienvenue sur mon portfolio !',
                'home-greeting': 'Salut !',
                'home-intro': 'Je m\'appelle Alice et je suis étudiante en première année de master informatique à l\'Enseeiht à Toulouse, spécialisée en Images et multimédia. Vous pouvez naviguer sur ce site web pour en apprendre plus sur moi et mon travail. Vous pouvez aussi regarder cette courte vidéo de présentation de moi-même juste en dessous !',
                'quote-text': '"Et maintenant, voici mon secret, un secret très simple : On ne voit bien qu\'avec le cœur. L\'essentiel est invisible pour les yeux."',
                'quote-author': '― Antoine de Saint-Exupéry, Le Petit Prince',
                
                // Contact page
                'contact-title': 'Contact',
                'contact-intro': 'N\'hésitez pas à me contacter par l\'un des moyens suivants :',
                'contact-email': 'Email',
                'contact-linkedin': 'LinkedIn',
                'contact-phone': 'Téléphone',
                'contact-location': 'Localisation',
                'contact-form-title': 'Envoyez-moi un message',
                'contact-form-name': 'Votre nom',
                'contact-form-email': 'Votre email',
                'contact-form-message': 'Votre message',
                'contact-form-send': 'Envoyer le message',
                
                // CV section
                'cv-title': 'CV',
                'cv-download': 'Télécharger PDF',
                
                // Common
                'language-switch': 'English'
            }
        };
    }

    createLanguageSwitch() {
        console.log('Creating language switch...');
        
        // Remove any existing language switch elements first
        const existingSwitch = document.querySelector('.language-switch');
        if (existingSwitch) {
            console.log('Removing existing language switch');
            existingSwitch.remove();
        }

        const languageSwitch = document.createElement('div');
        languageSwitch.className = 'language-switch';
        
        // Using fallback for better PC compatibility
        // Try flag emojis first, fallback to text indicators
        const getFlagDisplay = (country) => {
            if (country === 'fr') {
                // Try flag emoji, fallback to FR text
                return '🇫🇷';
            } else {
                // Try flag emoji, fallback to IE text  
                return '🇮🇪';
            }
        };
        
        const flagDisplay = this.currentLanguage === 'en' ? getFlagDisplay('fr') : getFlagDisplay('ie');
        
        languageSwitch.innerHTML = `
            <button id="language-toggle" class="language-toggle">
                <span class="flag-icon" style="font-family: 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', sans-serif;">${flagDisplay}</span>
                <span class="language-text" data-i18n="language-switch">${this.translations[this.currentLanguage]['language-switch']}</span>
            </button>
        `;

        // Add to body (bottom right position)
        document.body.appendChild(languageSwitch);
        console.log('Language switch added to body');

        // Add event listener
        const toggleButton = document.getElementById('language-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleLanguage());
            console.log('Event listener added to language toggle');
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
        this.setLanguage(this.currentLanguage);
        localStorage.setItem('preferred-language', this.currentLanguage);
    }

    setLanguage(language) {
        this.currentLanguage = language;
        document.documentElement.lang = language;
        
        // Update all elements with data-i18n attribute
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[language] && this.translations[language][key]) {
                element.textContent = this.translations[language][key];
            }
        });

        // Update language toggle button
        const flagIcon = document.querySelector('.flag-icon');
        const languageText = document.querySelector('.language-text');
        if (flagIcon) {
            const getFlagDisplay = (country) => {
                if (country === 'fr') {
                    return '🇫🇷';
                } else {
                    return '🇮🇪';
                }
            };
            flagIcon.textContent = language === 'en' ? getFlagDisplay('fr') : getFlagDisplay('ie');
            // Ensure proper font for emoji display
            flagIcon.style.fontFamily = "'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', sans-serif";
        }
        if (languageText) {
            languageText.textContent = this.translations[language]['language-switch'];
        }

        // Update CV files based on language
        const cvImage = document.getElementById('cv-image');
        const cvDownload = document.getElementById('cv-download');
        
        if (cvImage) {
            if (language === 'fr') {
                cvImage.src = 'img/CV_Fren.jpg';
                cvImage.alt = 'CV Français';
            } else {
                cvImage.src = 'img/CV_Eng.jpg';
                cvImage.alt = 'CV English';
            }
        }
        
        if (cvDownload) {
            if (language === 'fr') {
                cvDownload.href = 'docs/CV_French.pdf';
            } else {
                cvDownload.href = 'docs/CV_English.pdf';
            }
        }
    }
}

// CSS for language switch
const languageSwitchCSS = `
.language-switch {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.language-toggle {
    background: #fff;
    border: 2px solid #1e473d;
    color: #1e473d;
    padding: 0.6rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    font-family: 'Roboto', Arial, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.language-toggle:hover {
    background: #1e473d;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(30, 71, 61, 0.3);
}

.flag-icon {
    font-size: 1.2rem;
    font-family: 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji Mozilla', 'EmojiOne Color', sans-serif;
    font-feature-settings: "liga" off;
}

@media (max-width: 600px) {
    .language-switch {
        bottom: 15px;
        right: 15px;
    }
    
    .language-toggle {
        padding: 0.5rem 0.8rem;
        font-size: 0.8rem;
        border-radius: 20px;
    }
    
    .language-text {
        display: none;
    }
    
    .flag-icon {
        font-size: 1.4rem;
    }
}
`;

// Add CSS to document
const style = document.createElement('style');
style.textContent = languageSwitchCSS;
document.head.appendChild(style);

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing language switcher...');
    new LanguageSwitcher();
    console.log('Language switcher initialized');
});