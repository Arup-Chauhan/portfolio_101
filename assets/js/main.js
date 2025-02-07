$(document).ready(function() {
    general_utils();
    load_research_papers();
    load_research_assistants();
});

function general_utils() {
    // Smooth scrolling for nav links
    $('.nav-menu a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
        }
    });
}

// Load Research Papers
function load_research_papers() {
    let papers = [
        {
            url: 'https://example.com/paper1.pdf',
            title: 'A Scalable Database Model for Radio Telescope Data',
            authors: 'G. Balekaki, M. Kuttel',
            conference: 'SAICSIT ’19, Skukuza, South Africa'
        },
        {
            url: 'https://example.com/paper2.pdf',
            title: 'Performance Evaluation of an Integrated RFI Database',
            authors: 'G. Balekaki, M. Kuttel',
            conference: 'SAICSIT ’20, Cape Town, South Africa'
        },
        {
            url: 'https://example.com/paper3.pdf',
            title: 'Impact of High TCP Initial Window on Congested Networks',
            authors: 'G. Balekaki, I. A. Rai',
            conference: 'AFRICOMM, Yaoundé, Cameroon'
        }
    ];

    let papers_html = papers.map(paper => `
        <div class="research-paper">
            <h3><a href="${paper.url}" target="_blank">${paper.title}</a></h3>
            <p><strong>Authors:</strong> ${paper.authors}</p>
            <p><strong>Conference:</strong> ${paper.conference}</p>
        </div>
    `).join("");

    $('#publications-list').html(papers_html);
}

// Load Research Assistants
function load_research_assistants() {
    let assistants = [
        {
            name: 'John Doe',
            role: 'Graduate Research Assistant',
            focus: 'High-Performance Computing',
            linkedin: 'https://linkedin.com/in/johndoe'
        },
        {
            name: 'Jane Smith',
            role: 'Undergraduate Research Assistant',
            focus: 'Machine Learning in Security',
            linkedin: 'https://linkedin.com/in/janesmith'
        },
        {
            name: 'Robert Johnson',
            role: 'PhD Researcher',
            focus: 'Big Data Optimization',
            linkedin: 'https://linkedin.com/in/robertjohnson'
        }
    ];

    let assistants_html = assistants.map(assistant => `
        <div class="assistant-card">
            <h3>${assistant.name}</h3>
            <p><strong>Role:</strong> ${assistant.role}</p>
            <p><strong>Research Focus:</strong> ${assistant.focus}</p>
            <p><a href="${assistant.linkedin}" target="_blank">LinkedIn Profile</a></p>
        </div>
    `).join("");

    $('#assistants-list').html(assistants_html);
}
