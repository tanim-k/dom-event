// use function for add an event to a button //
function makeRed() {
    document.body.style.backgroundColor = 'red'
}
// with a function and id name //
const blueButton = document.getElementById
        ('make-blue-button');
         // just set the name of a function
        blueButton.onclick = makeBlue; 
        function makeBlue() {
            document.body.style.background = 'blue'
        }