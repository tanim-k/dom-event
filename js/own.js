function handleJustFunctionClick() {
    const clickingMethod = document.getElementById('clicking-method');
    console.log(clickingMethod);
    clickingMethod.innerText = 'set by using function, hot topic';
}
// direct by add event listener /
document.getElementById('handle-d-event').addEventListener('click', function(){
     const clickingMethod = document.getElementById('clicking-method');
     clickingMethod.innerText = 'set by function with event listener'
})
        // direct by add event listener /
document.getElementById('handle-d-own').addEventListener('click', function(){
    const clickingMethod = document.getElementById('clicking-method')
    clickingMethod.innerText = 'tried and set directly bay me first time'  
})
document.getElementById('handle-d-own-2').addEventListener('click', function(){
    const clickingMethod = document.getElementById('clicking-method')
    clickingMethod.innerText = 'tried and set directly bay me first time 2'  
})
document.getElementById('handle-d-own-1').addEventListener('click', function(){
    const clickingMethod = document.getElementById('clicking-method')
    clickingMethod.innerText = 'tried and set directly bay me first time 1'  
})
document.getElementById('handle-d-own-3').addEventListener('click', function(){
    const clickingMethod = document.getElementById('clicking-method')
    clickingMethod.innerText = 'tried and set directly bay me first time 3'  
})