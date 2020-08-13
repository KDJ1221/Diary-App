// javascript
//can use querySelector to get both classes & ids
var entryForm = document.getElementById('entryForm');
var entriesSection = document.querySelector("#entries");
var entryTextbox = document.querySelector('.entry-textbox');
var entriesNav = document.querySelector('.entries-nav');

count = 1;
function addEntry(event){
    event.preventDefault();
    var entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';

    var displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);
    
    displayEntryButton.addEventListener('click', function(){
        const allEntries = document.querySelectorAll('.single-entry');
        for(var i = 0; i < allEntries.length; i++){
            allEntries[i].style.display = 'none';
        }

        entryDiv.style.display = 'block';
        
    })

    count+=1

}

entryForm.addEventListener('submit', addEntry);