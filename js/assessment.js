// js/assessment.js

// Education pathway hints for result cards
const categoryPathways = {
    "Technology": "Explore computer science, software engineering and web development learning paths.",
    "Cybersecurity": "Explore computer science, IT, networking and cybersecurity-related learning paths.",
    "AI & Data": "Explore mathematics, programming, statistics and data-related learning.",
    "Design": "Explore design thinking, UI/UX courses and creative tools to build your portfolio.",
    "Business": "Explore business administration, marketing and management-related learning paths.",
    "Engineering": "Explore relevant engineering branches and build technical skills through projects."
};

// ──────────────────────────────────────────
// Questions — some are shared, some are stage-specific
// ──────────────────────────────────────────

const sharedQuestions = [
    {
        id: "interests",
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
        id: "problems",
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
        id: "skills",
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
        id: "goal",
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

// Stage-specific questions
const stageQuestions = {
    school: [
        {
            id: "school-subjects",
            title: "Which school subjects do you enjoy the most? (Select up to 2)",
            type: "multiple",
            max: 2,
            options: [
                { text: "Mathematics", score: { "Technology": 2, "Engineering": 2, "AI & Data": 2 } },
                { text: "Science", score: { "Engineering": 3, "Technology": 1 } },
                { text: "Computer Studies", score: { "Technology": 3, "Cybersecurity": 1 } },
                { text: "Arts / Drawing", score: { "Design": 3 } },
                { text: "Social Studies / Economics", score: { "Business": 3 } },
                { text: "Languages / Communication", score: { "Business": 2, "Design": 1 } }
            ]
        },
        {
            id: "school-activity",
            title: "Which activity sounds most fun?",
            type: "single",
            options: [
                { text: "Building a simple app or game", score: { "Technology": 3 } },
                { text: "Designing a poster or website layout", score: { "Design": 3 } },
                { text: "Taking apart gadgets to see how they work", score: { "Engineering": 3 } },
                { text: "Solving puzzles and brain teasers", score: { "AI & Data": 2, "Cybersecurity": 2 } },
                { text: "Organizing a school event", score: { "Business": 3 } }
            ]
        },
        {
            id: "school-learn",
            title: "What would you like to learn next?",
            type: "single",
            options: [
                { text: "How computers and the internet work", score: { "Technology": 3, "Cybersecurity": 1 } },
                { text: "How to build machines or robots", score: { "Engineering": 3 } },
                { text: "How to create digital art or animations", score: { "Design": 3 } },
                { text: "How scientists use data and AI", score: { "AI & Data": 3 } },
                { text: "How businesses make money", score: { "Business": 3 } }
            ]
        }
    ],
    higher_secondary: [
        {
            id: "hs-stream",
            title: "What is your current stream or subject area?",
            type: "single",
            options: [
                { text: "Science (PCM — Physics, Chemistry, Maths)", score: { "Engineering": 2, "Technology": 1 } },
                { text: "Science (PCB — Physics, Chemistry, Biology)", score: { "Engineering": 1 } },
                { text: "Science with Computer Science", score: { "Technology": 3, "AI & Data": 1 } },
                { text: "Commerce", score: { "Business": 3 } },
                { text: "Arts / Humanities", score: { "Design": 2, "Business": 1 } }
            ]
        },
        {
            id: "hs-activity",
            title: "Which activity sounds most interesting?",
            type: "single",
            options: [
                { text: "Building software applications", score: { "Technology": 3 } },
                { text: "Protecting systems from hackers", score: { "Cybersecurity": 3 } },
                { text: "Analyzing patterns in data sets", score: { "AI & Data": 3 } },
                { text: "Designing digital interfaces", score: { "Design": 3 } },
                { text: "Managing projects and marketing", score: { "Business": 3 } }
            ]
        },
        {
            id: "hs-learn",
            title: "What would you like to learn in the future?",
            type: "single",
            options: [
                { text: "Programming languages", score: { "Technology": 3 } },
                { text: "Ethical hacking and security", score: { "Cybersecurity": 3 } },
                { text: "Machine learning and AI", score: { "AI & Data": 3 } },
                { text: "User experience and UI design", score: { "Design": 3 } },
                { text: "Business analytics and marketing", score: { "Business": 3 } }
            ]
        }
    ],
    college: [
        {
            id: "col-field",
            title: "What is your current field of study?",
            type: "single",
            options: [
                { text: "Computer Science / IT", score: { "Technology": 2, "Cybersecurity": 1, "AI & Data": 1 } },
                { text: "Engineering (non-CS)", score: { "Engineering": 3 } },
                { text: "Design / Media / Arts", score: { "Design": 3 } },
                { text: "Business / Commerce / Management", score: { "Business": 3 } },
                { text: "Science / Mathematics", score: { "AI & Data": 2, "Engineering": 1 } }
            ]
        },
        {
            id: "col-work",
            title: "What type of work do you see yourself doing?",
            type: "single",
            options: [
                { text: "Writing code and building products", score: { "Technology": 3 } },
                { text: "Securing systems and investigating threats", score: { "Cybersecurity": 3 } },
                { text: "Researching data and building models", score: { "AI & Data": 3 } },
                { text: "Designing and improving user experiences", score: { "Design": 3 } },
                { text: "Leading teams and growing a business", score: { "Business": 3 } }
            ]
        },
        {
            id: "col-environment",
            title: "What type of work environment interests you?",
            type: "single",
            options: [
                { text: "Highly technical and focused", score: { "Technology": 2, "Cybersecurity": 2 } },
                { text: "Creative and collaborative", score: { "Design": 3, "Business": 1 } },
                { text: "Research-driven and analytical", score: { "AI & Data": 3, "Engineering": 1 } },
                { text: "Business-oriented and fast-paced", score: { "Business": 3 } },
                { text: "Flexible / Mixed", score: { "Technology": 1, "Design": 1 } }
            ]
        }
    ]
};

// ──────────────────────────────────────────
// Assessment logic
// ──────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    let educationStage = null;   // 'school', 'higher_secondary', 'college'
    let questions = [];          // Built after stage is selected
    let currentStep = 0;
    let userAnswers = [];

    // DOM references
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
    const stageView = document.getElementById('stage-view');

    // Education stage labels for display
    const stageLabels = {
        school: "School",
        higher_secondary: "Higher Secondary",
        college: "College"
    };

    // ── Stage Selection ──
    const stageCards = document.querySelectorAll('.stage-card');
    stageCards.forEach(card => {
        card.addEventListener('click', () => {
            educationStage = card.dataset.stage;
            buildQuestions();
            stageView.style.display = 'none';
            assessmentView.style.display = 'block';
            renderQuestion();
        });
    });

    const buildQuestions = () => {
        // Combine: stage-specific questions first, then shared questions
        const specific = stageQuestions[educationStage] || [];
        questions = [...specific, ...sharedQuestions];
        userAnswers = new Array(questions.length).fill(null);
        currentStep = 0;
    };

    // ── Render Question ──
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
                                return;
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
        }, 250);
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

    // ── Calculate Results (preserves existing scoring logic) ──
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

        const maxPossible = 15;
        
        showResults(sortedCategories, maxPossible);
    };

    // ── Collect user interest tags for the profile summary ──
    const collectInterestTags = () => {
        const tags = [];
        userAnswers.forEach((ans, qIndex) => {
            const q = questions[qIndex];
            if (ans === null) return;
            if (q.type === 'single') {
                tags.push(q.options[ans].text);
            } else if (Array.isArray(ans)) {
                ans.forEach(i => tags.push(q.options[i].text));
            }
        });
        // Return only unique, limit to 4
        return [...new Set(tags)].slice(0, 4);
    };

    // ── Show Results ──
    const showResults = (topCategories, maxScore) => {
        assessmentView.style.display = 'none';
        
        resultsView.style.display = 'block';
        resultsView.style.opacity = '0';
        resultsView.style.transition = 'opacity 0.4s ease-out';
        
        window.scrollTo({top: 0, behavior: 'smooth'});

        // Build profile summary
        const profileContainer = document.getElementById('profile-summary');
        if (profileContainer) {
            const interestTags = collectInterestTags();
            const suggestedPaths = topCategories.map(c => c[0]);

            profileContainer.innerHTML = `
                <div class="profile-row">
                    <span class="profile-label">Education Stage</span>
                    <span class="profile-value">${stageLabels[educationStage]}</span>
                </div>
                <div class="profile-row">
                    <span class="profile-label">Key Interests</span>
                    <span class="profile-value">${interestTags.join(', ')}</span>
                </div>
                <div class="profile-row">
                    <span class="profile-label">Suggested Paths</span>
                    <span class="profile-value">${suggestedPaths.join(', ')}</span>
                </div>
            `;
            profileContainer.style.display = 'block';
        }

        // Build match cards
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

            // Pathway hint
            const pathway = categoryPathways[categoryName] || '';

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
                        ${pathway ? `<p style="margin-top: 0.75rem; color: var(--accent); font-size: 0.85rem; font-weight: 500;">📚 ${pathway}</p>` : ''}
                        <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
                            <a href="careers.html?id=${primaryCareer.id}" class="btn btn-secondary">Explore Career</a>
                            <a href="roadmaps.html" class="btn btn-secondary" style="border-color: var(--accent); color: var(--accent);">View Roadmaps</a>
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

    // ── Retake ──
    retakeBtn.addEventListener('click', () => {
        currentStep = 0;
        userAnswers.fill(null);
        educationStage = null;
        resultsView.style.display = 'none';
        assessmentView.style.display = 'none';
        stageView.style.display = 'block';
        const profileContainer = document.getElementById('profile-summary');
        if (profileContainer) profileContainer.style.display = 'none';
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
