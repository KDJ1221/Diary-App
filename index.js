// javascript

//can use querySelector to get both classes & ids

//grab the entryForm id object from html
var entryForm = document.getElementById('entryForm');

//grab entries id object from html
var entriesSection = document.querySelector("#entries");

//grab entry textbox class object from html
var entryTextbox = document.querySelector('.entry-textbox');

//grab entry nav class object from html
//this is where the different diary entry counts will be shown
var entriesNav = document.querySelector('.entries-nav');

//setting up date variables
var now = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var hour = now.getHours();

var day = days[ now.getDay() ];
var month = months[ now.getMonth() ];
//initialize a counter for the diary entries
count = 1;

//event listener function to add a diary entry
function addEntry(event){
    //this stops the page from refreshing whenever submit button is clicked 
    event.preventDefault();

    //create an entry div 
    var entryDiv = document.createElement('div');

    //create the class name for this div
    entryDiv.className = 'single-entry';

    //the text for this entry div contains text from the entry textbox
    //defined in the html
    entryDiv.innerText = entryTextbox.value;

    //set this div to not be displayed -> used to hide elements
    //without deleting and recreating them constantly
    entryDiv.style.display = 'none';

    //add each entry div into the #entries section
    entriesSection.appendChild(entryDiv);

    //intialize the text value of the entry textbox to be nothing
    entryTextbox.value = '';

    //create a button that displays the each individual entry
    var displayEntryButton = document.createElement('button');

    //create a class name for the button
    displayEntryButton.className = 'display-entry-button';

    //the text to be displayed on the button will be 
    //each entry number, based on the count initialized above
    displayEntryButton.innerText = "Entry #" + count + ": "+ day + ", " + month + " "+ hour;

    //add each entry button display to the .entries-nav class in the html
    entriesNav.appendChild(displayEntryButton);
    
    //add an event listener for the display button
    displayEntryButton.addEventListener('click', function(){
        //when the button is clicked,
        //iterate through the different entries 
        const allEntries = document.querySelectorAll('.single-entry');
        for(var i = 0; i < allEntries.length; i++){
            //show each entry number based on its index count
            //intialize the display text to being nothing until this button is clicked
            allEntries[i].style.display = 'none';
        }

        //display the entry using the block style
        entryDiv.style.display = 'block';
        
    })
    
    //incerement the counter as entries are being iterated over
    count+=1

}
//each time the submit button is clicked, submit an entry 
entryForm.addEventListener('submit', addEntry);