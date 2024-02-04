// scroller line in page &&
// add bution to up
let el = document.querySelector(".scroller");
// for called button
let elToUp = document.querySelector(".scroll-up");
let heightOfPage = this.innerHeight;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll" , () => {
    // this for show button 
    let scrollTop = document.documentElement.scrollTop;
    // for bar in windwo 
    el.style.width = `${(scrollTop / height) * 100}%`;
    this.scrollY > heightOfPage ? elToUp.classList.add("show") : elToUp.classList.remove("show");
});
// when user click on the button, return to 0
elToUp.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


// Add bullets auto 
let allSections = document.querySelectorAll(".section");
allSections.forEach((e) => {
    let bulletEle = document.createElement("div");
    bulletEle.classList.add("bullet");
    let toolTip = document.createElement("div");
    bulletEle.setAttribute('data-link', e.dataset.link);
    toolTip.classList.add("tooltip");
    let dataText = e.dataset.ele;
    toolTip.textContent;
    let text = document.createTextNode(dataText);
    toolTip.appendChild(text);
    bulletEle.appendChild(toolTip);
    document.querySelector(".bullets").appendChild(bulletEle);
});


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
        removeAndAddActive(e);
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
        removeAndAddActive(e);
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

// Create Popup with the Image 
let Imgsgallery = document.querySelectorAll(".gallery img");
Imgsgallery.forEach(img => {
    img.addEventListener("click" , (e) => {
        // Create overlay element 
        let overlay = document.createElement("div");
        overlay.className= ('popup-overlay');
        document.body.appendChild(overlay);
        // create pupup element 
        let popupImg = document.createElement("div");
        popupImg.className=('pupup-img');
        if(img.alt !== null){
            let headOfPopup = document.createElement("h3");
            let textHead = document.createTextNode(img.alt);
            headOfPopup.appendChild(textHead);
            popupImg.appendChild(headOfPopup);
        }
        // create img element 
        let ImageInPopup = document.createElement("img");
        ImageInPopup.src = img.src;
        popupImg.appendChild(ImageInPopup);
        document.body.appendChild(popupImg);
        // create close element 
        let closer = document.createElement("span");
        closer.className = ('close-popup');
        let closeIcon = document.createElement("i");
        closeIcon.className = ('fa-solid fa-xmark');
        closer.appendChild(closeIcon);
        popupImg.appendChild(closer);
    });
});
document.addEventListener("click", function (e) {
    if(e.target.className == 'close-popup'){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});


// Go to element which choised user 
let bulletsAll = document.querySelectorAll(".bullets .bullet");
let allLinks = document.querySelectorAll(".header .links a");

function gootElement (element) {
    element.forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.link).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}
gootElement(bulletsAll);
gootElement(allLinks);


// Handle active class
function removeAndAddActive (e){
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    // add active class for choisen element 
    e.target.classList.add("active");
};

let showBullets = document.querySelectorAll(".show-bullets span");
let navBullets = document.querySelector(".bullets");
let showBulletsLocal = localStorage.getItem("bullets-option");

if(showBulletsLocal !== null){
    showBullets.forEach(ele => {
        ele.classList.remove("active");
    });
    if(showBulletsLocal === 'block'){
        navBullets.style.display = 'block';
        document.querySelector(".show-bullets .yes").classList.add("active");
    }else {
        navBullets.style.display = 'none';
        document.querySelector(".show-bullets .no").classList.add("active");
    }
}

showBullets.forEach (bollet => {
    bollet.addEventListener("click", (e) => {
        
        if(bollet.dataset.display === "show"){
            navBullets.style.display = 'block';
            localStorage.setItem("bullets-option", "block");
        } else {
            navBullets.style.display = 'none';
            localStorage.setItem("bullets-option", "none");
        }
        removeAndAddActive(e);
    });
});

document.querySelector(".reset-options").onclick = function (){
    localStorage.clear();
    // localStorage.removeItem("bullets-option");
    // localStorage.removeItem("background-option");
    // localStorage.removeItem("color-option");
    window.location.reload();
}

let toggenButton = document.querySelector(".list");
let tlinks = document.querySelector(".links");
toggenButton.onclick = function(e){
    e.stopPropagation();
    tlinks.classList.toggle("open");
    this.classList.toggle("list-active");
}

document.addEventListener("click", (e) => {
    if(e.target !== toggenButton && e.target !== tlinks){
        if(tlinks.classList.contains("open") && toggenButton.classList.contains("list-active")){
            toggenButton.classList.toggle("list-active");
            tlinks.classList.toggle("open");
        }
    }
});
tlinks.onclick = function(e){
    e.stopPropagation();
}