$(document).ready(() => {
    load_publications();
});

let load_publications = () => {
    let publications_area = $('#publications-list');

    let publications = [
        {
            title: "A Scalable Database Model for RFI Data in MeerKAT Radio Telescope",
            authors: "Gerald N. Balekaki, M. Kuttel",
            year: 2019,
            conference: "SAICSIT '19, Skukuza, South Africa",
            link: "https://www.iit.edu/directory/people/gerald-balekaki"
        },
        {
            title: "Performance Evaluation of an Integrated RFI Database at MeerKAT Radio Telescope",
            authors: "Gerald N. Balekaki, M. Kuttel",
            year: 2020,
            conference: "SAICSIT '20, Cape Town, South Africa",
            link: "https://www.iit.edu/directory/people/gerald-balekaki"
        },
        {
            title: "Impact of High TCP Initial Window on Congested Networks",
            authors: "Gerald N. Balekaki, Idris A. Rai",
            year: 2012,
            conference: "AFRICOMM, Yaoundé, Cameroon",
            link: "https://www.iit.edu/directory/people/gerald-balekaki"
        }
    ];

    let publications_html = publications.map(pub => `
        <div class="publication-card">
            <h3><a href="${pub.link}" target="_blank">${pub.title}</a></h3>
            <p><strong>Authors:</strong> ${pub.authors}</p>
            <p><strong>Year:</strong> ${pub.year}</p>
            <p><strong>Conference:</strong> ${pub.conference}</p>
        </div>
    `).join("");

    publications_area.html(publications_html);
};
