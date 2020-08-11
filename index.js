// javascript

var entryForm = document.getElementById("entryForm");
var entriesSection = document.getElementById("entries");
var entryTextbox = document.getElementsByClassName('entry-textbox');

function addEntry(event){
    event.preventDefault();
    var entryDiv = document.createElement("div");
    entryDiv.className = "single-entry";
    entryDiv.innerText = entryTextbox[0].value;
    entriesSection.appendChild(entryDiv);
    entryTextbox[0].value = "";
}

entryForm.addEventListener("submit", addEntry);