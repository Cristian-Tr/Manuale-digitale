document.addEventListener("DOMContentLoaded", function () {

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

    // 3. INCHIDERE LA CLICK IN FUNDAL (pe fundal întunecat)
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