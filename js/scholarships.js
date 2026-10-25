const scholarshipsData = [
    {
        id: "pm-usp-csss",
        name: "Central Sector Scheme of Scholarship for College and University Students (PM-USP CSSS)",
        provider: "Department of Higher Education, Ministry of Education, Govt. of India",
        portalName: "National Scholarship Portal (NSP)",
        shortDesc: "Financial assistance to meritorious students from low-income families to cover day-to-day expenses while pursuing regular degree courses in colleges and universities.",
        educationLevels: ["Undergraduate", "Postgraduate"],
        categoryGroup: "General / EBC",
        applicableCategories: ["General / EBC", "Girl Students", "Specially-Abled (PwD)", "Scheduled Caste (SC)"],
        stateEligibility: "All India",
        scholarshipType: "Merit-cum-Means",
        eligibilitySummary: "Above 80th percentile in relevant Class 12 board examination; enrolled in a regular degree course; total annual family income up to ₹4.50 Lakh; not receiving other scholarships.",
        benefit: "₹12,000 per annum for the first 3 years of undergraduate study; ₹20,000 per annum at postgraduate level (paid directly via DBT).",
        deadline: "Announced annually on NSP (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://scholarships.gov.in/",
        detailedEligibility: [
            "Must have scored above the 80th percentile of successful candidates in the relevant stream in Class 12 board examination.",
            "Pursuing a regular (not correspondence or distance) undergraduate or postgraduate degree course in a recognized college or university.",
            "Total annual family income from all sources must not exceed ₹4.50 Lakh per annum.",
            "Applicant must not be in receipt of any other government scholarship or fee reimbursement scheme.",
            "50% of the total scholarships are earmarked for female students. Standard reservations apply for SC (15%), ST (7.5%), OBC (27%), and PwD (5%)."
        ],
        requiredDocuments: [
            "Class 12 examination marksheet",
            "Valid Family Income Certificate issued by competent revenue authority (Tehsildar/Revenue Officer)",
            "Aadhaar card of the applicant",
            "Bank account passbook seeded with Aadhaar in student's name",
            "College admission fee receipt and Bonafide student certificate from the institution"
        ],
        applicationSteps: [
            "Visit the National Scholarship Portal (scholarships.gov.in) and complete your One-Time Registration (OTR).",
            "Log in using your OTR credentials and navigate to Department of Higher Education schemes.",
            "Select 'Central Sector Scheme of Scholarship for College and University Students'.",
            "Fill in academic, institutional, and personal details, and upload the required documents.",
            "Submit the application and download the acknowledgement slip for verification by your college nodal officer."
        ]
    },
    {
        id: "aicte-pragati",
        name: "AICTE Pragati Scholarship Scheme for Girl Students",
        provider: "All India Council for Technical Education (AICTE), Ministry of Education",
        portalName: "National Scholarship Portal (NSP) / AICTE",
        shortDesc: "Empowering young women to pursue technical education by providing ₹50,000 annual financial support for degree and diploma programs in AICTE-approved institutions.",
        educationLevels: ["Undergraduate", "Diploma"],
        categoryGroup: "Girl Students",
        applicableCategories: ["Girl Students"],
        stateEligibility: "All India",
        scholarshipType: "Merit-based",
        eligibilitySummary: "Female students admitted to 1st year of technical degree/diploma or 2nd year (lateral entry) in AICTE-approved institutions; family income ≤ ₹8.00 Lakh/yr; max 2 girls per family.",
        benefit: "₹50,000 per annum for each year of study (max 4 years for Degree, 3 years for Diploma) towards college fees, books, computer, and equipment.",
        deadline: "Announced annually on NSP (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://scholarships.gov.in/",
        detailedEligibility: [
            "Exclusively for female students admitted to the 1st year of a technical Degree or Diploma course, or 2nd year through lateral entry at an AICTE-approved institution.",
            "Maximum of two girl children per family are eligible to apply.",
            "Total annual family income from all sources must not exceed ₹8.00 Lakh during the preceding financial year.",
            "Selection is strictly based on the merit of the qualifying examination (Class 12 for degree level, Class 10 for diploma level)."
        ],
        requiredDocuments: [
            "Class 10 / 12 marksheet of the qualifying examination",
            "AICTE-approved institution admission letter and tuition fee receipt",
            "Valid Family Income Certificate issued by competent government authority",
            "Parental declaration confirming not more than two girl children in the family",
            "Aadhaar card and Aadhaar-seeded active bank account passbook"
        ],
        applicationSteps: [
            "Complete One-Time Registration (OTR) on the National Scholarship Portal (scholarships.gov.in).",
            "Log in and navigate to the AICTE schemes section.",
            "Select 'AICTE - Pragati Scholarship Scheme For Girl Students' (Degree or Diploma).",
            "Fill in course, family income, and academic details, and upload the supporting documents.",
            "Submit the form and inform your college AICTE nodal officer for institutional verification."
        ]
    },
    {
        id: "aicte-saksham",
        name: "AICTE Saksham Scholarship Scheme for Specially-Abled Students",
        provider: "All India Council for Technical Education (AICTE), Ministry of Education",
        portalName: "National Scholarship Portal (NSP) / AICTE",
        shortDesc: "Encouragement and financial assistance to differently-abled students pursuing professional and technical degree or diploma courses in AICTE-approved institutions.",
        educationLevels: ["Undergraduate", "Diploma"],
        categoryGroup: "Specially-Abled (PwD)",
        applicableCategories: ["Specially-Abled (PwD)"],
        stateEligibility: "All India",
        scholarshipType: "Need-based",
        eligibilitySummary: "Differently-abled students with ≥40% benchmark disability; enrolled in 1st year or lateral entry in AICTE-approved institutions; family income ≤ ₹8.00 Lakh/yr.",
        benefit: "₹50,000 per annum lump sum for each year of study to cover college fees, purchase of laptop/computer, stationery, books, and assistive software.",
        deadline: "Announced annually on NSP (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://scholarships.gov.in/",
        detailedEligibility: [
            "Specially-abled students having a benchmark disability of not less than 40% certified by an authorized medical board.",
            "Must be admitted to the 1st year of a technical degree or diploma program, or 2nd year through lateral entry in an AICTE-approved institution.",
            "Annual family income of parents/guardians must not exceed ₹8.00 Lakh from all sources during the preceding financial year.",
            "All eligible specially-abled candidates meeting the criteria receive support under this scheme."
        ],
        requiredDocuments: [
            "Disability Certificate issued by a competent government medical authority (minimum 40% benchmark disability)",
            "Class 10 / 12 qualifying examination marksheet",
            "Valid Family Income Certificate",
            "Admission confirmation letter from AICTE-approved college",
            "Aadhaar card and Aadhaar-seeded active bank account passbook"
        ],
        applicationSteps: [
            "Register on the National Scholarship Portal (scholarships.gov.in) with OTR.",
            "Log in and select 'AICTE - Saksham Scholarship Scheme for Specially-Abled Students'.",
            "Upload the valid Disability Certificate, Income Certificate, and academic marksheets.",
            "Submit the completed online application before the portal deadline.",
            "Ensure institutional verification is completed by your college nodal officer."
        ]
    },
    {
        id: "post-matric-minorities",
        name: "Post-Matric Scholarship Scheme for Minorities",
        provider: "Ministry of Minority Affairs, Govt. of India",
        portalName: "National Scholarship Portal (NSP)",
        shortDesc: "Financial support to meritorious students from notified minority communities to pursue higher secondary, diploma, undergraduate, and postgraduate education.",
        educationLevels: ["Higher Secondary (11-12)", "Diploma", "Undergraduate", "Postgraduate"],
        categoryGroup: "Minority Communities",
        applicableCategories: ["Minority Communities"],
        stateEligibility: "All India",
        scholarshipType: "Merit-cum-Means",
        eligibilitySummary: "Students from notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi); ≥50% marks in previous exam; annual family income ≤ ₹2.00 Lakh.",
        benefit: "Actual admission and tuition fee reimbursement (subject to scheme ceilings) plus monthly maintenance allowance for hostellers and day scholars.",
        deadline: "Announced annually on NSP (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://scholarships.gov.in/",
        detailedEligibility: [
            "Must belong to one of the notified minority communities: Muslim, Christian, Sikh, Buddhist, Jain, or Parsi (Zoroastrian).",
            "Must have secured not less than 50% marks or equivalent grade in the previous final examination.",
            "Annual family income of parents/guardians from all sources must not exceed ₹2.00 Lakh.",
            "Applicable for studies in government or recognized private schools, colleges, ITIs, and universities from Class 11 up to Ph.D. level.",
            "30% of total scholarships are earmarked for female students."
        ],
        requiredDocuments: [
            "Self-declaration / certificate of belonging to a notified minority community",
            "Marksheet of previous qualifying examination (minimum 50% marks)",
            "Valid Family Income Certificate issued by designated state revenue authority",
            "College/School fee receipt and Bonafide student certificate",
            "Aadhaar card and Aadhaar-seeded active bank account passbook"
        ],
        applicationSteps: [
            "Visit scholarships.gov.in and complete One-Time Registration (OTR).",
            "Log in and choose Ministry of Minority Affairs -> Post-Matric Scholarship Scheme for Minorities.",
            "Enter academic, personal, and bank account information, then upload scanned documents.",
            "Review all details and submit the application online.",
            "Track verification through your portal student dashboard."
        ]
    },
    {
        id: "post-matric-sc",
        name: "Post-Matric Scholarship for Scheduled Caste (SC) Students",
        provider: "Ministry of Social Justice and Empowerment, Govt. of India",
        portalName: "National Scholarship Portal (NSP) / State Portals",
        shortDesc: "Centrally sponsored scheme providing fee reimbursement and maintenance allowance for Scheduled Caste students pursuing post-matriculation courses.",
        educationLevels: ["Higher Secondary (11-12)", "Diploma", "Undergraduate", "Postgraduate"],
        categoryGroup: "Scheduled Caste (SC)",
        applicableCategories: ["Scheduled Caste (SC)"],
        stateEligibility: "All India",
        scholarshipType: "Need-based",
        eligibilitySummary: "Students belonging to Scheduled Caste pursuing post-matriculation courses; annual parental income not exceeding ₹2.50 Lakh.",
        benefit: "100% reimbursement of compulsory non-refundable fees (tuition, examination, library) plus monthly academic maintenance allowance via DBT.",
        deadline: "Announced annually on NSP/State Portals (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://scholarships.gov.in/",
        detailedEligibility: [
            "Candidate must belong to a Scheduled Caste (SC) recognized in their state of domicile.",
            "Pursuing recognized post-matriculation or post-secondary courses (Class 11, Class 12, ITI, Polytechnic, Degree, Master's, or professional courses).",
            "Total annual parental/guardian income from all sources must not exceed ₹2.50 Lakh.",
            "The candidate must not be receiving any other government scholarship or stipend simultaneously."
        ],
        requiredDocuments: [
            "Valid Caste Certificate issued by competent revenue authority (Sub-Divisional Magistrate / Tehsildar)",
            "Family Income Certificate for the current financial year",
            "Marksheet of previous qualifying academic examination",
            "Institution Bonafide Certificate and current year fee receipt",
            "Aadhaar card and bank account details linked with Aadhaar"
        ],
        applicationSteps: [
            "Check whether your state processes SC scholarships on NSP (scholarships.gov.in) or state portal (e.g. MahaDBT).",
            "Register with your Aadhaar and generate login credentials.",
            "Select 'Post-Matric Scholarship for SC Students' under the Social Justice department.",
            "Submit academic marks, fee details, and upload caste and income certificates.",
            "Submit online and submit physical verification documents to your college office if instructed."
        ]
    },
    {
        id: "rcsm-ebc-mahadbt",
        name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)",
        provider: "Directorate of Higher Education / Technical Education, Govt. of Maharashtra",
        portalName: "Maharashtra MahaDBT Portal",
        shortDesc: "Maharashtra state welfare scheme providing tuition and examination fee reimbursement to students belonging to Economically Backward Classes.",
        educationLevels: ["Diploma", "Undergraduate", "Postgraduate"],
        categoryGroup: "General / EBC",
        applicableCategories: ["General / EBC"],
        stateEligibility: "Maharashtra",
        scholarshipType: "Need-based",
        eligibilitySummary: "Maharashtra domicile; admitted through Centralized Admission Process (CAP) in approved degree/diploma courses; annual family income ≤ ₹8.00 Lakh.",
        benefit: "50% reimbursement of tuition fees and exam fees in private unaided colleges (up to 100% in specified government institutions) paid directly to the institute/student.",
        deadline: "Announced per academic cycle on MahaDBT (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://mahadbt.maharashtra.gov.in/",
        detailedEligibility: [
            "Applicant must be a bonafide domicile of the State of Maharashtra.",
            "Must have secured admission through the Centralized Admission Process (CAP) in an approved government, aided, or un-aided private institution.",
            "Total annual family income must not exceed ₹8.00 Lakh (income up to ₹2.5 Lakh receives 50% tuition & exam fee; income ₹2.5 Lakh to ₹8 Lakh receives 50% tuition fee in unaided colleges).",
            "Only available for up to 2 children from the same family.",
            "Applicant must not be in full-time employment."
        ],
        requiredDocuments: [
            "Domicile Certificate of Maharashtra",
            "Family Income Certificate issued by Tehsildar / Sub-Divisional Officer",
            "CAP Allotment Letter / Centralized Admission confirmation receipt",
            "Previous qualifying year marksheet",
            "College fee receipt and Bonafide certificate",
            "Aadhaar card and Aadhaar-seeded bank passbook copy"
        ],
        applicationSteps: [
            "Visit the official Maharashtra MahaDBT portal (mahadbt.maharashtra.gov.in).",
            "Create a new applicant profile and complete Aadhaar authentication.",
            "Navigate to Directorate of Higher Education (DHE) or Technical Education (DTE).",
            "Select 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)'.",
            "Upload domicile, income certificate, and CAP receipt, then submit your application for college scrutiny."
        ]
    },
    {
        id: "pmss-capf",
        name: "Prime Minister's Scholarship Scheme (PMSS) for CAPFs & Assam Rifles",
        provider: "Welfare & Rehabilitation Board (WARB), Ministry of Home Affairs, Govt. of India",
        portalName: "National Scholarship Portal (NSP)",
        shortDesc: "Supporting higher technical and professional education for dependent wards and widows of Central Armed Police Forces, Assam Rifles, and State Police martyrs.",
        educationLevels: ["Undergraduate"],
        categoryGroup: "Wards of Defence / Police Personnel",
        applicableCategories: ["Wards of Defence / Police Personnel"],
        stateEligibility: "All India",
        scholarshipType: "Merit-based",
        eligibilitySummary: "Wards and widows of CAPF & Assam Rifles personnel; minimum 60% in Class 12 / Diploma; enrolled in first professional degree course (e.g. B.Tech, MBBS, BCA).",
        benefit: "₹3,000 per month for girls (₹36,000 per year) and ₹2,500 per month for boys (₹30,000 per year) paid annually via DBT.",
        deadline: "Announced annually on NSP (Verify on official portal)",
        status: "Verify on official portal",
        officialUrl: "https://scholarships.gov.in/",
        detailedEligibility: [
            "Dependent wards and widows of deceased or retired personnel from Central Armed Police Forces (BSF, CRPF, CISF, ITBP, SSB) and Assam Rifles.",
            "Also covers wards of State Police personnel martyred during Terror or Naxal attacks.",
            "Applicant must have scored a minimum of 60% marks in the Minimum Entry Qualification (MEQ: Class 12, Diploma, or Graduation).",
            "Must be enrolled in their first professional degree program (e.g., BE/B.Tech, MBBS, BDS, BBA, BCA, B.Pharm) recognized by regulatory bodies like AICTE or UGC.",
            "Renewal requires minimum 50% marks in each subsequent academic year."
        ],
        requiredDocuments: [
            "Service Certificate / P.P.O. / Discharge Certificate issued by competent authority / Commandant",
            "Marksheet of Minimum Entry Qualification (MEQ) showing at least 60% marks",
            "Bonafide certificate from the professional college/university",
            "Death/Disability certificate (if applying under deceased or disabled personnel categories)",
            "Aadhaar card and Aadhaar-linked active bank account passbook"
        ],
        applicationSteps: [
            "Register on the National Scholarship Portal (scholarships.gov.in) with your OTR number.",
            "Log in and navigate to WARB, Ministry of Home Affairs schemes.",
            "Select 'Prime Minister's Scholarship Scheme For Central Armed Police Forces And Assam Rifles'.",
            "Fill in service credentials of parent/guardian, professional course details, and upload mandatory certificates.",
            "Submit the application online and track verification by WARB state/zonal boards."
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('scholarship-search');
    const filterEducation = document.getElementById('filter-education');
    const filterCategory = document.getElementById('filter-category');
    const filterState = document.getElementById('filter-state');
    const filterType = document.getElementById('filter-type');
    const resetBtn = document.getElementById('reset-filters-btn');
    const resultsCount = document.getElementById('results-count');
    const scholarshipsGrid = document.getElementById('scholarships-grid');

    let currentSearch = '';
    let currentEducation = 'all';
    let currentCategory = 'all';
    let currentState = 'all';
    let currentType = 'all';

    const renderScholarships = () => {
        const filtered = scholarshipsData.filter(item => {
            // Search matching
            if (currentSearch) {
                const q = currentSearch.toLowerCase();
                const matchesSearch = 
                    item.name.toLowerCase().includes(q) ||
                    item.provider.toLowerCase().includes(q) ||
                    item.portalName.toLowerCase().includes(q) ||
                    item.shortDesc.toLowerCase().includes(q) ||
                    item.eligibilitySummary.toLowerCase().includes(q) ||
                    item.benefit.toLowerCase().includes(q) ||
                    item.educationLevels.some(lvl => lvl.toLowerCase().includes(q)) ||
                    item.applicableCategories.some(cat => cat.toLowerCase().includes(q)) ||
                    item.stateEligibility.toLowerCase().includes(q) ||
                    item.scholarshipType.toLowerCase().includes(q);

                if (!matchesSearch) return false;
            }

            // Education level filter
            if (currentEducation !== 'all') {
                if (!item.educationLevels.includes(currentEducation)) {
                    return false;
                }
            }

            // Category group filter
            if (currentCategory !== 'all') {
                const matchesCat = item.categoryGroup === currentCategory || item.applicableCategories.includes(currentCategory);
                if (!matchesCat) return false;
            }

            // State / Location filter
            if (currentState !== 'all') {
                if (currentState === 'Maharashtra') {
                    if (item.stateEligibility !== 'Maharashtra' && item.stateEligibility !== 'All India') {
                        return false;
                    }
                } else if (currentState === 'All India') {
                    if (item.stateEligibility !== 'All India') {
                        return false;
                    }
                }
            }

            // Type filter
            if (currentType !== 'all') {
                if (item.scholarshipType.toLowerCase() !== currentType.toLowerCase()) {
                    return false;
                }
            }

            return true;
        });

        // Update count indicator
        if (resultsCount) {
            if (filtered.length === scholarshipsData.length) {
                resultsCount.textContent = `Showing all ${filtered.length} verified scholarships`;
            } else if (filtered.length === 0) {
                resultsCount.textContent = `No scholarships found`;
            } else {
                resultsCount.textContent = `Showing ${filtered.length} of ${scholarshipsData.length} scholarships`;
            }
        }

        // Render cards
        scholarshipsGrid.innerHTML = '';

        if (filtered.length === 0) {
            scholarshipsGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--bg-white); border: 1px solid var(--border); border-radius: var(--radius);">
                    <h3 style="margin-bottom: 0.5rem; color: var(--primary);">No scholarships match your criteria</h3>
                    <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem;">Try clearing some filters or searching with broader keywords like "degree", "AICTE", or "merit".</p>
                    <button id="reset-empty-btn" class="btn btn-secondary">Clear All Filters</button>
                </div>
            `;
            const resetEmptyBtn = document.getElementById('reset-empty-btn');
            if (resetEmptyBtn) {
                resetEmptyBtn.addEventListener('click', resetFilters);
            }
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement('article');
            card.className = 'card scholarship-card';
            card.id = `scholarship-${item.id}`;

            card.innerHTML = `
                <div class="scholarship-tags">
                    <span class="tag tag-type">${escapeHtml(item.scholarshipType)}</span>
                    <span class="tag tag-geo">${escapeHtml(item.stateEligibility)}</span>
                    <span class="tag tag-status">${escapeHtml(item.status)}</span>
                </div>
                
                <h3 class="scholarship-title">${escapeHtml(item.name)}</h3>
                <p class="scholarship-provider"><strong>Provider:</strong> ${escapeHtml(item.provider)}</p>
                
                <p class="scholarship-desc">${escapeHtml(item.shortDesc)}</p>
                
                <div class="scholarship-meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">Education Level:</span>
                        <span class="meta-value">${escapeHtml(item.educationLevels.join(', '))}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Benefit / Award:</span>
                        <span class="meta-value">${escapeHtml(item.benefit)}</span>
                    </div>
                    <div class="meta-item meta-item-full">
                        <span class="meta-label">Eligibility Summary:</span>
                        <span class="meta-value">${escapeHtml(item.eligibilitySummary)}</span>
                    </div>
                    <div class="meta-item meta-item-full">
                        <span class="meta-label">Application Deadline:</span>
                        <span class="meta-value">${escapeHtml(item.deadline)}</span>
                    </div>
                </div>

                <div class="scholarship-actions">
                    <button class="btn btn-secondary btn-details" data-id="${item.id}" aria-expanded="false" aria-controls="details-${item.id}">
                        View Details
                    </button>
                    <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-portal">
                        Official Portal 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.35rem; vertical-align: middle;">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>

                <!-- Expandable Details View -->
                <div id="details-${item.id}" class="scholarship-details" style="display: none;">
                    <div class="details-inner">
                        <div class="details-block">
                            <h4>Detailed Eligibility Requirements</h4>
                            <ul>
                                ${item.detailedEligibility.map(req => `<li>${escapeHtml(req)}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="details-block">
                            <h4>Required Documents</h4>
                            <ul>
                                ${item.requiredDocuments.map(doc => `<li>${escapeHtml(doc)}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="details-block">
                            <h4>How to Apply</h4>
                            <ol>
                                ${item.applicationSteps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
                            </ol>
                        </div>

                        <div class="details-footer-notice">
                            <p><strong>Note:</strong> Timelines, eligibility, and reservation criteria are governed by official scheme notifications. Always check the official website (<a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.portalName)}</a>) for the latest instructions.</p>
                        </div>
                    </div>
                </div>
            `;

            scholarshipsGrid.appendChild(card);
        });

        // Attach event listeners for details expansion
        document.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                const detailsEl = document.getElementById(`details-${id}`);
                if (!detailsEl) return;

                const isHidden = detailsEl.style.display === 'none';
                if (isHidden) {
                    detailsEl.style.display = 'block';
                    e.currentTarget.textContent = 'Hide Details';
                    e.currentTarget.setAttribute('aria-expanded', 'true');
                } else {
                    detailsEl.style.display = 'none';
                    e.currentTarget.textContent = 'View Details';
                    e.currentTarget.setAttribute('aria-expanded', 'false');
                }
            });
        });
    };

    const resetFilters = () => {
        currentSearch = '';
        currentEducation = 'all';
        currentCategory = 'all';
        currentState = 'all';
        currentType = 'all';

        if (searchInput) searchInput.value = '';
        if (filterEducation) filterEducation.value = 'all';
        if (filterCategory) filterCategory.value = 'all';
        if (filterState) filterState.value = 'all';
        if (filterType) filterType.value = 'all';

        renderScholarships();
    };

    // Helper to safely escape HTML
    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Event Listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            renderScholarships();
        });
    }

    if (filterEducation) {
        filterEducation.addEventListener('change', (e) => {
            currentEducation = e.target.value;
            renderScholarships();
        });
    }

    if (filterCategory) {
        filterCategory.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderScholarships();
        });
    }

    if (filterState) {
        filterState.addEventListener('change', (e) => {
            currentState = e.target.value;
            renderScholarships();
        });
    }

    if (filterType) {
        filterType.addEventListener('change', (e) => {
            currentType = e.target.value;
            renderScholarships();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }

    // Initial render
    renderScholarships();
});
