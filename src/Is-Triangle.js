const angles = document.querySelectorAll(".angles");
const anglesBtn = document.querySelector("#submit-angles");
var anglesOutput = document.querySelector("#angles-output");


function sumOfAngles(angle1, angle2, angle3) {
    const anglesSum = angle1 + angle2 + angle3;
    return anglesSum;

}
function isTriangle() {
    const anglesSum = sumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    if ((Number(angles[0].value)===0) || (Number(angles[1].value)===0) || (Number(angles[2].value)===0)) {
        anglesOutput.innerText = "You need to specify all Three Values."
    } else if (anglesSum === 180) {
            anglesOutput.innerText = "Wow, These angles do form a Triangle"
        } else {
            anglesOutput.innerText = "Oh oh, These angles do not form a Triangle."
        }
    

};



anglesBtn.addEventListener("click", isTriangle);