window.addEventListener('scroll', () => {
    const title = document.getElementById('titlestuff');
    if (!title) return;

    const maxScroll = 200;
    const scrollY = Math.min(window.scrollY, maxScroll);
    const progress = scrollY / maxScroll;

    const opacity = 1 - progress;

    const translateX = progress * 100;

    title.style.opacity = opacity;
    title.style.transform = `translateX(${translateX}px)`;
    title.style.transition = 'opacity 0.2s, transform 0.2s';
});

document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.5) {
            el.classList.add("show");
        } else {
            observer.observe(el);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const revealLefts = document.querySelectorAll(".revealleft");
    const revealRights = document.querySelectorAll(".revealright");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

	revealLefts.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.5) {
            el.classList.add("show");
        } else {
            observer.observe(el);
        }
    });
	revealRights.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.5) {
            el.classList.add("show");
        } else {
            observer.observe(el);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".row");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elements = Array.from(entry.target.children);
                    elements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add("show");
                        }, index * 350);
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    rows.forEach((row) => {
        if (row.getBoundingClientRect().top < window.innerHeight) {
            Array.from(row.children).forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("show");
                }, index * 350);
            });
        } else {
            observer.observe(row);
        }
    });
});