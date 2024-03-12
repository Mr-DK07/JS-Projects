let modeBtn = document.querySelector("#mode");
let Body = document.querySelector("body");

let currMode = "Light";

modeBtn.addEventListener("click", () => {
    if(currMode === "Light") {
        currMode = "Dark";
        Body.style.background = "black";
        modeBtn.style.background = "black";
        modeBtn.style.color = "white";
        modeBtn.style.border = "1px solid white";
        modeBtn.style.transition = "all 2s";
        modeBtn.style.transform = "scale(1.2)";
        Body.style.transition = "all 1s";
    }else{
        currMode = "Light";
        Body.style.background = "white";
        modeBtn.style.background = "white";
        modeBtn.style.color = "black";
        modeBtn.style.border = "1px solid black";
        modeBtn.style.transition = "all 2s";
        modeBtn.style.transform = "scale(1)";
        Body.style.transition = "all 1s";
    }
    console.log(currMode);
});