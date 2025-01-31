$(document).ready(() => {
    render_projects('featured');
});

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/database-modeling.jpg',
            link: 'https://www.iit.edu/directory/people/gerald-balekaki',
            title: 'Scalable Database Modeling for Radio Astronomy',
            demo: false,
            technologies: ['Databases', 'Scientific Computing', 'Big Data'],
            description: "Developed a scalable database model for managing Radio Frequency Interference (RFI) data in large-scale telescopes such as MeerKAT.",
            categories: ['featured', 'databases', 'research']
        },
        {
            image: 'assets/images/hpc.jpg',
            link: 'https://www.iit.edu/directory/people/gerald-balekaki',
            title: 'High-Performance Computing in Computational Science',
            demo: false,
            technologies: ['HPC', 'Parallel Computing', 'Python'],
            description: "Research on optimizing large-scale scientific computations using High-Performance Computing (HPC) for data-intensive applications.",
            categories: ['featured', 'hpc', 'computing']
        },
        {
            image: 'assets/images/network-congestion.jpg',
            link: 'https://www.iit.edu/directory/people/gerald-balekaki',
            title: 'Network Congestion Control in High-Speed Networks',
            demo: false,
            technologies: ['Computer Networks', 'TCP Optimization'],
            description: "Investigated the impact of increasing TCP initial congestion window sizes (IW10) on high-speed networks in developing regions.",
            categories: ['featured', 'networking', 'optimization']
        },
        {
            image: 'assets/images/scientific-data.jpg',
            link: 'https://www.iit.edu/directory/people/gerald-balekaki',
            title: 'Big Data Analytics for Scientific Databases',
            demo: false,
            technologies: ['Big Data', 'Scientific Computing'],
            description: "Designed efficient indexing and query optimization techniques for handling massive datasets in scientific applications.",
            categories: ['featured', 'bigdata', 'databases']
        },
        {
            image: 'assets/images/security.jpg',
            link: 'https://www.iit.edu/directory/people/gerald-balekaki',
            title: 'Cybersecurity Challenges in Data-Intensive Applications',
            demo: false,
            technologies: ['Cybersecurity', 'Data Protection'],
            description: "Exploring security concerns in large-scale scientific databases and ensuring data integrity in distributed environments.",
            categories: ['security', 'research']
        }
    ];

    let projects = projects_obj.map(project_mapper).join(""); // Generate HTML for all projects

    projects_area.hide().html(projects).fadeIn();
};

let project_mapper = (project) => {
    return `
        <div class="wrapper">
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}" target="_blank">
                            <img src="${project.image}" alt="${project.title}" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2><a href="${project.link}" target="_blank">${project.title}</a></h2>
                        <p class="paragraph-text-normal">${project.description}</p>
                        ${project.demo ? `<p><a href="${project.demo}" target="_blank" class="project-demo-link">View Demo</a></p>` : ''}
                    </article>
                    
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
    render_projects(slug);
};
