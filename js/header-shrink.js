// Shared header shrink script — toggles 'shrink' class on the page header
(function(){
    const THRESHOLD = 80;
    // Prefer explicit IDs used in pages
    const header = document.getElementById('mainHeader') || document.getElementById('heroHeader') || document.querySelector('header');
    if (!header) return;

    function onScroll(){
        const y = window.scrollY || window.pageYOffset;
        if (y > THRESHOLD) header.classList.add('shrink');
        else header.classList.remove('shrink');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // initialize
    onScroll();
})();
