// js/assessment.js
const questions = [
    {
        id: 1,
        title: "What are you currently studying?",
        type: "single",
        options: [
            { text: "10th Standard", score: {} },
            { text: "12th Standard", score: {} },
            { text: "Diploma", score: {} },
            { text: "Undergraduate Degree", score: {} },
            { text: "Other", score: {} }
        ]
    },
    {
        id: 2,
        title: "Which areas interest you most? (Select up to 2)",
        type: "multiple",
        max: 2,
        options: [
            { text: "Programming & Code", score: { "Technology": 3, "AI & Data": 1 } },
            { text: "Mathematics & Logic", score: { "AI & Data": 3, "Technology": 1 } },
            { text: "Art & Design", score: { "Design": 3 } },
            { text: "Business & Strategy", score: { "Business": 3 } },
            { text: "Science & Engineering", score: { "Engineering": 3 } },
            { text: "Security & Investigation", score: { "Cybersecurity": 3 } }
        ]
    },
    {
        id: 3,
        title: "What type of problems do you enjoy solving?",
        type: "single",
        options: [
            { text: "Technical system problems", score: { "Technology": 2, "Engineering": 2 } },
            { text: "Logical and puzzle-like problems", score: { "Cybersecurity": 2, "AI & Data": 2 } },
            { text: "Creative and visual problems", score: { "Design": 3 } },
            { text: "Business and organizational problems", score: { "Business": 3 } },
            { text: "People-related problems", score: { "Business": 1, "Design": 1 } }
        ]
    },
    {
        id: 4,
        title: "Which activity sounds most interesting?",
        type: "single",
        options: [
            { text: "Building software applications", score: { "Technology": 3 } },
            { text: "Protecting systems from hackers", score: { "Cybersecurity": 3 } },
            { text: "Analyzing patterns in large data sets", score: { "AI & Data": 3 } },
            { text: "Designing beautiful digital interfaces", score: { "Design": 3 } },
            { text: "Managing projects and marketing", score: { "Business": 3 } }
        ]
    },
    {
        id: 5,
        title: "What are your strongest skills? (Select up to 2)",
        type: "multiple",
        max: 2,
        options: [
            { text: "Problem solving", score: { "Technology": 2, "Engineering": 2 } },
            { text: "Creativity", score: { "Design": 3 } },
            { text: "Communication", score: { "Business": 2 } },
            { text: "Logical thinking", score: { "AI & Data": 2, "Cybersecurity": 2 } },
            { text: "Leadership", score: { "Business": 2 } },
            { text: "Attention to detail", score: { "Cybersecurity": 2, "Technology": 1 } }
        ]
    },
    {
        id: 6,
        title: "What type of work environment interests you?",
        type: "single",
        options: [
            { text: "Highly technical and focused", score: { "Technology": 2, "Cybersecurity": 2 } },
            { text: "Creative and collaborative", score: { "Design": 3, "Business": 1 } },
            { text: "Research-driven and analytical", score: { "AI & Data": 3, "Engineering": 1 } },
            { text: "Business-oriented and fast-paced", score: { "Business": 3 } },
            { text: "Flexible / Mixed", score: { "Technology": 1, "Design": 1 } }
        ]
    },
    {
        id: 7,
        title: "What would you like to learn in the future?",
        type: "single",
        options: [
            { text: "New programming languages", score: { "Technology": 3 } },
            { text: "How to hack systems ethically", score: { "Cybersecurity": 3 } },
            { text: "Machine learning algorithms", score: { "AI & Data": 3 } },
            { text: "User psychology and UI design", score: { "Design": 3 } },
            { text: "Marketing and business analytics", score: { "Business": 3 } }
        ]
    },
    {
        id: 8,
        title: "What is your main career goal?",
        type: "single",
        options: [
            { text: "Build innovative technology", score: { "Technology": 2, "Engineering": 2 } },
            { text: "Solve complex hidden problems", score: { "Cybersecurity": 2, "AI & Data": 1 } },
            { text: "Create things people love to use", score: { "Design": 3 } },
            { text: "Work with data to find insights", score: { "AI & Data": 3 } },
            { text: "Lead teams and grow companies", score: { "Business": 3 } }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const userAnswers = new Array(questions.length).fill(null);

    const assessmentView = document.getElementById('assessment-view');
    const resultsView = document.getElementById('results-view');
    const questionTitle = document.getElementById('question-title');
    const optionsContainer = document.getElementById('options-container');
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const matchesContainer = document.getElementById('matches-container');
    const retakeBtn = document.getElementById('retake-btn');

    const renderQuestion = () => {
        const qContainer = document.getElementById('question-container');
        
        // Fade out
        qContainer.style.opacity = '0';
        qContainer.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            const q = questions[currentStep];
            questionTitle.textContent = q.title;
            progressText.textContent = `Question ${currentStep + 1} of ${questions.length}`;
            progressFill.style.width = `${((currentStep + 1) / questions.length) * 100}%`;

            optionsContainer.innerHTML = '';
            q.options.forEach((opt, index) => {
                const label = document.createElement('label');
                label.className = 'option-label';
                
                const input = document.createElement('input');
                input.type = q.type === 'multiple' ? 'checkbox' : 'radio';
                input.name = `question-${currentStep}`;
                input.value = index;
                input.className = 'option-input';

                // Restore previous selection if any
                if (userAnswers[currentStep]) {
                    if (q.type === 'multiple' && userAnswers[currentStep].includes(index)) {
                        input.checked = true;
                        label.classList.add('selected');
                    } else if (q.type === 'single' && userAnswers[currentStep] === index) {
                        input.checked = true;
                        label.classList.add('selected');
                    }
                }

                input.addEventListener('change', () => {
                    if (q.type === 'single') {
                        userAnswers[currentStep] = index;
                        document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
                        label.classList.add('selected');
                    } else {
                        if (!userAnswers[currentStep]) userAnswers[currentStep] = [];
                        const currentSelection = userAnswers[currentStep];
                        
                        if (input.checked) {
                            if (currentSelection.length >= q.max) {
                                input.checked = false;
                                return; // Enforce max limit
                            }
                            currentSelection.push(index);
                            label.classList.add('selected');
                        } else {
                            const idx = currentSelection.indexOf(index);
                            if (idx > -1) currentSelection.splice(idx, 1);
                            label.classList.remove('selected');
                        }
                    }
                    updateNextButton();
                });

                const text = document.createElement('span');
                text.textContent = opt.text;

                label.appendChild(input);
                label.appendChild(text);
                optionsContainer.appendChild(label);
            });

            // Button States
            prevBtn.classList.toggle('btn-disabled', currentStep === 0);
            if (currentStep === questions.length - 1) {
                nextBtn.textContent = 'See Results';
            } else {
                nextBtn.textContent = 'Next Question';
            }
            updateNextButton();

            // Fade in
            qContainer.style.opacity = '1';
            qContainer.style.transform = 'translateY(0)';
        }, 250); // Delay matches CSS transition length roughly
    };

    const updateNextButton = () => {
        const q = questions[currentStep];
        let hasAnswer = false;
        if (q.type === 'single') {
            hasAnswer = userAnswers[currentStep] !== null;
        } else {
            hasAnswer = userAnswers[currentStep] && userAnswers[currentStep].length > 0;
        }
        
        if (hasAnswer) {
            nextBtn.classList.remove('btn-disabled');
        } else {
            nextBtn.classList.add('btn-disabled');
        }
    };

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            renderQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (nextBtn.classList.contains('btn-disabled')) return;

        if (currentStep < questions.length - 1) {
            currentStep++;
            renderQuestion();
        } else {
            calculateResults();
        }
    });

    const calculateResults = () => {
        const categoryScores = {
            "Technology": 0, "Cybersecurity": 0, "AI & Data": 0, 
            "Design": 0, "Business": 0, "Engineering": 0
        };

        userAnswers.forEach((ans, qIndex) => {
            const q = questions[qIndex];
            if (ans === null) return;
            
            if (q.type === 'single') {
                const scoreObj = q.options[ans].score;
                for (const [cat, pts] of Object.entries(scoreObj)) {
                    categoryScores[cat] += pts;
                }
            } else {
                ans.forEach(optIndex => {
                    const scoreObj = q.options[optIndex].score;
                    for (const [cat, pts] of Object.entries(scoreObj)) {
                        categoryScores[cat] += pts;
                    }
                });
            }
        });

        // Convert to array and sort
        const sortedCategories = Object.entries(categoryScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3); // Top 3

        const maxPossible = 15; // Rough estimate for highest score possible
        
        showResults(sortedCategories, maxPossible);
    };

    const showResults = (topCategories, maxScore) => {
        assessmentView.style.display = 'none';
        
        resultsView.style.display = 'block';
        resultsView.style.opacity = '0';
        resultsView.style.transition = 'opacity 0.4s ease-out';
        
        window.scrollTo({top: 0, behavior: 'smooth'});

        matchesContainer.innerHTML = '';
        
        topCategories.forEach((catEntry, index) => {
            const categoryName = catEntry[0];
            const rawScore = catEntry[1];
            // Normalize score to percentage (just for UI display, cap at 98)
            let percentage = Math.min(Math.round((rawScore / maxScore) * 100) + 40, 98);
            if(index === 1) percentage = percentage - 10;
            if(index === 2) percentage = percentage - 22;
            
            // Map category to a relevant career
            const categoryCareers = getCareersByCategory(categoryName);
            const primaryCareer = categoryCareers.length > 0 ? categoryCareers[0] : null;

            if (primaryCareer) {
                const html = `
                    <div class="match-card animate-on-scroll" style="transition-delay: ${index * 0.1}s">
                        <div class="match-header">
                            <div>
                                <span style="color: var(--text-muted); font-size: 0.875rem; font-weight: 500;">0${index + 1} &mdash; ${categoryName}</span>
                                <h3 class="match-title" style="margin-top: 0.25rem;">${primaryCareer.name}</h3>
                            </div>
                            <div class="match-score">${percentage}% Match</div>
                        </div>
                        <div class="match-bar-bg">
                            <div class="match-bar-fill" style="width: 0%;" data-target="${percentage}%"></div>
                        </div>
                        <p style="margin-top: 1rem; color: var(--text-muted); font-size: 0.95rem;">
                            Your interest in ${categoryName.toLowerCase()} aligns well with this field. 
                            ${primaryCareer.shortDesc}
                        </p>
                        <div style="margin-top: 1.5rem;">
                            <a href="careers.html?id=${primaryCareer.id}" class="btn btn-secondary">Explore Career</a>
                        </div>
                    </div>
                `;
                matchesContainer.insertAdjacentHTML('beforeend', html);
            }
        });

        // Trigger animations
        setTimeout(() => {
            resultsView.style.opacity = '1';
            if (window.observeElements) window.observeElements();

            // Animate progress bars
            setTimeout(() => {
                document.querySelectorAll('.match-bar-fill').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-target');
                });
            }, 300);
        }, 50);
    };

    retakeBtn.addEventListener('click', () => {
        currentStep = 0;
        userAnswers.fill(null);
        resultsView.style.display = 'none';
        assessmentView.style.display = 'block';
        renderQuestion();
    });

    // Start
    renderQuestion();
});
