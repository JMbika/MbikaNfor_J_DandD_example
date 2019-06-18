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

    //arrays have an index and start at 0
    const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

    //debugger



    //functions
    function switchImage() {
        console.log(this);
        //grab the corresponing background image (0, 1, 2, 3)
        //and get it from the images folder (backGround1.jpg as an example)
        let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

        //set background image style on the dropzone container
        puzzleBoard.style.backgroundImage = `url(${bgImage})`;

        //work on switching the right-hand images so that they match the button at the bottom
        draggablePieces.forEach((image, index) => {
            //log the image and the current index
            console.log(image, index);

        //try to change each image src to correspond
        image.src=`images/${imageNameArray[index]}${this.dataset.puzzleref}.jpg`;
        //debugger;
        });

        //debugger
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
        }); // don't do your default dehaviour, // instead, do the following

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
