const lengthA = document.querySelector("#Length-A")
const lengthB = document.querySelector("#Length-B")
const calBtn = document.querySelector("#Length-Btn")
const hypOutput = document.querySelector("#hyp-output")

hypOutput.style.display = "none";

calBtn.addEventListener("click", () => {
    var hyp = Math.sqrt(Math.pow(lengthA.value,2) + Math.pow(lengthB.value , 2));
    hyp = hyp.toFixed(2);
    hypOutput.innerText = (Number(lengthA.value)===0  || Number(lengthB.value)===0) ? `The sides values cannot be Zero.` : `The Hypotenuse is ${hyp} units.`;
    hypOutput.style.display = "block";
});