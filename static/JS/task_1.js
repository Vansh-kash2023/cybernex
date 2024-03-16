document.getElementById('submit-answer').addEventListener("click", ()=>{
    let answer = document.getElementById('answer').value.trim().toLowerCase();
    if (answer == "cyber quest for the coin"){
        document.querySelector('.form-section').classList.add('show');
        event.preventDefault();
    } else{
        alert('Enter Correct Answer');
        event.preventDefault();
    }
})