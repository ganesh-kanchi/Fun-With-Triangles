const angles = document.querySelectorAll(".angles");
const anglesBtn = document.querySelector("#submit-angles");
var anglesOutput = document.querySelector("#angles-output");

const sumOfAngles = (angle1, angle2, angle3) => {
    const anglesSum = angle1 + angle2 + angle3;
    return anglesSum;
}
const isTriangle = () => {
    const anglesSum = sumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    anglesOutput.innerText = ((Number(angles[0].value)===0) || (Number(angles[1].value)===0) || (Number(angles[2].value)===0)) ? "The value of angles cannot be Zero." : (anglesSum === 180) ? "Wow, These angles do form a Triangle" : "Oh oh, These angles do not form a Triangle.";  
    
};

anglesBtn.addEventListener("click", () => {
    const anglesSum = sumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    anglesOutput.innerText = ((Number(angles[0].value)===0) || (Number(angles[1].value)===0) || (Number(angles[2].value)===0)) ? "The value of angles cannot be Zero." : (anglesSum === 180) ? "Wow, These angles do form a Triangle" : "Oh oh, These angles do not form a Triangle.";  
    
});