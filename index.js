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
var INPUTS = document.querySelectorAll("input");

var switchh = document.getElementById("switchh");
//For some reason I cannot target the buttons when I do querySelectorAll("button"), all that shows is the cite button


addToPage();

function showInput(item) {
    item.classList.toggle("dark-mode");
}

cite.addEventListener("click", function () { printHello() });
switchh.addEventListener("click", function () { switchMode() }); 


function switchMode() {
    INPUTS.forEach(showInput);
    document.body.classList.toggle("dark-mode");
    cite.classList.toggle("dark-mode");
}

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

    addToPage(num);
    
    var site = `<div class="citations" id="citations-${num}"><div class="citation" id="citation-${num}"><textarea name="textArea" id="textArea-${num}">${lastName.value}, ${firstName.value}. "${title.value}". ${publisher.value}, Published ${datePublished.value}. Accessed on ${dateAccessed.value}. ${citationType.value}</textarea></div><div class="buttons"><button class="delete-button butto" onclick="deleteCitation(${num})"><i class="far fa-trash-alt icon"></i>Delete</button><button class="copy-button butto" onclick="copyToClickBoard(${num})"><i class="far fa-copy icon"  id="citation-${num}-button"></i></i>Copy</button></div></div>`;

    addToCookie(lastName.value, site);
    document.cookie = `count=${num+1}`;
    console.log(`just changed it`);
}
function addToCookie(author, citation) {
    document.cookie = `${author}=${citation}`;
}
function addToPage(number) {
    var all = document.cookie.split(/; */);
    for (var i = 0; i < all.length; i++){
        if (all[i].split("=")[0] != "count") {
            var citations = document.createElement("div");
            citations.className = "a"+i + " "+"citee";
            citations.innerHTML = all[i].substring(all[i].indexOf("=") + 1);
            document.body.appendChild(citations);
        }
    }
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
    var lastname = citation.innerHTML.split(">")[2].split(",")[0];
    var text = document.querySelector("."+"a"+number);
    console.log(lastname);
    document.cookie = (`${lastname}=${text}; expires=` + new Date(2020, 1, 1));
    var num = document.querySelectorAll(".citations").length;
    console.log(num);
    document.cookie = `count=${num-1}`;
    citation.remove();

}