document.getElementById("click").addEventListener("click", function() {
    alert("Hint");
});


var decryptBox = document.getElementById("decrypt-box");

// document.getElementById("myForm").addEventListener("submit", function(event) {
// event.preventDefault(); // Prevent the default form submission behavior

// var message = document.getElementById("message").value.trim().toLowerCase();

// if (message === "cyber paws in the bazaar"  && test_1_result === true && test_2_result === true && test_3_result === true && test_4_result === true) {
//     alert("In the midst of a bustling bazaar, a street-smart cat with sunglasses perched atop its head, eyed an empty Amazon box—a perfect napping spot. It had plans to spruce up its fur with some sunscreen and foundation, but alas, it was not to be. The Milton bottle it used to store its grooming essentials was missing, along with the nail paint remover it fancied as a potion. Its muffler lay forgotten in a corner, and the crab bandage it had playfully swiped was now just a memory. The cat’s daydream of nibbling on a Kit Kat faded, as the Wild Stone deodorant can it used as a drum was nowhere in sight.");
// }
// else{
//     alert("Failed")
// }
// });

window.oncontextmenu=function(){
    return false;
}

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
    let progress = document.getElementById('progress').textContent;
    console.log(progress)
    let answer = document.getElementById('answer').value.trim().toLowerCase();
    // answer.setAttribute("type", "text");
    if (answer == "cyber paws in the bazaar" && progress == 'true'){
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