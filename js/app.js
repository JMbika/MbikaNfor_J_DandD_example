(()=> {
    //stub
    console.log('fired');
    //Variables
    let headline = document.queryselector("h1"),
        subhead=document.queryselector("h3"),
        theButton = document.queryselector("button");

    //functions
    function changeText() {
        headline.textContent ="Now I'm Different!";
        subhead.textContent= "hey me too. but that's ok."
    }


    //Events
    theButton.addEventListener("click", changeText);
})();
