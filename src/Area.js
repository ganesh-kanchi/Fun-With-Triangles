const base = document.querySelector("#Base")
const height = document.querySelector("#Height")
const calBtn = document.querySelector("#Area-Btn")
const areaOutput = document.querySelector("#Area-output")

areaOutput.style.display = "none";

calBtn.addEventListener("click", ()=> {
    var area = ((base.value * height.value) / 2)
    area = area.toFixed(2);
    areaOutput.innerText = (base.value===0|| height.value===0) ? `The values of sides cannot be Zero.` : `The Area of Triangle is ${area} cm.`
    areaOutput.style.display = "block";
});