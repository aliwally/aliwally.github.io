// Shared header shrink script — toggles 'shrink' class on the page header
(function(){
    const THRESHOLD = 80;
    const THRESHOLD_LOW = 40; // hysteresis to avoid flicker
    // Prefer explicit IDs used in pages
    const header = document.getElementById('mainHeader') || document.getElementById('heroHeader') || document.querySelector('header');
    if (!header) return;

    // Don't enable shrink behavior on very short pages
    function pageTooShort() {
        return document.documentElement.scrollHeight <= window.innerHeight + 120;
    }

    let isShrunk = header.classList.contains('shrink');
    let ticking = false;

    function setShrunk(state){
        if (state){
            header.classList.add('shrink');
            // only apply layout changes if page is long enough
            if (!pageTooShort()) header.classList.add('shrink-layout');
            else header.classList.remove('shrink-layout');
        } else {
            header.classList.remove('shrink');
            header.classList.remove('shrink-layout');
        }
        isShrunk = state;
    }

    function update() {
        ticking = false;
        const y = window.scrollY || window.pageYOffset;
        if (!isShrunk && y > THRESHOLD) {
            setShrunk(true);
        } else if (isShrunk && y < THRESHOLD_LOW) {
            setShrunk(false);
        } else if (isShrunk) {
            // if still shrunk, ensure layout class matches current page length
            if (pageTooShort()) header.classList.remove('shrink-layout');
            else header.classList.add('shrink-layout');
        }
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { if (!ticking) { window.requestAnimationFrame(update); } }, { passive: true });
    // initialize
    update();
})();
