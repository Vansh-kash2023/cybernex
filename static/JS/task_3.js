document.getElementById("click").addEventListener("click", function() {
    alert("Hint");
});
// document.getElementById("myForm").addEventListener("submit", function(event) {
// event.preventDefault(); // Prevent the default form submission behavior
// var message = document.getElementById("message").value.trim().toLowerCase();
// if (message === "raven’s cyber cache" && test_1_result === true && test_2_result === true) {
//     alert("In a bustling cityscape, a resourceful raven with a penchant for shiny objects perched atop a lamppost, its gaze fixed on a black t-shirt fluttering on a clothesline. It had planned to trade the shirt for a lighter it coveted from the corner store. Yet, its grand scheme was thwarted, for the screwdriver it used to pry open its treasure box was missing, along with the controller for its automated nest gate. The raven’s collection, including a red-colored hairband, eye drops for the dry season, a sparkling bracelet, a pillow cover woven from the finest threads, a weaving needle it fancied as a sword, and a pair of formal shoes it had amusingly attempted to wear, all lay locked away.");
// }
// else{
//     alert("Failed")
// }
// });

document.getElementById('submit-answer').addEventListener("click", ()=>{
    let progress = document.getElementById('progress').textContent;
    console.log(progress)
    let answer = document.getElementById('answer').value.trim().toLowerCase();
    if (answer == "raven’s cyber cache" && progress == 'true'){
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
