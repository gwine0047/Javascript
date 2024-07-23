const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

// this is called anytime the app is refreshed.
getNotes().forEach((note) =>{

    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
});

function addNote(){

    /**
     * addNote: This creates a note object with id and content
     * It calls the createNote function that creates and returns a note.
     * It then inserts the note into the DOM, push to Object dictionary
     * and saves it in the chrome local storage.
     */
    // this will help get the notes from the storage so the push function can concatenate and not overwrite.

    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 1000000),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    // add note after creation inside the DOM (div with class app)
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);
    saveNote(notes);
}

function createNoteEl(id, content){
    /**
     * createNoteEl: creates a note element for the DOM
     * It creates his own html element (textarea)
     * gives its class and ....then returns it
     * 
     * It also handles deletion and updating. When element is double clicked, it calls
     * the deleteNote function.
     * It calls updateNote when an input is detected.
     */
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id, element);
        }
    });

    element.addEventListener("input", ()=>{
        updateNote(id, element.value);
    });
    return element;
}


function deleteNote(id, element){
    /**
     * deleteNode: deletes an element from the localstorage and
     * also from the DOM.
     * It does this based on the id.
     */
    // this removes the element from the local storage.
    const notes = getNotes().filter((note)=>note.id != id)
    saveNote(notes);

    appEl.removeChild(element);
};

function updateNote(id, content){
    /**
     * 
     */
    const notes = getNotes();
    const target = notes.filter((note)=>note.id == id)[0];
    target.content = content;
    saveNote(notes);
}

function saveNote(notes){
    // we are saving into the local storage which doesnt allow saving arrays
    // note-app is just a name given to the storage. It can be anything else
    localStorage.setItem("note-app", JSON.stringify(notes));
}


function getNotes(){
        /**
     * getNotes: gets the notes in the localstorage.
     * returns an object.
     */
    // Objects need to be parsed cause they have been stringified
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}
btnEl.addEventListener("click", addNote);