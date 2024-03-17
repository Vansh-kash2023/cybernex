document.getElementById('submit-answer').addEventListener("click", ()=>{
    let answer = document.getElementById('answer').value.trim().toLowerCase();
    if (answer == "cyber quest for the coin"){
        document.querySelector('.form-section').classList.add('show');
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
