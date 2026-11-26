
'use strict';


/* ==========================================
   01. PERSONAL INFORMATION
   ========================================== */

const profile = {

    email: 'sanvispathak@gmail.com',

    linkedin: 'https://www.linkedin.com/in/sanvi-pathak-6617ab1a5/',

    github: '',

    resume: 'resume.pdf'

};


/* ==========================================
   02. ABOUT ME HIGHLIGHTS
   ========================================== */

const highlights = [

    {
        icon: 'mortarboard',

        title: 'Master of Data Science',

        description:
            'The University of Western Australia'
    },

    {
        icon: 'code-slash',

        title: 'B.Tech — Computer Science',

        description:
            'SRM University'
    },

    {
        icon: 'bar-chart-line',

        title: 'Areas of Expertise',

        description:
            'Analytics · BI · Machine Learning'
    },

    {
        icon: 'globe2',

        title: 'International Background',

        description:
            'Australia & India'
    }

];


/* ==========================================
   03. PROJECT INFORMATION
   ========================================== */

const projects = [

    {
        title: 'Australian Road Safety Data Warehouse',

        category: 'Data Engineering',

        icon: 'database',

        description:
            'An end-to-end data warehousing project using Australian road crash data, ETL pipelines and dimensional modelling.',

        tags: [
            'Python',
            'PostgreSQL',
            'SQL',
            'ETL',
            'Power BI'
        ],

        objective:
            'Develop a structured data warehouse to integrate inconsistent national road crash datasets and support analytical queries.',

        method:
            'Data preprocessing, automated Python ETL pipeline development, PostgreSQL database design and dimensional modelling using a star schema and the Kimball methodology.',

        results:
            'Integrated three national datasets into a refreshable data warehouse. Used SQL queries and Power BI dashboards to identify high-risk times, regions and road user groups.',

        github: ''
    },


    {
        title: 'Aspect-Based Sentiment Analysis',

        category: 'Machine Learning',

        icon: 'cpu',

        description:
            'Exploring deep learning architectures to identify sentiment associated with specific aspects of customer reviews.',

        tags: [
            'Python',
            'PyTorch',
            'NLP',
            'LSTM',
            'Transformers'
        ],

        objective:
            'Investigate machine learning approaches for aspect-level sentiment classification.',

        method:
            'Text preprocessing, neural network development and comparison of deep learning architectures.',

        results: '',

        github: ''
    },


    {
        title: 'Healthcare Data Processing',

        category: 'Data Analytics',

        icon: 'heart-pulse',

        description:
            'An interactive application for processing and standardising laboratory blood culture data.',

        tags: [
            'Python',
            'R',
            'Gradio',
            'Data Cleaning'
        ],

        objective:
            'Support consistent processing and preparation of laboratory datasets.',

        method:
            'Data cleaning, transformation and development of an interactive application interface.',

        results: '',

        github: ''
    },


    {
        title: 'Kiribati COVID-19 Survey Analysis',

        category: 'Statistics',

        icon: 'graph-up-arrow',

        description:
            'Statistical analysis of survey data exploring vaccination and socioeconomic outcomes in Kiribati.',

        tags: [
            'R',
            'EDA',
            'Logistic Regression',
            'Statistics'
        ],

        objective:
            'Investigate demographic and socioeconomic factors associated with vaccination and livelihoods.',

        method:
            'Exploratory data analysis, assessment of sample representation and logistic regression modelling.',

        results: '',

        github: ''
    },


    {
        title: 'Hospital Complaints Analysis',

        category: 'Statistics',

        icon: 'clipboard2-pulse',

        description:
            'Exploring statistical count models to understand patterns in hospital complaints.',

        tags: [
            'R',
            'Poisson Regression',
            'Statistical Modelling'
        ],

        objective:
            'Investigate suitable statistical models for analysing hospital complaint counts.',

        method:
            'Exploratory analysis and comparison of Poisson and zero-inflated count models.',

        results: '',

        github: ''
    },


    {
        title: 'Spotify Data Exploration',

        category: 'Data Visualisation',

        icon: 'music-note-beamed',

        description:
            'An interactive data exploration application for investigating patterns in Spotify music data.',

        tags: [
            'R',
            'R Shiny',
            'Data Visualisation'
        ],

        objective:
            'Make music-related data accessible through interactive visual exploration.',

        method:
            'Data preprocessing and development of an interactive R Shiny application.',

        results: '',

        github: ''
    }

];


/* ==========================================
   04. PROFESSIONAL EXPERIENCE
   ========================================== */

const experience = [

    /* ZORAN */

    {
        date: 'June 2026 – Present',

        title: 'Data Analyst – Business Intelligence & Operations',

        company: 'ZORAN',

        location: 'Remote',

        type: 'Current Role',

        details: [

            'Digitise manufacturing, sales, inventory and procurement records by designing structured data collection systems.',

            'Build SQL databases and Python ETL pipelines with validation and quality checks, integrating data across production, sales and procurement.',

            'Develop interactive Power BI dashboards tracking revenue, product margins, production wastage and operational costs.',

            'Develop statistical and machine learning models to forecast product demand and seasonal sales.',

            'Analyse customer and contract profitability to support inventory planning, procurement and pricing decisions.'

        ],

        tags: [
            'Python',
            'SQL',
            'Power BI',
            'ETL',
            'Demand Forecasting',
            'Machine Learning',
            'Business Intelligence',
            'Operational Analytics'
        ]

    },


    /* HBF */

    {
        date: 'March 2026 – May 2026',

        title: 'Data Analyst',

        company: 'HBF',

        location: 'Perth, Western Australia',

        type: 'Contract',

        details: [

            'Extracted, cleansed and transferred employee data from legacy Excel-based systems into Workday, supporting a large-scale HR system migration.',

            'Planned and reprioritised data quality checks during system testing to ensure employee records were accurate and complete ahead of go-live.',

            'Investigated and resolved data discrepancies by cross-checking records against source data using Excel lookups, formulas and pivot tables.',

            'Traced data inconsistencies to their root causes, supporting an accurate and on-time migration to Workday.',

            'Collaborated with project stakeholders to support system implementation and data quality assurance.'

        ],

        tags: [
            'Workday',
            'Advanced Excel',
            'Data Migration',
            'Data Reconciliation',
            'Data Validation',
            'Quality Assurance',
            'SharePoint'
        ]

    },


    /* DEPARTMENT OF HEALTH */

    {
        date: 'June 2025 – July 2025',

        title: 'Health Data Analytics Intern',

        company: 'Department of Health, Western Australia',

        location: 'East Perth, Western Australia',

        type: 'Internship',

        details: [

            'Designed, built and tested REDCap surveys to digitally report vaccine wastage and cold chain breaches across public health units in Western Australia.',

            'Redesigned reporting workflows, reducing weekly reporting time by approximately two hours.',

            'Extracted and analysed cold chain breach and vaccine wastage data in Excel, producing summary statistics and trend reports.',

            'Collaborated with Senior Project Officers and Program Officers to improve data collection and reporting processes.',

            'Prepared technical documentation and handover materials to support ongoing use of the reporting solution.'

        ],

        tags: [
            'REDCap',
            'Excel',
            'Healthcare Analytics',
            'Survey Design',
            'Data Analysis',
            'Process Improvement'
        ]

    },


    /* DFES */

    {
        date: 'November 2024 – December 2024',

        title: 'Web-Based Self-Access System Intern',

        company: 'Department of Fire and Emergency Services (DFES)',

        location: 'Forrestfield, Western Australia',

        type: 'Internship',

        details: [

            'Extracted, cleaned and consolidated operational data from Smartsheet to support business intelligence reporting.',

            'Developed three interactive Power BI dashboards using DAX measures to improve access to operational insights for district officers.',

            'Analysed operational datasets and communicated key findings to state managers and internal stakeholders.',

            'Collaborated with IT staff, business systems analysts and operations managers to understand reporting requirements.',

            'Prepared process documentation and handover materials to support continued use of the dashboards.'

        ],

        tags: [
            'Power BI',
            'DAX',
            'Smartsheet',
            'Data Visualisation',
            'Data Transformation',
            'Business Intelligence',
            'Operational Reporting',
            'Stakeholder Engagement'
        ]

    },


    /* SPARKS FOUNDATION */

    {
        date: 'June 2021 – December 2021',

        title: 'Data Analyst',

        company: 'The Sparks Foundation',

        location: 'Remote',

        type: '',

        details: [

            'Cleaned, analysed and visualised organisational datasets in Python, using exploratory data analysis to identify key trends and correlations.',

            'Built and evaluated a linear regression model in Python to forecast key business metrics and support informed decision-making.',

            'Developed three interactive dashboards and reports to communicate analytical insights to technical and non-technical stakeholders.'

        ],

        tags: [
            'Python',
            'Data Analysis',
            'Data Visualisation',
            'Exploratory Data Analysis',
            'Linear Regression',
            'Dashboard Development'
        ]

    }

];


/* ==========================================
   05. TECHNICAL SKILLS
   ========================================== */

const skills = [

    {
        icon: 'code-slash',

        title: 'Programming & Databases',

        description:
            'Programming languages and databases for analysing and managing data.',

        items: [
            'Python',
            'R',
            'SQL',
            'PostgreSQL'
        ]
    },


    {
        icon: 'bar-chart-line',

        title: 'Business Intelligence',

        description:
            'Interactive dashboards, reporting and business performance analysis.',

        items: [
            'Power BI',
            'Tableau',
            'Excel',
            'DAX',
            'Power Query',
            'KPI Reporting'
        ]
    },


    {
        icon: 'cpu',

        title: 'Machine Learning & AI',

        description:
            'Predictive modelling, deep learning and natural language processing.',

        items: [
            'Scikit-learn',
            'TensorFlow',
            'PyTorch',
            'Keras',
            'NLP',
            'LSTM',
            'Predictive Modelling'
        ]
    },


    {
        icon: 'database',

        title: 'Data Engineering',

        description:
            'Building structured, reliable and analysis-ready datasets.',

        items: [
            'ETL',
            'Data Warehousing',
            'Data Cleaning',
            'Data Validation',
            'Dimensional Modelling',
            'Data Migration'
        ]
    },


    {
        icon: 'graph-up-arrow',

        title: 'Statistical Analysis',

        description:
            'Applying statistical methods to identify patterns and evaluate hypotheses.',

        items: [
            'Regression',
            'Hypothesis Testing',
            'Bayesian Analysis',
            'SPSS',
            'EDA',
            'Forecasting'
        ]
    },


    {
        icon: 'tools',

        title: 'Tools & Platforms',

        description:
            'Development, data collection and collaboration platforms.',

        items: [
            'Jupyter Notebook',
            'REDCap',
            'Smartsheet',
            'Gradio',
            'R Shiny',
            'SharePoint',
            'Workday'
        ]
    }

];


/* ==========================================
   06. EDUCATION
   ========================================== */

const education = [

    {
        degree: 'Master of Data Science',

        university:
            'The University of Western Australia',

        location:
            'Perth, Western Australia',

        date: '2023 – 2025',

        description:
            'Postgraduate studies in data science, machine learning, statistical modelling, data engineering and analytics.',

        achievements: [

            'GPA: 5 / 7',

            'UWA Global Excellence Scholarship'

        ],

        tags: [
            'Data Science',
            'Machine Learning',
            'Statistical Modelling',
            'Data Engineering',
            'Data Analytics'
        ]
    },


    {
        degree: 'Bachelor of Technology',

        university: 'SRM University',

        location: 'Chennai, India',

        date: '2019 – 2023',

        description:
            'Computer Science and Engineering, with a foundation in programming, algorithms, databases and software development.',

        achievements: [

            'GPA: 9.07 / 10'

        ],

        tags: [
            'Computer Science',
            'Programming',
            'Data Structures',
            'Algorithms',
            'Databases'
        ]
    }

];


/* ==========================================
   07. HELPER FUNCTIONS
   ========================================== */

const $ = id => document.getElementById(id);


function createElement(tag, className = '', text = '') {

    const element = document.createElement(tag);

    element.className = className;

    element.textContent = text;

    return element;

}


function createIcon(name) {

    const icon = createElement(

        'i',

        'bi bi-' + name

    );

    icon.setAttribute('aria-hidden', 'true');

    return icon;

}


function createTags(items) {

    const container = createElement('div', 'tags');

    items.forEach(item => {

        const badge = createElement(

            'span',

            '',

            item

        );

        container.append(badge);

    });

    return container;

}


function createCard(
    parent,
    columnClass = 'col-12 col-md-6 col-lg-4'
) {

    const column = createElement(

        'div',

        columnClass

    );

    const card = createElement(

        'article',

        'panel'

    );

    column.append(card);

    parent.append(column);

    return card;

}


/* ==========================================
   08. GENERATE ABOUT ME CARDS
   ========================================== */

function renderHighlights() {

    const container = $('highlights');

    container.replaceChildren();

    highlights.forEach(item => {

        const card = createElement(

            'div',

            'highlight-card'

        );

        const text = createElement('div');

        text.append(

            createElement('h3', '', item.title),

            createElement('p', '', item.description)

        );

        card.append(

            createIcon(item.icon),

            text

        );

        container.append(card);

    });

}


/* ==========================================
   09. GENERATE PROJECT FILTERS
   ========================================== */

function renderFilters() {

    const container = $('filters');

    container.replaceChildren();

    const categories = [

        'All',

        ...new Set(
            projects.map(project => project.category)
        )

    ];

    categories.forEach(category => {

        const button = createElement(

            'button',

            'btn btn-outline-light filter',

            category

        );

        button.type = 'button';

        button.setAttribute(

            'aria-pressed',

            String(category === 'All')

        );

        button.addEventListener('click', () => {

            container
                .querySelectorAll('button')
                .forEach(item => {

                    item.setAttribute(

                        'aria-pressed',

                        String(item === button)

                    );

                });

            renderProjects(category);

        });

        container.append(button);

    });

}


/* ==========================================
   10. GENERATE PROJECT CARDS
   ========================================== */

function renderProjects(category = 'All') {

    const grid = $('project-grid');

    grid.replaceChildren();

    const selectedProjects = projects.filter(project => {

        return category === 'All'
            || project.category === category;

    });

    $('project-count').textContent =

        `${selectedProjects.length} ${
            selectedProjects.length === 1
                ? 'project'
                : 'projects'
        }`;


    selectedProjects.forEach(project => {

        const card = createCard(grid);

        const icon = createIcon(project.icon);

        icon.classList.add('panel-icon');

        card.append(

            icon,

            createElement(
                'p',
                'project-category',
                project.category
            ),

            createElement(
                'h3',
                '',
                project.title
            ),

            createElement(
                'p',
                '',
                project.description
            ),

            createTags(project.tags)

        );


        const button = createElement(

            'button',

            'btn btn-outline-light project-action',

            'View Project '

        );

        button.type = 'button';

        button.append(
            createIcon('arrow-up-right')
        );

        button.addEventListener('click', () => {

            openProject(project, button);

        });

        card.append(button);

    });

}


/* ==========================================
   11. PROJECT DETAILS POPUP
   ========================================== */

function openProject(project, trigger) {

    $('modal-title').textContent = project.title;

    const body = $('modal-body');

    body.replaceChildren();

    body.append(

        createElement(
            'p',
            'project-category',
            project.category
        ),

        createElement(
            'p',
            '',
            project.description
        ),

        createElement(
            'h3',
            '',
            'Project Objective'
        ),

        createElement(
            'p',
            '',
            project.objective
        ),

        createElement(
            'h3',
            '',
            'Methodology'
        ),

        createElement(
            'p',
            '',
            project.method
        ),

        createElement(
            'h3',
            '',
            'Technologies Used'
        ),

        createTags(project.tags)

    );


    if (project.results) {

        body.append(

            createElement(
                'h3',
                '',
                'Results'
            ),

            createElement(
                'p',
                '',
                project.results
            )

        );

    }


    if (project.github) {

        const link = createElement(

            'a',

            'btn btn-primary mt-4',

            'View GitHub Repository '

        );

        link.href = project.github;

        link.target = '_blank';

        link.rel = 'noopener noreferrer';

        link.append(
            createIcon('github')
        );

        body.append(link);

    }


    if (window.bootstrap) {

        const modalElement = $('project-modal');

        modalElement.addEventListener(

            'hidden.bs.modal',

            () => trigger.focus(),

            { once: true }

        );

        bootstrap.Modal

            .getOrCreateInstance(modalElement)

            .show(trigger);

    } else {

        alert(
            'Project details require Bootstrap. Please check your internet connection.'
        );

    }

}


/* ==========================================
   12. GENERATE EXPERIENCE TIMELINE
   ========================================== */

function renderExperience() {

    const container = $('experience-list');

    container.replaceChildren();

    experience.forEach(job => {

        const card = createElement(

            'article',

            'panel'

        );

        const location = createElement(

            'p',

            'small'

        );

        location.append(

            createIcon('geo-alt'),

            document.createTextNode(
                ' ' + job.location
            )

        );


        const dateText = job.type

            ? job.date + ' · ' + job.type

            : job.date;


        card.append(

            createElement(
                'p',
                'date',
                dateText
            ),

            createElement(
                'h3',
                '',
                job.title
            ),

            createElement(
                'h4',
                '',
                job.company
            ),

            location

        );


        const list = createElement('ul');

        job.details.forEach(detail => {

            list.append(

                createElement(
                    'li',
                    '',
                    detail
                )

            );

        });

        card.append(

            list,

            createTags(job.tags)

        );

        container.append(card);

    });

}


/* ==========================================
   13. GENERATE TECHNICAL SKILLS
   ========================================== */

function renderSkills() {

    const grid = $('skills-grid');

    grid.replaceChildren();

    skills.forEach(skill => {

        const card = createCard(grid);

        const icon = createIcon(skill.icon);

        icon.classList.add('panel-icon');

        card.append(

            icon,

            createElement(
                'h3',
                '',
                skill.title
            ),

            createElement(
                'p',
                '',
                skill.description
            ),

            createTags(skill.items)

        );

    });

}


/* ==========================================
   14. GENERATE EDUCATION CARDS
   ========================================== */

function renderEducation() {

    const grid = $('education-grid');

    grid.replaceChildren();

    education.forEach(item => {

        const card = createCard(

            grid,

            'col-12 col-md-6'

        );

        const icon = createIcon('mortarboard');

        icon.classList.add('panel-icon');

        card.append(

            icon,

            createElement(
                'p',
                'education-date',
                item.date
            ),

            createElement(
                'h3',
                '',
                item.degree
            ),

            createElement(
                'p',
                '',
                item.university
            ),

            createElement(
                'p',
                'small',
                item.location
            ),

            createElement(
                'p',
                '',
                item.description
            )

        );


        if (item.achievements.length > 0) {

            const achievementsContainer = createElement(

                'div',

                'education-achievements'

            );

            item.achievements.forEach(achievement => {

                const achievementBox = createElement(

                    'div',

                    'education-achievement',

                    achievement

                );

                achievementsContainer.append(
                    achievementBox
                );

            });

            card.append(
                achievementsContainer
            );

        }


        card.append(

            createTags(item.tags)

        );

    });

}


/* ==========================================
   15. CONTACT & SOCIAL LINKS
   ========================================== */

function renderContact() {

    const container = $('contact-links');

    const socials = $('hero-socials');

    container.replaceChildren();

    socials.replaceChildren();


    const links = [

        {
            icon: 'envelope',

            label: 'Email Me',

            url: profile.email

                ? 'mailto:' + profile.email

                : ''
        },

        {
            icon: 'linkedin',

            label: 'LinkedIn',

            url: profile.linkedin
        },

        {
            icon: 'github',

            label: 'GitHub',

            url: profile.github
        },

        {
            icon: 'download',

            label: 'Download Resume',

            url: profile.resume
        }

    ];


    links.forEach(item => {

        // Hide links that have not been added.

        if (!item.url) {

            return;

        }


        // Create the contact button.

        const link = createElement(

            'a',

            'btn btn-outline-light'

        );

        link.href = item.url;

        link.append(

            createIcon(item.icon),

            document.createTextNode(
                item.label
            )

        );


        // Download the resume PDF.

        if (item.icon === 'download') {

            link.setAttribute(

                'download',

                'Sanvi_Suman_Pathak_Resume.pdf'

            );

        }


        // Open external profiles in a new tab.

        if (
            item.icon === 'linkedin'
            || item.icon === 'github'
        ) {

            link.target = '_blank';

            link.rel = 'noopener noreferrer';

        }


        container.append(link);


        // Create matching homepage social icons.

        const socialLink = createElement('a');

        socialLink.href = item.url;

        socialLink.title = item.label;

        socialLink.setAttribute(

            'aria-label',

            item.label

        );

        socialLink.append(

            createIcon(item.icon)

        );


        if (item.icon === 'download') {

            socialLink.setAttribute(

                'download',

                'Sanvi_Suman_Pathak_Resume.pdf'

            );

        } else if (item.icon !== 'envelope') {

            socialLink.target = '_blank';

            socialLink.rel = 'noopener noreferrer';

        }


        socials.append(socialLink);

    });

}


/* ==========================================
   16. PYTHON TERMINAL CONTENT
   ========================================== */

const pythonCode = `# A little about me

class DataScientist:

    name = "Sanvi Suman Pathak"

    education = "Master of Data Science"

    skills = [
        "Python", "SQL", "R",
        "Power BI", "Machine Learning"
    ]

    def mission(self):
        return "Turn data into insights"

# Always curious. Always learning.

>>> `;


/* ==========================================
   17. PYTHON SYNTAX HIGHLIGHTING
   ========================================== */

function escapeHTML(text) {

    return text

        .replace(/&/g, '&amp;')

        .replace(/</g, '&lt;')

        .replace(/>/g, '&gt;');

}


function highlightCode(text) {

    const pattern =
        /(#.*$)|("[^"\n]*")|\b(class|def|return|self)\b|\b(DataScientist|mission)\b|(>>>)/gm;

    let result = '';

    let previousIndex = 0;


    for (const match of text.matchAll(pattern)) {

        result += escapeHTML(

            text.slice(
                previousIndex,
                match.index
            )

        );


        let className = '';


        if (match[1]) {

            className = 'comment';

        } else if (match[2]) {

            className = 'string';

        } else if (match[3]) {

            className = 'keyword';

        } else if (match[4]) {

            className = 'function';

        } else if (match[5]) {

            className = 'keyword';

        }


        result +=

            `<span class="${className}">${escapeHTML(match[0])}</span>`;


        previousIndex =

            match.index + match[0].length;

    }


    result += escapeHTML(

        text.slice(previousIndex)

    );


    return result;

}


/* ==========================================
   18. TERMINAL TYPING ANIMATION
   ========================================== */

let characterIndex = 0;

let typingTimer;

const typingSpeed = 20;


function typeCode() {

    characterIndex++;

    $('terminal-code').innerHTML = highlightCode(

        pythonCode.slice(0, characterIndex)

    );


    if (characterIndex < pythonCode.length) {

        typingTimer = setTimeout(

            typeCode,

            typingSpeed

        );

    }

}


function startTyping() {

    clearTimeout(typingTimer);

    characterIndex = 0;

    $('terminal-code').innerHTML = '';


    const reducedMotion = window.matchMedia(

        '(prefers-reduced-motion: reduce)'

    ).matches;


    if (reducedMotion) {

        $('terminal-code').innerHTML =

            highlightCode(pythonCode);

    } else {

        typeCode();

    }

}


/* ==========================================
   19. MOBILE NAVIGATION
   ========================================== */

function setupNavigation() {

    const navigation = $('navigation');

    document

        .querySelectorAll('.nav-link')

        .forEach(link => {

            link.addEventListener('click', () => {

                if (

                    navigation.classList.contains('show')

                    && window.bootstrap

                ) {

                    bootstrap.Collapse

                        .getOrCreateInstance(

                            navigation,

                            { toggle: false }

                        )

                        .hide();

                }

            });

        });

}


/* ==========================================
   20. INITIALISE WEBSITE
   ========================================== */

function initialisePortfolio() {

    renderHighlights();

    renderFilters();

    renderProjects('All');

    renderExperience();

    renderSkills();

    renderEducation();

    renderContact();

    setupNavigation();

    startTyping();


    $('replay').addEventListener(

        'click',

        startTyping

    );


    $('year').textContent =

        new Date().getFullYear();

}


initialisePortfolio();
