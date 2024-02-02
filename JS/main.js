// How to charge element in localStorage 
let mainColors = localStorage.getItem("color-option");
if(mainColors !== null){
    document.documentElement.style.setProperty("--main-color", mainColors);
    // remove all active classes 
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        // add active class 
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



// Random background option 
let backgroundOption = true;
// this element to control background Interval 
let backgroundInterval;
// store value in localStorage 
let backgroundLocalItem = localStorage.getItem("background-option");
let backgroundRandomImage = localStorage.getItem("random_background");
if(backgroundLocalItem !== null){
    // to change active class 
    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });
    // if this true function will work
    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
        randomizeImgs();
        document.querySelector(".random-background .yes").classList.add("active");
    } else{
        backgroundOption = false;
        document.querySelector(".random-background .no").classList.add("active");
        document.querySelector(".landing-page").style.setProperty("background-image",'url("imeges/'+ backgroundRandomImage +'")' );
    }
}
// switch random background option to choisen element 
const randomBackEl = document.querySelectorAll(".setting-container .random-background span");
randomBackEl.forEach(span => {
    span.addEventListener("click" , (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        e.target.classList.add("active");

        // this condation to know you want change backgroundImage every 10 second or not 
        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background-option" , true);
        } else{
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);
            //document.querySelector(".landing-page").style.setProperty("background-image",'url("imeges/'+ backgroundRandomImage +'")' );
        }
    })
});
// Selet Random pager element 
let landingPage = document.querySelector(".landing-page");
// Get images 
let imgsArray = ["01.jpg" , "02.jpg" ,"03.jpg" ,"04.jpg" ,"05.jpg" ];
// Function to change img 
function randomizeImgs(){
    if(backgroundOption){
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("imeges/'+ imgsArray[randomNumber] +'")';
            localStorage.setItem("random_background", imgsArray[randomNumber]);
        } , 1000);
    }
}


// sellect skills box 
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function (){
    // height page to skill element 
    let skillsOffsetTop = ourSkills.offsetTop;
    // height skill element 
    let skillsOuterHeight = ourSkills.offsetHeight;
    // height page of computer 
    let windowHeight = this.innerHeight;
    // height of scroll 
    let windowScrollTop = this.scrollY;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
}