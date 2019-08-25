let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
}
if(mm<10) {
    mm='0'+mm
}
today = mm+'/'+dd+'/'+yyyy;
var d2 = new Date(today);
var d1 = new Date("05/11/2019");
var timeDiff = d2.getTime() - d1.getTime();
var DaysDiff = timeDiff / (1000 * 3600 * 24);
{/* <img class='background' src='alphabetSoup.jpg' alt='alphabet soup image'></img> */}
function sideBar(){
    $("#sideBar").text("I've been learning to code for: "+DaysDiff+" days")
}

function homePage(){
    $(".home").on("click",function(event){
        $(".home").addClass("selected");
        $(".contactMe").removeClass("selected");
        $(".projects").removeClass("selected");
        renderHomePage();
    });
}


function projectsPage(){
    $(".projects").on("click", function(event){
        $(".home").removeClass("selected");
        $(".projects").addClass('selected');
        $(".contactMe").removeClass("selected");
        $("main").html("<section class='grid-container'><a href='https://tcgronk.github.io/outdoorApp/' target='_blank'><h2 class='grid-item'>National Park App</h2></a><p class='grid-item'>Check out my national park app! To create this park app, I used HTML, CSS, Javascript, & jQuery. I also used data from the National Parks Service API, the weatherbit API, and the Foursquare API.</p><p class='grid-item'><a href='https://tcgronk.github.io/outdoorApp/' target='_blank'><img src='ParkApp.jpg' alt='portfolio park app'></a></p><a href='https://github.com/tcgronk/Quiz-App' target='_blank'><h2 class='grid-item'>Quiz App</h2></a><p class='grid-item'>This was my first project! To create this quiz app, I used HTML, CSS, Javascript, & jQuery.</p><p class='grid-item'><a href='https://tcgronk.github.io/Quiz-App/' target='_blank'><img src='portfolio-wine.jpg' alt='portfolio quiz app'></a></p></section>");
    });
}

function contactPage(){
    $(".contactMe").on("click", function(event){
        $(".home").removeClass("selected");
        $(".contactMe").addClass("selected");
        $(".projects").removeClass("selected");
        $('main').html("<section class='contacting'><p>Thanks for reaching out! The best way to get in contact with me is by emailing me at {tessgronski@gmail.com}</p></section>");
    });
}
function renderHomePage(){
    $(".home").addClass("selected");
    $(".projects").removeClass("selected");
    $(".contactMe").removeClass("selected");
    $("main").html("<section class='personalBio'><p>Hi &#x1F44B I'm Tess. I am a web developer based in San Francisco. I am currently enrolled in Bloc's Web Developer program with a Close the Gap scholarship.</p><p> I love learning how to code because it is a combination of math and language. I am excited to combine my new technical skills with my passion for data, leadership, and project management.</p></section>");
}







function createPortfolio(){
    homePage();
    sideBar();
    projectsPage();
    contactPage();
    renderHomePage();
    
    
}

$(createPortfolio);
    

