function create_note() {
    const note_container = document.getElementsByClassName("note-container");
    for (let i = 0; i < note_content.length; ++i){

        const note_content = document.createElement("div");
        note_content.classList.add("note-content");
        note_container[i].appendChild(note_content);
        note_content.innerText = note_container[i].innerText;
        note_container[i].innerText = "";
        console.log(note_content.innerText);
        

        const vertical_bar = document.createElement("div");
        vertical_bar.classList.add("vertical-bar");
        note_container[i].appendChild(vertical_bar);

        const takeaway = document.createElement("div");
        takeaway.classList.add("takeaway");
        takeaway.innerText = "TAKEAWAY";
        note_container[i].appendChild(takeaway);
    }
}
create_note();

function vertical_bar_changing(){
    const note_container = document.getElementsByClassName("note-container");
    for (let i = 0; i < note_container.length; ++i) {
        const takeaway = note_container[i].querySelector(".takeaway");
        const vertical_bar = takeaway.nextElementSibling;
        const note_content = vertical_bar.nextElementSibling;        
        note_container[i].addEventListener("mouseover", function(){
            note_container[i].style.backgroundColor = "#379e42";
            note_container[i].style.borderColor = "#1c7301";

            note_content.style.marginLeft = "20px"; 
            note_content.style.color = "white";
            
            vertical_bar.style.height = note_content.scrollHeight + 5 + "px";
            vertical_bar.style.marginLeft = "100px";
            

            takeaway.style.marginRight ="0px" ;
            takeaway.style.letterSpacing = "3px";
            takeaway.style.opacity = "1";

        });
        note_container[i].addEventListener("mouseout", function(){
            note_container[i].style.backgroundColor = "#8e9490";
            note_container[i].style.borderColor = "Black";

            note_content.style.marginLeft = "20px";
            note_content.style.color = "black";

            vertical_bar.style.height = null;
            vertical_bar.style.marginLeft = "0px";

            takeaway.style.marginRight = "0px";
            takeaway.style.letterSpacing = "normal";
            takeaway.style.opacity = "0";

        })
    }


};

vertical_bar_changing();