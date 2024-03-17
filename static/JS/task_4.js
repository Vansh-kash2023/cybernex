document.getElementById("click").addEventListener("click", function() {
    alert("Hint");
});

// document.getElementById("myForm").addEventListener("submit", function(event) {
// event.preventDefault(); // Prevent the default form submission behavior

// var message = document.getElementById("message").value.trim().toLowerCase();

// if (message === "the fox’s digital hoard"  && test_1_result === true && test_2_result === true && test_3_result === true) {
//     alert("In a cozy den, a clever fox had an unusual collection of human objects. It wanted to trade a lamp for a speaker to enjoy the forest melodies, but it couldn’t. The belt it used to hang its treasures was broken, the sev namkeen it loved was spilled and eaten by birds, and the spoon it fancied as a scepter was lost. Its stash of Hide and Seek biscuits and chew gum was inaccessible, locked in a laptop bag it couldn’t open without the A4 size paper where it scribbled its secrets. And the toothpaste, which it used to polish its finds, was squeezed empty");
// }
// else{
//     alert("Failed")
// }
// });

document.getElementById('submit-answer').addEventListener("click", ()=>{
    let progress = document.getElementById('progress').textContent;
    console.log(progress)
    let answer = document.getElementById('answer').value.trim().toLowerCase();
    if (answer == "the fox’s digital hoard" && progress == 'true'){
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
