document.getElementById("click").addEventListener("click", function() {
    alert("Doha'v yluwxdo nhb txhvw");
});
// document.getElementById("myForm").addEventListener("submit", function(event) {
// event.preventDefault(); // Prevent the default form submission behavior
// var message = document.getElementById("message").value.trim().toLowerCase();
// if (message === "teddy’s digital dilemma" && test_1_result === true) {
//     alert("In a whimsical garden, a teddy bear named Jordan donned a cap hat and admired a pink flower, contemplating its day. It wanted to style its fur with some hairwax and add a touch of glamour with a metallic earring, but alas, it couldn’t. The keychain to the treasure box, which held its precious protein powder and favorite Cheetos, was missing. Even the Volini spray, needed for the soreness after a playful day, was out of reach. All because the bear’s cherished 10th class marksheet, which it kept under its pillow, had vanished, along with the 20 rupee coin it had saved for a rainy day.");
// }
// else if (message === "teddy’s digital dilemma" && test_1_result === false) {
//     alert("Failed: test_1_result is false");
// }
// else{
//     alert("Failed")
// }
// });

// document.getElementById('submit-answer').addEventListener("click", ()=>{
//     let answer = document.getElementById('answer').value.trim().toLowerCase();
//     let progress = window.progress;
//     if (answer == "teddy’s digital dilemma" && progress.task1 == true){
//         document.querySelector('.form-section').classList.add('show')
//         event.preventDefault()
//     } else{
//         alert('Enter Correct Answer')
//         event.preventDefault()
//     }
// })

document.getElementById('submit-answer').addEventListener("click", ()=>{
        let progress = document.getElementById('progress').textContent;
        console.log(progress)
        let answer = document.getElementById('answer').value.trim().toLowerCase();
        if (answer == "alex's virtual key quest" && progress == 'true'){
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