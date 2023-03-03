let playButtonEl=document.getElementById("play-button");
let containerEl=document.getElementById("container");

playButtonEl.addEventListener("click", function(){
    for(i=1; i<=100; i++){
        let casella= document.createElement('div');
        casella.classList.add("quadrata");
        casella.innerText= i;
        containerEl.append(casella);

    }
    


})