// Simple language switcher using CSS classes
class SimpleLanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'en';
        this.init();
    }

    init() {
        this.createLanguageSwitch();
        this.setLanguage(this.currentLanguage);
    }

    createLanguageSwitch() {
        // Remove any existing language switch
        const existingSwitch = document.querySelector('.language-switch');
        if (existingSwitch) {
            existingSwitch.remove();
        }

        const languageSwitch = document.createElement('div');
        languageSwitch.className = 'language-switch';
        
        const flagClass = this.currentLanguage === 'en' ? 'flag-fr' : 'flag-en';
        const buttonText = this.currentLanguage === 'en' ? 'Fran\u00e7ais' : 'English';
        
        languageSwitch.innerHTML = `
            <button id="language-toggle" class="language-toggle">
                <span class="flag-icon ${flagClass}" aria-hidden="true"></span>
                <span class="language-text">${buttonText}</span>
            </button>
        `;

        document.body.appendChild(languageSwitch);

        const toggleButton = document.getElementById('language-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
        this.setLanguage(this.currentLanguage);
        localStorage.setItem('preferred-language', this.currentLanguage);
    }

    setLanguage(language) {
        this.currentLanguage = language;
        
        // Update HTML class to show/hide appropriate language content
        document.documentElement.className = `lang-${language}`;
        document.documentElement.lang = language;
        
        // Update language toggle button
        const flagIcon = document.querySelector('.flag-icon');
        const languageText = document.querySelector('.language-text');
        
        if (flagIcon) {
            flagIcon.textContent = '';
            flagIcon.classList.toggle('flag-fr', language === 'en');
            flagIcon.classList.toggle('flag-en', language !== 'en');
        }
        if (languageText) {
            languageText.textContent = language === 'en' ? 'Fran\u00e7ais' : 'English';
        }

        // Update CV files based on language
        const cvIframe = document.getElementById('cv-iframe');
        const cvDownload = document.getElementById('cv-download');

        if (language === 'fr') {
            if (cvIframe) {
                cvIframe.src = '';
                setTimeout(() => {
                    const timestamp = new Date().getTime();
                    cvIframe.src = `docs/CV_French.pdf#toolbar=0&t=${timestamp}`;
                }, 50);
            }
            if (cvDownload) {
                cvDownload.href = 'docs/CV_French.pdf';
            }
        } else {
            if (cvIframe) {
                cvIframe.src = '';
                setTimeout(() => {
                    const timestamp = new Date().getTime();
                    cvIframe.src = `docs/CV_English.pdf#toolbar=0&t=${timestamp}`;
                }, 50);
            }
            if (cvDownload) {
                cvDownload.href = 'docs/CV_English.pdf';
            }
        }
    }
}

// CSS for language switch
const languageSwitchCSS = `
/* Language visibility rules */
.lang-en .fr { display: none !important; }
.lang-fr .en { display: none !important; }
.lang-en .en { display: block; }
.lang-fr .fr { display: block; }

/* For inline elements */
.lang-en .fr.inline { display: none !important; }
.lang-fr .en.inline { display: none !important; }
.lang-en .en.inline { display: inline; }
.lang-fr .fr.inline { display: inline; }

/* Language switch button */
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
    font-family: 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', sans-serif;
    display: inline-block;
    width: 1.35rem;
    height: 0.95rem;
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.12);
    background-size: cover;
    background-position: center;
}

.flag-fr {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'><rect width='1' height='2' x='0' fill='%230055A4'/><rect width='1' height='2' x='1' fill='white'/><rect width='1' height='2' x='2' fill='%23EF4135'/></svg>");
}

.flag-en {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'><rect width='1' height='2' x='0' fill='%2300933B'/><rect width='1' height='2' x='1' fill='white'/><rect width='1' height='2' x='2' fill='%23FF8200'/></svg>");
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
        width: 1.4rem;
        height: 1rem;
    }
}
`;

// Add CSS to document
const style = document.createElement('style');
style.textContent = languageSwitchCSS;
document.head.appendChild(style);

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SimpleLanguageSwitcher();
});
