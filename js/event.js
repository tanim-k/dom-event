// use function for add an event to a button : - 2//
function makeRed() {
    document.body.style.backgroundColor = 'red'
}
// with a function and id name : 3//
    const blueButton = document.getElementById
        ('make-blue-button');
         // just set the name of a function - 3 //
        blueButton.onclick = makeBlue; 
        function makeBlue() {
            document.body.style.background = 'blue'
        }
// with a function and id name just no function keyword- anonymous fn - 5 //
    const greenButton = document.getElementById
        ('make-green-button');
        greenButton.onclick = function () {
            document.body.style.backgroundColor = 'green'
        }        
// <!-- add event by function, click with id: 6  -->
       
    const goldenrodButton = document.getElementById('make-goldenrod-button');
        goldenrodButton.addEventListener('click', makeGoldenrodButton);
        function makeGoldenrodButton() {
            document.body.style.backgroundColor = 'goldenrod';
        }    