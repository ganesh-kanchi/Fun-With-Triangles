const lengthA = document.querySelector("#Length-A")
const lengthB = document.querySelector("#Length-B")
const calBtn = document.querySelector("#Length-Btn")
const hypOutput = document.querySelector("#hyp-output")

hypOutput.style.display = "none";

// function hypCalculator() {
//     var hyp = Math.sqrt((lengthA.value * lengthA.value) + (lengthB.value * lengthB.value))
//     hypOutput.innerText = "the Hypotenuse is " + hyp + " units"
//     hypOutput.style.display = "block";
// }

calBtn.addEventListener("click", function hypCalculator() {
    var hyp = Math.sqrt((lengthA.value * lengthA.value) + (lengthB.value * lengthB.value))
    hypOutput.innerText = "the Hypotenuse is " + hyp + " units."
    hypOutput.style.display = "block";
}
);