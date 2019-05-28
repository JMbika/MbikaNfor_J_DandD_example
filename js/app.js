(()=> {
    //stub
    console.log('fired');
    //Variables
    //const is short for constant -> Variables that shouldnt change
    const piecesBoard = document.querySelector('.puzzle-pieces'),
        puzzleBoard = document.querySelector('.puzzle-board'),
        puzzleSelectors = document.querySelectorAll('#buttonHolder img'),
        dropZones = document.querySelectorAll('.drop-zone');

    let draggablePieces = piecesBoard.querySelectorAll("img");




    //functions
    function switchImage() {
        console.log(this);
    }



    //Events
    puzzleSelectors.forEach(thumbnail => {thumbnail.addEventListener("click", switchImage); });

    //loop through the draggable images
    //this lets us drag stuff => not that hard
    draggablePieces.forEach(piece => {
        piece.addEventListener("dragstart", function(e) {
            console.log('draggin...');

            // data dataTransfer has two methods, a setter and getter
            // set the data on the drag, and retrieve it on the top
            e.dataTransfer.setData("text/plain", this.id);
        });
    });

    //this is the dragover and the drop functionality => this is for the drop Zones
    dropZones.forEach(zone =>{
        //allow user to drag over an element
        zone.addEventListener("dragover", function(e) {
            e.preventDefault();
            console.log('dragged sumpin on me');
        });

        //allow a user to drop element
        zone.addEventListener("drop", function(e) {
            e.preventDefault();
            console.log('you drop sumpin on me');

            let draggedElement = e.dataTransfer.getData("text/plain");
            console.log('you dragged', draggedElement);
            // add the image to the drop zone
            e.target.appendChild(document.querySelector(`#${draggedElement}`));
        });
    });

})();
