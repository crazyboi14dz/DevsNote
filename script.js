console.log("welcome to magic notes");
showNotes();
//input the value of notes
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function() {

    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    showNotes();
})
///show the notes in distop
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    console.log("sdflsd")
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let noteselm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    } else {
        noteselm.innerHTML = `Nothing to show here add a note `;
    }
}
//delet  notes
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}
function myFunction() {

    var copyText = document.getElementById("addtxt");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    let a = document.getElementById('copytextbtn').innerText = "COPYED";
}


// Unederline text function
let bool = false;
function underline() {
    if (bool == false) {
        var element = document.getElementById("addtxt");
        console.log("text underline")
        element.style.textDecoration = "underline";
        bool = true;
    }
    else {
        var element = document.getElementById("addtxt");
        console.log("text bold")
        element.style.textDecoration = "none";
        bool = false;
    }

}


// TExt bold function
let bol = true;
function boldtext() {
    if (bol == true) {
        var element = document.getElementById("addtxt");
        element.style.fontWeight = 'bold';
        console.log("text bold")
        bol = false;
    }
    else {
        console.log("notmal")
        var element = document.getElementById("addtxt");
        element.style.fontWeight = 'normal';
        console.log("text light")
        bol = true;
    }
}


