document.getElementById("click").addEventListener("click", function() {
    alert("Hint");
});

window.oncontextmenu=function(){
    return false;
}

var decryptBox = document.getElementById("decrypt-box");

document.addEventListener('keydown', function() {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        // alert('Ctrl + Shift + I has been disabled.');
    } else if (event.ctrlKey && event.shiftKey && event.key === 'i'){
        event.preventDefault();
        // alert('Ctrl + Shift + I has been disabled.');
    }
});

document.getElementById('submit-answer').addEventListener("click", ()=>{
    let answer = document.getElementById('answer').value.trim().toLowerCase();
    // answer.setAttribute("type", "text");
    if (answer == "cyber quest for the coin"){
        document.querySelector('.form-section').classList.add('show');
        decryptBox.style.display = "none";
        event.preventDefault();
    }else if (progress === 'false') {
        // Alert the user
        alert('You have not cleared the previous task');
    } else{
        alert('Enter Correct Answer');
        event.preventDefault();
    }
})

document.getElementById("click").addEventListener("click", function() {
    alert("Hint");
});
