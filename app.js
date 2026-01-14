// ==========================================
// SIMULADOR DE EXAMEN TIC A1/A2
// ==========================================

// Configuración de exámenes
const EXAM_CONFIG = {
    A1: {
        questions: 130,
        cutoff: 45.5,
        name: 'Cuerpo Superior (A1)'
    },
    A2: {
        questions: 100,
        cutoff: 30,
        name: 'Cuerpo de Gestión (A2)'
    },
    PRACTICE: {
        questions: 10,
        cutoff: 0,
        name: 'Modo Práctica'
    }
};

// Puntuación
const SCORING = {
    correct: 1,
    wrong: -1/3,
    blank: 0
};

// Estado global
let allQuestions = [];
let currentExam = {
    type: null,
    questions: [],
    answers: [],  // null = en blanco, número = índice seleccionado
    startTime: null,
    endTime: null
};
let currentQuestionIndex = 0;
let timerInterval = null;

// Historial (se guarda en localStorage)
let examHistory = {
    exams: [],
    totalExams: 0,
    passedExams: 0,
    bestScore: { A1: 0, A2: 0 }
};

// ==========================================
// INICIALIZACIÓN
// ==========================================

async function init() {
    loadHistory();
    await loadQuestions();
    updateHeaderStats();
    showMenu();
}

async function loadQuestions() {
    try {
        const response = await fetch('preguntas_preparatic.json');
        const data = await response.json();
        allQuestions = data.preguntas;
        document.getElementById('questions-info').textContent =
            `${allQuestions.length.toLocaleString()} preguntas disponibles de exámenes oficiales`;
        console.log(`Cargadas ${allQuestions.length} preguntas`);
    } catch (error) {
        console.error('Error cargando preguntas:', error);
        document.getElementById('questions-info').textContent =
            'Error cargando preguntas';
    }
}

function loadHistory() {
    const saved = localStorage.getItem('ticExamHistory');
    if (saved) {
        examHistory = JSON.parse(saved);
    }
}

function saveHistory() {
    localStorage.setItem('ticExamHistory', JSON.stringify(examHistory));
}

// ==========================================
// NAVEGACIÓN
// ==========================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function showMenu() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    updateHeaderStats();
    showScreen('menu-screen');
}

function showStats() {
    renderStats();
    showScreen('stats-screen');
}

function showResults() {
    showScreen('results-screen');
}

function showPractice() {
    startExam('PRACTICE');
}

// ==========================================
// ACTUALIZACIÓN DE UI
// ==========================================

function updateHeaderStats() {
    document.getElementById('exams-count').textContent = examHistory.totalExams;

    const passRate = examHistory.totalExams > 0
        ? Math.round((examHistory.passedExams / examHistory.totalExams) * 100)
        : 0;
    document.getElementById('pass-rate').textContent = `${passRate}%`;

    const best = Math.max(examHistory.bestScore.A1 || 0, examHistory.bestScore.A2 || 0);
    document.getElementById('best-score').textContent = best.toFixed(1);
}

// ==========================================
// EXAMEN
// ==========================================

function startExam(type) {
    if (allQuestions.length === 0) {
        alert('Las preguntas aún no se han cargado. Espera un momento.');
        return;
    }

    const config = EXAM_CONFIG[type];
    if (!config) return;

    // Preparar examen
    currentExam = {
        type: type,
        questions: selectRandomQuestions(config.questions),
        answers: new Array(config.questions).fill(null),
        startTime: new Date(),
        endTime: null
    };
    currentQuestionIndex = 0;

    // Configurar UI
    document.getElementById('exam-type').textContent = type;
    document.getElementById('exam-type').className = `exam-type ${type.toLowerCase()}`;

    // Iniciar timer
    startTimer();

    // Crear navegador de preguntas
    createNavigator();

    // Mostrar primera pregunta
    showScreen('exam-screen');
    displayQuestion();
}

function selectRandomQuestions(count) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    const updateTimer = () => {
        const elapsed = Math.floor((new Date() - currentExam.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('exam-timer').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function createNavigator() {
    const grid = document.getElementById('navigator-grid');
    grid.innerHTML = '';

    for (let i = 0; i < currentExam.questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = i + 1;
        btn.onclick = () => goToQuestion(i);
        grid.appendChild(btn);
    }
}

function updateNavigator() {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn, index) => {
        btn.className = 'nav-btn';
        if (currentExam.answers[index] !== null) {
            btn.classList.add('answered');
        }
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        }
    });
}

function displayQuestion() {
    const question = currentExam.questions[currentQuestionIndex];
    const totalQuestions = currentExam.questions.length;

    // Actualizar contador
    document.getElementById('question-counter').textContent =
        `${currentQuestionIndex + 1} / ${totalQuestions}`;
    document.getElementById('question-number').textContent =
        `Pregunta ${currentQuestionIndex + 1}`;

    // Barra de progreso
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // Texto de la pregunta
    document.getElementById('question-text').textContent = question.texto;

    // Opciones
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    question.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (currentExam.answers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }
        btn.onclick = () => selectOption(index);
        btn.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${opcion}</span>
        `;
        optionsContainer.appendChild(btn);
    });

    // Actualizar stats en vivo
    updateLiveStats();

    // Actualizar navegador
    updateNavigator();

    // Botones de navegación
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').textContent =
        currentQuestionIndex === totalQuestions - 1 ? 'Finalizar' : 'Siguiente →';
}

function selectOption(index) {
    currentExam.answers[currentQuestionIndex] = index;

    // Actualizar visual
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });

    updateLiveStats();
    updateNavigator();
}

function leaveBlank() {
    currentExam.answers[currentQuestionIndex] = null;

    // Quitar selección visual
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    updateLiveStats();
    updateNavigator();
}

function updateLiveStats() {
    let correct = 0, wrong = 0, blank = 0;

    currentExam.answers.forEach((answer, index) => {
        if (answer === null) {
            blank++;
        } else if (answer === currentExam.questions[index].respuesta_correcta) {
            correct++;
        } else {
            wrong++;
        }
    });

    document.getElementById('live-correct').textContent = `✅ ${correct}`;
    document.getElementById('live-wrong').textContent = `❌ ${wrong}`;
    document.getElementById('live-blank').textContent = `⬜ ${blank}`;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        confirmFinish();
    }
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    displayQuestion();
}

function confirmFinish() {
    const blank = currentExam.answers.filter(a => a === null).length;

    let message = '¿Seguro que quieres finalizar el examen?';
    if (blank > 0) {
        message += `\n\nTienes ${blank} pregunta(s) sin responder.`;
    }

    if (confirm(message)) {
        finishExam();
    }
}

function finishExam() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    currentExam.endTime = new Date();

    // Calcular resultados
    let correct = 0, wrong = 0, blank = 0;

    currentExam.answers.forEach((answer, index) => {
        if (answer === null) {
            blank++;
        } else if (answer === currentExam.questions[index].respuesta_correcta) {
            correct++;
        } else {
            wrong++;
        }
    });

    const score = (correct * SCORING.correct) + (wrong * SCORING.wrong) + (blank * SCORING.blank);
    const config = EXAM_CONFIG[currentExam.type];
    const passed = score >= config.cutoff;

    // Tiempo empleado
    const elapsed = Math.floor((currentExam.endTime - currentExam.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Guardar en historial (excepto práctica)
    if (currentExam.type !== 'PRACTICE') {
        const examRecord = {
            type: currentExam.type,
            date: new Date().toISOString(),
            score: score,
            correct: correct,
            wrong: wrong,
            blank: blank,
            passed: passed,
            time: timeStr
        };

        examHistory.exams.unshift(examRecord);
        examHistory.totalExams++;
        if (passed) examHistory.passedExams++;
        if (score > (examHistory.bestScore[currentExam.type] || 0)) {
            examHistory.bestScore[currentExam.type] = score;
        }

        // Limitar historial a últimos 50
        if (examHistory.exams.length > 50) {
            examHistory.exams = examHistory.exams.slice(0, 50);
        }

        saveHistory();
    }

    // Mostrar resultados
    displayResults(score, correct, wrong, blank, passed, timeStr, config);
}

function displayResults(score, correct, wrong, blank, passed, timeStr, config) {
    // Título
    document.getElementById('results-title').textContent =
        currentExam.type === 'PRACTICE' ? 'Resultado de Práctica' : `Resultado Simulacro ${currentExam.type}`;

    // Veredicto
    const verdictDiv = document.getElementById('results-verdict');
    if (currentExam.type === 'PRACTICE') {
        verdictDiv.innerHTML = `<div class="verdict practice">PRÁCTICA COMPLETADA</div>`;
    } else if (passed) {
        verdictDiv.innerHTML = `<div class="verdict passed">¡APROBADO!</div>`;
    } else {
        verdictDiv.innerHTML = `<div class="verdict failed">NO APROBADO</div>`;
    }

    // Puntuación
    document.getElementById('final-score').textContent = score.toFixed(2);
    document.getElementById('cutoff-score').textContent = config.cutoff.toString().replace('.', ',');

    // Desglose
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = wrong;
    document.getElementById('result-blank').textContent = blank;

    const pointsCorrect = correct * SCORING.correct;
    const pointsWrong = wrong * SCORING.wrong;

    document.getElementById('points-correct').textContent = `+${pointsCorrect.toFixed(2)}`;
    document.getElementById('points-wrong').textContent = pointsWrong.toFixed(2);

    // Extras
    document.getElementById('time-spent').textContent = timeStr;
    const answered = correct + wrong;
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    document.getElementById('accuracy-display').textContent = `${accuracy}%`;

    showScreen('results-screen');
}

// ==========================================
// REVISIÓN
// ==========================================

function reviewExam() {
    renderReview('all');
    showScreen('review-screen');
}

function renderReview(filter) {
    const container = document.getElementById('review-list');
    container.innerHTML = '';

    currentExam.questions.forEach((question, index) => {
        const userAnswer = currentExam.answers[index];
        const correctAnswer = question.respuesta_correcta;
        const isCorrect = userAnswer === correctAnswer;
        const isBlank = userAnswer === null;

        // Filtrar
        if (filter === 'wrong' && (isCorrect || isBlank)) return;
        if (filter === 'blank' && !isBlank) return;

        const item = document.createElement('div');
        item.className = `review-item ${isBlank ? 'blank' : isCorrect ? 'correct' : 'wrong'}`;

        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

        item.innerHTML = `
            <div class="review-question">
                <strong>Pregunta ${index + 1}</strong>
                <p>${question.texto}</p>
            </div>
            <div class="review-options">
                ${question.opciones.map((opt, i) => `
                    <div class="review-option ${i === correctAnswer ? 'correct-answer' : ''} ${i === userAnswer && !isCorrect ? 'wrong-answer' : ''}">
                        <span class="option-letter">${letters[i]}</span>
                        ${opt}
                        ${i === correctAnswer ? ' ✅' : ''}
                        ${i === userAnswer && !isCorrect ? ' ❌' : ''}
                    </div>
                `).join('')}
            </div>
            <div class="review-status">
                ${isBlank ? '⬜ Sin responder' : isCorrect ? '✅ Correcta' : '❌ Incorrecta'}
                ${!isBlank && !isCorrect ? `<br>Tu respuesta: ${letters[userAnswer]}` : ''}
            </div>
        `;

        container.appendChild(item);
    });

    if (container.children.length === 0) {
        container.innerHTML = '<p class="no-results">No hay preguntas que mostrar con este filtro.</p>';
    }
}

function filterReview(filter) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(filter) ||
            (filter === 'all' && btn.textContent === 'Todas')) {
            btn.classList.add('active');
        }
    });

    renderReview(filter);
}

// ==========================================
// ESTADÍSTICAS
// ==========================================

function renderStats() {
    document.getElementById('stat-total-exams').textContent = examHistory.totalExams;
    document.getElementById('stat-passed').textContent = examHistory.passedExams;

    const avgScore = examHistory.exams.length > 0
        ? (examHistory.exams.reduce((sum, e) => sum + e.score, 0) / examHistory.exams.length).toFixed(1)
        : '0';
    document.getElementById('stat-avg-score').textContent = avgScore;

    const best = Math.max(examHistory.bestScore.A1 || 0, examHistory.bestScore.A2 || 0);
    document.getElementById('stat-best').textContent = best.toFixed(1);

    // Historial
    const container = document.getElementById('exam-history');
    container.innerHTML = '';

    if (examHistory.exams.length === 0) {
        container.innerHTML = '<p class="no-results">Aún no has realizado ningún examen.</p>';
        return;
    }

    examHistory.exams.slice(0, 20).forEach(exam => {
        const date = new Date(exam.date);
        const dateStr = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const item = document.createElement('div');
        item.className = `history-item ${exam.passed ? 'passed' : 'failed'}`;
        item.innerHTML = `
            <div class="history-main">
                <span class="history-type">${exam.type}</span>
                <span class="history-score">${exam.score.toFixed(2)} pts</span>
                <span class="history-verdict">${exam.passed ? '✅' : '❌'}</span>
            </div>
            <div class="history-details">
                <span>${dateStr}</span>
                <span>✅${exam.correct} ❌${exam.wrong} ⬜${exam.blank}</span>
                <span>⏱️${exam.time}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function confirmReset() {
    if (confirm('¿Seguro que quieres borrar todo el historial? Esta acción no se puede deshacer.')) {
        examHistory = {
            exams: [],
            totalExams: 0,
            passedExams: 0,
            bestScore: { A1: 0, A2: 0 }
        };
        saveHistory();
        updateHeaderStats();
        renderStats();
    }
}

// ==========================================
// INICIAR
// ==========================================

document.addEventListener('DOMContentLoaded', init);
