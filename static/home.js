// 'use strict';  //Project name ON CITE!! BAckground color is dark purple throughout for dark mode
const lastName = document.getElementById("last-name");
const firstName = document.getElementById("first-name");
const title = document.getElementById("title");
const publisher = document.getElementById("Publisher");
const dateAccessed = document.getElementById("date-accessed");
const datePublished = document.getElementById("date-published");
const url = document.getElementById("url");
const citationType = document.getElementById("citation-type")
const button = document.querySelector(".button");
var cite = document.querySelector('.cite-btn');

var citeb = document.querySelector('.btn');

citeb.addEventListener("click", printhello);

function printhello() {
    console.log("hello");
    alert("hello");
}


var allCitations = [];
currentCitation = 0;
// document.querySelector(".cite-btn").addEventListener('click', ()=> CreateNewMLACitation(lastName, firstName, title, publisher,datePublished, dateAccessed, url));

  //The copy to clipboard only works with textArea tags I believe. 
function CreateNewMLACitation(last, first, title,  publish, datePub, dateAcc, link) {    //Now add text and decorations

    last.defaultValue = 'undefined';
    first.defaultValue = 'undefined';
    title.defaultValue = 'undefined';
    publish.defaultValue = 'undefined';
    datePub.defaultValue = 'undefined';
    dateAcc.defaultValue = 'undefined';
    link.defaultValue = 'undefined';

    var citations = document.createElement("div");
    var citation = document.createElement("div");
    var buttons = document.createElement("div");
    var copyButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    buttons.classList.add("buttons");

    copyButton.classList.add("copy-button");
    copyButton.innerHTML = `<i class="far fa-copy icon" id="citation-${currentCitation + 1}-button"></i>Copy`;
    copyButton.setAttribute('onclick', `copyToClickBoard(${currentCitation + 1})`);
    deleteButton.setAttribute('onclick', `deleteCitation(${currentCitation + 1})`);
    
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = `<i class="far fa-trash-alt icon"></i>Delete`;


    citation.id = `citation-${currentCitation + 1}`;
    citations.id = `citations-${currentCitation + 1}`; 

    citation.classList.add("citation");
    citation.innerHTML = `<textarea name="textArea" id="textArea-${currentCitation+1}">${last.value}, ${first.value}. "${title.value}". ${publish.value}, Published ${datePub.value}. Accessed on ${dateAcc.value}. ${citationType.value}</textarea>`
    
    currentCitation = currentCitation + 1;
    citations.classList.add("citations");


    citations.appendChild(citation);
    buttons.appendChild(deleteButton);
    buttons.appendChild(copyButton);
    citations.appendChild(buttons);

    document.body.appendChild(citations);

    if (title.value === '') {
        console.log('the value is null');
    }
    // console.log(title.value);


    lastName.value = "";
    firstName.value = "";
    title.value = "";
    publisher.value = "";
    url.value = "";
}


// function CopyAllCitations{

// }
function copyToClickBoard(number){
    var content = document.getElementById(`textArea-${number}`).innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

    var copyPopUp = document.querySelector('.pop-up');
    copyPopUp.classList.add('active');
    setTimeout(() => copyPopUp.classList.remove('active'), 1000);
 
}
function deleteCitation(number) {
    var citation = document.getElementById(`citations-${number}`);
    citation.remove();
}


