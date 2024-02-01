// How to charge element in localStorage 
let mainColors = localStorage.getItem("color-option");
if(mainColors !== null){
    document.documentElement.style.setProperty("--main-color", mainColors);
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        if(mainColors === element.dataset.color){
            element.classList.add("active");
        }
    });
}

//Add spin to gear icon
document.querySelector(".setting-box .toggle-settings i").onclick = function (){
    // Add fa-spiin for rotation on self
    this.classList.toggle("fa-spin");
    // Add open class for setting-box for open this element in screen
    document.querySelector(".setting-box").classList.toggle("open");
}

// Switch colors 
const colorsLi = document.querySelectorAll(".colors-list li");
// Loop 
colorsLi.forEach(li => {
    li.addEventListener("click" , (e) => { 
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
        // Add color in localStorage 
        localStorage.setItem("color-option" , e.target.dataset.color );
        // Remove all active class from all elements 
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class for choisen element 
        e.target.classList.add("active");
    });
});

// switch random background option to choisen element 
const randomBackEl = document.querySelectorAll(".setting-container .random-background span");
randomBackEl.forEach(span => {
    span.addEventListener("click" , (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

// First way to change photo every five seconds:
// Selet Random pager element 
let landingPage = document.querySelector(".landing-page");
// Get images 
let imgsArray = ["01.jpg" , "02.jpg" ,"03.jpg" ,"04.jpg" ,"05.jpg" ];
// Function to change img 
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("imeges/'+ imgsArray[randomNumber] +'")';
} , 5000);

// // Second way to change photo every five seconds:
// setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * 5);
//     document.querySelector(".landing-page").style.backgroundImage = 'url("imeges/0'+ randomNumber +'.jpg")';
// } , 5000);
