$(document).ready(function() {
    load_research_papers();
});

function load_research_papers() {
    console.log("Loading Research Papers... ✅");

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
