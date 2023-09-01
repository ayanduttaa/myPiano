document.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        var buttonIdOnly = event.target.id; 
        var buttonId = "#"+buttonIdOnly;
        var audioLink = "pianoKeysMP3/"+buttonIdOnly+".mp3";
        var audio = new Audio(audioLink);
        audio.play();
    }
});


document.querySelectorAll(".wkeys").forEach(function(button) {
    button.querySelector("span").classList.add("noteText");
});
document.querySelectorAll(".bkeys").forEach(function(button) {
    button.querySelector("span").classList.add("noteTextB");
});

var noteButton = document.getElementById("noteButton");
noteButton.addEventListener("click", function(){
    if (noteButton.textContent === "Hide Note Names") {
        noteButton.textContent = "Show Note Names";
        // noteButton.classList.remove("btn-primary");
        // noteButton.classList.add("btn-secondary");
        document.querySelectorAll(".wkeys").forEach(function(button) {
            button.querySelector("span").classList.add("noDisplay");
        });
        document.querySelectorAll(".bkeys").forEach(function(button) {
            button.querySelector("span").classList.add("noDisplay");
        });
        
    } else {
        noteButton.textContent = "Hide Note Names";
        // noteButton.classList.remove("btn-secondary");
        // noteButton.classList.add("btn-primary");
        document.querySelectorAll(".wkeys").forEach(function(button) {
            button.querySelector("span").classList.remove("noDisplay");
            button.querySelector("span").classList.add("noteText");
        });
        document.querySelectorAll(".bkeys").forEach(function(button) {
            button.querySelector("span").classList.remove("noDisplay");
            button.querySelector("span").classList.add("noteTextB");
        });
        
    }
});
