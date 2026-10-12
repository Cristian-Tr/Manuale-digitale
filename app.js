document.addEventListener("DOMContentLoaded", function () {

    // CUVINTE ALEATOARE PE FUNDAL
    const cuvinte = ["Biologie", "Geografie", "Religie", "Română", "Mate", "Desen", "Istorie", "Chimie", "Fizică", "Muzică", "Logică"];
    const numarCuvintePeEcran = 20; 

    // DIMENSIUNE PAGINA
    function obtineDimensiuniPagina() {
        return {
            lungime: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
            latime: window.innerWidth
        };
    }

    // SCHIMBARE PROPRIETATI CUVINTE (text, poziție, mărime, rotație)
    function schimbaCuvantAleatoriu(element) {
        // 1. ACUNDERE CUVINTE (Fade Out)
        element.classList.remove("visible");

        // SCHIMBARE DUPA TRANZITIA LENTA
        setTimeout(() => {
            const dimensiuni = obtineDimensiuniPagina();

            // 2. SCHIMBARE TEXTE CU CUVINTE ALESE ALEATOR DIN LISTA DE MAI SUS
            element.textContent = cuvinte[Math.floor(Math.random() * cuvinte.length)];

            // 3. SCHIMBARE DIMENSIUNE LITERE
            element.style.fontSize = Math.floor(Math.random() * 8 + 9) + "px";

            // 4. CALCUL COORDONATE ALEATORII
            const x = Math.random() * (dimensiuni.latime - 160);
            const y = Math.random() * (dimensiuni.lungime - 60);
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            // 5. CALCUL ROTATIE ALEATOARE
            const rotatie = Math.random() * 30 - 15;
            element.style.transform = `rotate(${rotatie}deg)`;

            // 6. AFISARE (Fade In)
            element.classList.add("visible");
        }, 1000);
    }

    // GENERARE ELEMENTE INITIALE
    for (let i = 0; i < numarCuvintePeEcran; i++) {
        const span = document.createElement("span");
        span.classList.add("bg-keyword");
        document.body.appendChild(span);

        // PRIMA AFISARE
        schimbaCuvantAleatoriu(span);
        // CICLU INFINIT CU DECALAJ INTRE CUVINTE
        const timpCiclu = 6000 + Math.random() * 4000; // Între 6 și 10 secunde per cuvânt
        setInterval(() => {
            schimbaCuvantAleatoriu(span);
        }, timpCiclu);
    }
    
    


    // CALCUL SCHIMBARE CUVINTE ALEATORIU
    function opteazaDisciplina() {
        return discipline[Math.floor(Math.random() * discipline.length)];
    }

    // 1. MODAL QUIZ
    const modal = document.getElementById('bookModal');
    const modalTitle = document.getElementById('modalBookTitle');
    const closeBtn = document.getElementById('closeBtn');
    const quizFeedback = document.getElementById('quizFeedback');

    // 1. SELECTARE CARTI
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            modalTitle.innerHTML = `Manual Interactiv de ${title}<br>(HTML5/Enhanced)`;
            modal.classList.add('active');
            quizFeedback.innerText = '';
        });
    });

    // 2. INCHIDERE DIN BUTON X
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.classList.remove('active');
        });
    }

    // 3. INCHIDERE LA CLICK IN FUNDAL (LA DARK MODE)
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });

    // 4. OPTIUNI QUIZ
    const quizButtons = document.querySelectorAll('.quiz-btn');
    quizButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                quizFeedback.innerHTML = "🎉Corect! Multimedia stimulează curiozitatea elevilor să aprofundeze cunoștințele!";
                quizFeedback.style.color = "springgreen";
            } else {
                quizFeedback.innerHTML = "❌Incorect! Analizează din nou informațiile din pagina anterioară!";
                quizFeedback.style.color = "red";
            }
        });
    });




});