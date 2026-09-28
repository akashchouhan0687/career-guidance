// js/careers.js
document.addEventListener('DOMContentLoaded', () => {
    const explorerView = document.getElementById('explorer-view');
    const detailsView = document.getElementById('details-view');
    const careersGrid = document.getElementById('careers-grid');
    const filtersContainer = document.getElementById('filters-container');
    const searchInput = document.getElementById('search-input');
    const careerDetailsContent = document.getElementById('career-details-content');
    const relatedCareersGrid = document.getElementById('related-careers-grid');
    const backBtn = document.getElementById('back-btn');

    const categories = ['All', 'Technology', 'Cybersecurity', 'AI & Data', 'Design', 'Business', 'Engineering'];
    let currentCategory = 'All';
    let currentSearch = '';

    // Initialize View
    const init = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const careerId = urlParams.get('id');

        if (careerId) {
            showCareerDetails(careerId);
        } else {
            showExplorer();
        }
    };

    const showExplorer = () => {
        explorerView.style.display = 'block';
        detailsView.style.display = 'none';
        renderFilters();
        renderCareers();
    };

    const renderFilters = () => {
        filtersContainer.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat === currentCategory ? 'active' : ''}`;
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = cat;
                renderCareers();
            });
            filtersContainer.appendChild(btn);
        });
    };

    const renderCareers = () => {
        let filtered = getCareersByCategory(currentCategory);
        if (currentSearch) {
            const q = currentSearch.toLowerCase();
            filtered = filtered.filter(c => 
                c.name.toLowerCase().includes(q) || 
                c.shortDesc.toLowerCase().includes(q) ||
                c.skills.some(s => s.toLowerCase().includes(q))
            );
        }

        careersGrid.innerHTML = '';
        if (filtered.length === 0) {
            careersGrid.innerHTML = `<div class="no-results"><h3>No careers found</h3><p>Try adjusting your search or filters.</p></div>`;
            return;
        }

        filtered.forEach(career => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="tag">${career.category}</span>
                <h3 class="card-title">${career.name}</h3>
                <p>${career.shortDesc}</p>
                <div style="margin: 1rem 0;">
                    <small style="color: var(--text-muted); font-weight: 500;">Key Skills:</small><br>
                    <span style="font-size: 0.875rem;">${career.skills.slice(0, 3).join(', ')}</span>
                </div>
                <a href="?id=${career.id}" class="card-link" data-id="${career.id}">View Details <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            `;
            careersGrid.appendChild(card);
        });

        // Add event listeners to internal links to avoid full page reload if preferred, but standard links work fine.
        document.querySelectorAll('.card-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute('data-id');
                window.history.pushState({}, '', `?id=${id}`);
                showCareerDetails(id);
            });
        });
        
        if (window.observeElements) window.observeElements();
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderCareers();
        });
    }

    const showCareerDetails = (id) => {
        const career = getCareerById(id);
        if (!career) {
            window.location.href = 'careers.html';
            return;
        }

        explorerView.style.display = 'none';
        detailsView.style.display = 'block';
        window.scrollTo(0, 0);

        careerDetailsContent.innerHTML = `
            <div class="details-header">
                <span class="tag">${career.category}</span>
                <h1 style="font-size: 2.5rem; margin-top: 0.5rem;">${career.name}</h1>
                <p style="font-size: 1.125rem;">${career.shortDesc}</p>
            </div>
            
            <div class="details-section">
                <h3>What Does a ${career.name} Do?</h3>
                <p>${career.description}</p>
            </div>
            
            <div class="grid grid-2" style="margin-top: 2rem;">
                <div>
                    <h3>Key Skills</h3>
                    <div class="skills-list">
                        ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div>
                    <h3>Recommended Technologies</h3>
                    <div class="skills-list">
                        ${career.technologies.map(tech => `<span class="skill-tag" style="border-color: var(--accent); color: var(--accent); background: white;">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>

            <div class="details-section">
                <h3>Education</h3>
                <p>${career.education}</p>
            </div>

            <div class="details-section">
                <h3>Career Roadmap</h3>
                <ul class="roadmap-list">
                    ${career.roadmap.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        `;

        // Render Related Careers
        relatedCareersGrid.innerHTML = '';
        career.related.forEach(relId => {
            const relCareer = getCareerById(relId);
            if (relCareer) {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <span class="tag">${relCareer.category}</span>
                    <h3 class="card-title">${relCareer.name}</h3>
                    <p>${relCareer.shortDesc}</p>
                    <a href="?id=${relCareer.id}" class="card-link" data-id="${relCareer.id}">View Details <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                `;
                relatedCareersGrid.appendChild(card);
            }
        });

        document.querySelectorAll('#related-careers-grid .card-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const newId = e.currentTarget.getAttribute('data-id');
                window.history.pushState({}, '', `?id=${newId}`);
                showCareerDetails(newId);
            });
        });
    };

    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState({}, '', 'careers.html');
            showExplorer();
        });
    }

    // Handle browser back button
    window.addEventListener('popstate', () => {
        init();
    });

    // Run init
    init();
});
