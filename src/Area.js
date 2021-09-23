const base = document.querySelector("#Base")
const height = document.querySelector("#Height")
const calBtn = document.querySelector("#Area-Btn")
const areaOutput = document.querySelector("#Area-output")

areaOutput.style.display = "none";

calBtn.addEventListener("click", function areaCalculator() {
    var area = ((base.value * height.value) / 2)
    areaOutput.innerText = "The Area of Triangle is " + area + " cm."
    areaOutput.style.display = "block";
    console.log(area)
});