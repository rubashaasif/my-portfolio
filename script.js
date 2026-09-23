/* =====================================================
   RUBASHA ASIF PORTFOLIO
   PROJECT SYSTEM
===================================================== */


/*
    =====================================================
    HOW TO ADD A NEW PROJECT
    =====================================================

    Copy one project object and add it inside "projects".

    IMPORTANT:

    category must be one of:

    python
    data-analysis
    excel
    power-bi
    n8n
    ai

    Example:

    {
        id: "my-project",

        title: "My Project",

        category: "excel",

        categoryName: "Excel",

        description: "Short description",

        details: "Long project description",

        highlights: [
            "Point 1",
            "Point 2",
            "Point 3"
        ],

        tools: [
            "Excel",
            "Charts"
        ],

        image: "assets/projects/my-project.png",

        github: "YOUR GITHUB LINK",

        demo: "YOUR LIVE DEMO LINK"
    }

*/


/* =====================================================
   PROJECTS
===================================================== */

const projects = [

    /* =================================================
       FOOD DELIVERY ANALYTICS
    ================================================= */

    {
        id: "food-delivery-analytics",

        title:
            "Food Delivery Analytics",

        category:
            "data-analysis",

        categoryName:
            "Data Analysis",

        description:
            "Interactive food delivery analytics dashboard analyzing delivery time, traffic, weather, distance and operational patterns.",

        details:
            "This project analyzes food delivery operations and identifies factors that affect delivery performance. The dashboard includes data cleaning, interactive filters, business analysis, visualizations and AI-powered recommendations.",

        highlights: [

            "Cleaned and prepared the dataset",

            "Analyzed delivery time and distance",

            "Studied traffic and weather impact",

            "Created interactive visualizations",

            "Added AI-powered business recommendations"

        ],

        tools: [

            "Python",

            "Pandas",

            "Plotly",

            "Streamlit",

            "AI"

        ],

                image: "assets/projects/food-delivery.png",
        github: "https://github.com/rubashaasif/Food_Delivery_Analytics",
        demo: "https://fooddelivery-analytics.streamlit.app/"
    },

    {
        id: "ai-data-analysis-assistant",
        title: "AI Data Analysis Assistant",
        category: "data-analysis",
        categoryName: "Data Analysis",

        description: "AI-powered data analysis assistant that allows users to upload datasets and receive data-driven insights.",

        details: "An interactive AI-powered data analysis assistant where users can upload a CSV dataset and ask questions about their data. The application analyzes the uploaded dataset and provides useful insights through an easy-to-use Streamlit interface.",

        highlights: [
            "Upload CSV datasets",
            "Ask questions about the uploaded data",
            "AI-powered question understanding",
            "Automated data analysis",
            "Generate data-driven insights",
            "Interactive Streamlit interface"
        ],

        tools: [
            "Python",
            "Pandas",
            "Streamlit",
            "AI / LLM",
            "OpenRouter"
        ],

        image: "assets/projects/data analysis screenshot.png",
        github: "https://github.com/rubashaasif/AI_data_analysis_assistant",
        demo: "https://aidataanalysisassistant.streamlit.app/"
    }
];


/* =====================================================
   CATEGORIES
===================================================== */

const categories = [

    {
        id:
            "data-analysis",

        name:
            "Data Analysis",

        label:
            "DATA ANALYSIS",

        icon:
            "DA",

        description:
            "Exploratory analysis, visualization, business insights and data-driven projects."
    },


    {
        id:
            "python",

        name:
            "Python",

        label:
            "PYTHON",

        icon:
            "PY",

        description:
            "Python projects involving data processing, analysis, visualization and applications."
    },


    {
        id:
            "excel",

        name:
            "Excel",

        label:
            "EXCEL",

        icon:
            "EX",

        description:
            "Dashboards, reports, formulas and spreadsheet-based data analysis."
    },


    {
        id:
            "power-bi",

        name:
            "Power BI",

        label:
            "POWER BI",

        icon:
            "BI",

        description:
            "Interactive business intelligence dashboards and reporting solutions."
    },


    {
        id:
            "n8n",

        name:
            "n8n Automation",

        label:
            "AUTOMATION",

        icon:
            "n8n",

        description:
            "Workflow automation, API integrations and AI-powered business processes."
    },


    {
        id:
            "ai",

        name:
            "AI / ML",

        label:
            "AI / ML",

        icon:
            "AI",

        description:
            "Machine learning, Generative AI and practical AI-powered applications."
    }

];


/* =====================================================
   ELEMENTS
===================================================== */

const categoryView =
    document.getElementById(
        "project-category-view"
    );


const categoryContainer =
    document.getElementById(
        "project-categories"
    );


const projectListView =
    document.getElementById(
        "project-list-view"
    );


const projectContainer =
    document.getElementById(
        "project-container"
    );


const backButton =
    document.getElementById(
        "back-to-categories"
    );


const projectListTitle =
    document.getElementById(
        "project-list-title"
    );


const projectListLabel =
    document.getElementById(
        "project-list-label"
    );


const projectListDescription =
    document.getElementById(
        "project-list-description"
    );


const emptyMessage =
    document.getElementById(
        "empty-category-message"
    );


/* =====================================================
   GET PROJECTS FOR CATEGORY
===================================================== */

function getCategoryProjects(
    categoryId
) {

    return projects.filter(
        function (project) {

            return (
                project.category ===
                categoryId
            );

        }
    );

}


/* =====================================================
   CHECK REAL IMAGE
===================================================== */

function getProjectThumbnail(
    project
) {

    if (
        !project ||
        !project.image
    ) {

        return null;

    }


    if (
        project.image.includes(".")
    ) {

        return project.image;

    }


    return null;

}


/* =====================================================
   RENDER CATEGORY CARDS
===================================================== */

function renderCategoryCards() {

    categoryContainer.innerHTML =
        "";


    categories.forEach(
        function (category) {

            const categoryProjects =
                getCategoryProjects(
                    category.id
                );


            const featuredProject =
                categoryProjects[0];


            const thumbnail =
                getProjectThumbnail(
                    featuredProject
                );


            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "project-category-card";


            card.addEventListener(
                "click",
                function () {

                    openProjectCategory(
                        category.id
                    );

                }
            );


            let imageHTML =
                "";


            /*
                If category has a real
                project thumbnail,
                display it.
            */

            if (thumbnail) {

                imageHTML = `

                    <div
                        class="category-card-image"
                    >

                        <img
                            src="${thumbnail}"
                            alt="${featuredProject.title}"
                        >

                    </div>

                `;

            }


            /*
                If category has no project,
                display a clean technology
                visual instead.
            */

            else {

                imageHTML = `

                    <div
                        class="
                            category-card-image
                            category-icon-image
                        "
                    >

                        <span>
                            ${category.icon}
                        </span>

                    </div>

                `;

            }


            let projectMeta =
                "";


            if (
                categoryProjects.length > 0
            ) {

                projectMeta = `

                    <div
                        class="category-meta"
                    >

                        ${categoryProjects.length}

                        ${
                            categoryProjects.length === 1
                                ? "project"
                                : "projects"
                        }

                    </div>

                `;

            }


            card.innerHTML = `

                ${imageHTML}


                <div
                    class="category-card-content"
                >

                    <span
                        class="category-label"
                    >
                        ${category.label}
                    </span>


                    <h3>
                        ${category.name}
                    </h3>


                    <p>
                        ${category.description}
                    </p>


                    ${projectMeta}


                    <span
                        class="category-action"
                    >
                        Explore Projects →
                    </span>

                </div>

            `;


            categoryContainer.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   OPEN CATEGORY
===================================================== */

function openProjectCategory(
    categoryId
) {

    const category =
        categories.find(
            function (item) {

                return (
                    item.id ===
                    categoryId
                );

            }
        );


    if (!category) {

        return;

    }


    const categoryProjects =
        getCategoryProjects(
            categoryId
        );


    projectListLabel.textContent =
        category.label;


    projectListTitle.textContent =
        `${category.name} Projects`;


    projectListDescription.textContent =
        category.description;


    categoryView.hidden =
        true;


    projectListView.hidden =
        false;


    projectContainer.innerHTML =
        "";


    emptyMessage.hidden =
        categoryProjects.length !== 0;


    if (
        categoryProjects.length > 0
    ) {

        displayProjects(
            categoryProjects
        );

    }


    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =====================================================
   BACK TO CATEGORIES
===================================================== */

function showProjectCategories() {

    projectListView.hidden =
        true;


    categoryView.hidden =
        false;


    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =====================================================
   DISPLAY PROJECTS
===================================================== */

function displayProjects(
    projectList
) {

    projectContainer.innerHTML =
        "";


    projectList.forEach(
        function (project) {

            const projectCard =
                document.createElement(
                    "article"
                );


            projectCard.className =
                "project-card";


            let toolsHTML =
                "";


            project.tools.forEach(
                function (tool) {

                    toolsHTML += `

                        <span
                            class="project-tool"
                        >
                            ${tool}
                        </span>

                    `;

                }
            );


            let imageHTML =
                "";


            if (
                project.image &&
                project.image.includes(".")
            ) {

                imageHTML = `

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                `;

            }


            else {

                imageHTML = `

                    <div
                        class="project-placeholder"
                    >
                        ${project.image || "PROJECT"}
                    </div>

                `;

            }


            let githubLink =
                "";


            if (
                project.github &&
                project.github !== "#"
            ) {

                githubLink = `

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub →
                    </a>

                `;

            }


            let demoLink =
                "";


            if (
                project.demo &&
                project.demo !== "#"
            ) {

                demoLink = `

                    <a
                        href="${project.demo}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo →
                    </a>

                `;

            }


            const projectIndex =
                projects.indexOf(
                    project
                );


            projectCard.innerHTML = `

                <div
                    class="project-image"
                >

                    ${imageHTML}

                </div>


                <div
                    class="project-content"
                >

                    <span
                        class="project-category"
                    >
                        ${project.categoryName}
                    </span>


                    <h3>
                        ${project.title}
                    </h3>


                    <p>
                        ${project.description}
                    </p>


                    <div
                        class="project-tools"
                    >
                        ${toolsHTML}
                    </div>


                    <div
                        class="project-links"
                    >

                        ${githubLink}

                        ${demoLink}


                        <button
                            class="details-button"
                            type="button"
                        >
                            Details →
                        </button>

                    </div>

                </div>

            `;


            const detailsButton =
                projectCard.querySelector(
                    ".details-button"
                );


            detailsButton.addEventListener(
                "click",
                function () {

                    openProjectDetails(
                        projectIndex
                    );

                }
            );


            projectContainer.appendChild(
                projectCard
            );

        }
    );

}


/* =====================================================
   PROJECT DETAILS MODAL
===================================================== */

function openProjectDetails(
    projectIndex
) {

    const project =
        projects[projectIndex];


    if (!project) {

        return;

    }


    const modal =
        document.getElementById(
            "project-modal"
        );


    const modalTitle =
        document.getElementById(
            "modal-title"
        );


    const modalCategory =
        document.getElementById(
            "modal-category"
        );


    const modalDescription =
        document.getElementById(
            "modal-description"
        );


    const modalHighlights =
        document.getElementById(
            "modal-highlights"
        );


    const modalTools =
        document.getElementById(
            "modal-tools"
        );


    const modalGithub =
        document.getElementById(
            "modal-github"
        );


    const modalDemo =
        document.getElementById(
            "modal-demo"
        );


    modalTitle.textContent =
        project.title;


    modalCategory.textContent =
        project.categoryName;


    modalDescription.textContent =
        project.details;


    modalHighlights.innerHTML =
        "";


    project.highlights.forEach(
        function (item) {

            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                item;


            modalHighlights.appendChild(
                li
            );

        }
    );


    modalTools.innerHTML =
        "";


    project.tools.forEach(
        function (tool) {

            const span =
                document.createElement(
                    "span"
                );


            span.className =
                "project-tool";


            span.textContent =
                tool;


            modalTools.appendChild(
                span
            );

        }
    );


    modalGithub.href =
        project.github || "#";


    modalDemo.href =
        project.demo || "#";


    modalGithub.style.display =
        (
            project.github &&
            project.github !== "#"
        )
            ? "inline-flex"
            : "none";


    modalDemo.style.display =
        (
            project.demo &&
            project.demo !== "#"
        )
            ? "inline-flex"
            : "none";


    modal.classList.add(
        "show"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeProjectDetails() {

    const modal =
        document.getElementById(
            "project-modal"
        );


    modal.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   EVENTS
===================================================== */

backButton.addEventListener(
    "click",
    showProjectCategories
);


window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "project-modal"
            );


        if (
            event.target === modal
        ) {

            closeProjectDetails();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProjectDetails();

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderCategoryCards();