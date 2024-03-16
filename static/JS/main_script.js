function toggleTextVisibility(element) {
    element.style.display = "block";
    setTimeout(function () {
        element.style.display = "none";
    }, 3000);
}
function toggleBackground() {
    // Hide the div with class "title-click"
    document.querySelector('.title-click').style.display = 'none';
    // Select and apply changes to the elements with class "nav-toggle"
    const figures = document.querySelectorAll('.nav-toggle > figure');
    figures.forEach((figure) => {
        figure.style.background = 'linear-gradient(to right bottom, #5c249b, #5f27a3, #632aaa, #662eb2, #6931ba, #6531b1, #6131a8, #5d319f, #512d84, #45296a, #392551, #2c2039)';
    });
}