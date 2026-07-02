// =======================================
// SUE TOWN RABBIT ROCK TRAIL RUN
// Version 2
// =======================================

// ヘッダー
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});

// フェードイン
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// ENTRYボタンアニメーション
const button = document.querySelector('.button');

if (button) {

    button.addEventListener('mouseenter', () => {

        button.style.transform = "translateY(-3px) scale(1.03)";

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform = "translateY(0) scale(1)";

    });

}

console.log("SUE TOWN RABBIT ROCK TRAIL RUN loaded.");
