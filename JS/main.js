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
    });
});

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
