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
const form = document.getElementById("form");
var cite = document.getElementById("cite");


// document.cookie = "count=0";

addToPage();

cite.addEventListener("click", function () {printHello() });

//   The copy to clipboard only works with textArea tags I believe. 
function printHello() {    //Now add text and decorations
    var num = document.querySelectorAll(".citations").length;
    document.cookie = `count=${num}`;
    
    // console.log('HWEW');
    lastName.defaultValue = 'undefined';
    firstName.defaultValue = 'undefined';
    title.defaultValue = 'undefined';
    publisher.defaultValue = 'undefined';
    datePublished.defaultValue = 'undefined';
    dateAccessed.defaultValue = 'undefined';
    url.defaultValue = 'undefined';
    var count = document.cookie.split(/; */)[0];
    var currentCitation = parseInt(count.substring(count.indexOf("=") + 1));

    // console.log((typeof parseInt(currentCitation)));
    
    var site = `<div class="citations" id="citations-${currentCitation}"><div class="citation" id="citation-${currentCitation}"><textarea name="textArea" id="textArea-${currentCitation}">${lastName.value}, ${firstName.value}. "${title.value}". ${publisher.value}, Published ${datePublished.value}. Accessed on ${dateAccessed.value}. ${citationType.value}</textarea></div><div class="buttons"><button class="delete-button" onclick="deleteCitation(${currentCitation})"><i class="far fa-trash-alt icon"></i>Delete</button><button class="copy-button" onclick="copyToClickBoard(${currentCitation})"><i class="far fa-copy icon"  id="citation-${currentCitation}-button"></i></i>Copy</button></div></div>`;

    addToLocalStorage(lastName.value, site);
    document.cookie = `count=${num+1}`;
    console.log(`just changed it`);
}
function addToLocalStorage(author, citation) {
    document.cookie = `${author}=${citation}`;
    addToPage();
}
function addToPage() {
    var all = document.cookie.split(/; */);
    for (var i = 0; i < all.length-1; i++){
        var citations = document.createElement("div");
        var ok = all[i];
        citations.innerHTML = all[i].substring(all[i].indexOf("=") + 1);
        // console.log(ok[i].substring(ok[i].indexOf("=") + 1));
        document.body.appendChild(citations);
    }
}



// // function CopyAllCitations{

// // }
// // function copyToClickBoard(number){
// //     var content = document.getElementById(`textArea-${number}`).innerHTML;

// //     navigator.clipboard.writeText(content)
// //         .then(() => {
// //         console.log("Text copied to clipboard...")
// //     })
// //         .catch(err => {
// //         console.log('Something went wrong', err);
// //     })

// //     var copyPopUp = document.querySelector('.pop-up');
// //     copyPopUp.classList.add('active');
// //     setTimeout(() => copyPopUp.classList.remove('active'), 1000);
 
// // }
// // function deleteCitation(number) {
// //     var citation = document.getElementById(`citations-${number}`);
// //     citation.remove();
// // }