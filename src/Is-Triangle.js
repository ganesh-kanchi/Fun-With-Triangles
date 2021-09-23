const angles = document.querySelectorAll(".angles");
const anglesBtn = document.querySelector("#submit-angles");
var anglesOutput = document.querySelector("#angles-output");


function sumOfAngles(angle1, angle2, angle3) {
    const anglesSum = angle1 + angle2 + angle3;
    return anglesSum;

}
function isTriangle() {
    const anglesSum = sumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    if (anglesSum === 180) {
        anglesOutput.innerText = "Wow, These angles do form a Triangle"
    } else {
        anglesOutput.innerText = "Oh, no These angles do not form a triangle"
    }

};



anglesBtn.addEventListener("click", isTriangle);