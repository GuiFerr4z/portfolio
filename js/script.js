document.getElementById("anoAtual").innerHTML = new Date().getFullYear();
        window.addEventListener("scroll", function(){
            const header = document.querySelector("header");
            header.classList.toggle("scrolled", window.scrollY > 50);
        });

        const elements = document.querySelectorAll('.hidden');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        elements.forEach(el => observer.observe(el));

        // lucide.creatIcons();

        const toggle = document.getElementById("theme-toggle");

        toggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
