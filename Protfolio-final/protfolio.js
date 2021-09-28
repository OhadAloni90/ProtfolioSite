// NavBar//

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);


});

// sidebar burger//
const button = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation a");

button.addEventListener("click",function (){
    button.classList.toggle('active');
    navigation.classList.toggle('active');
});

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", ()=>{
        
    button.classList.remove('active');
    navigation.classList.remove('active');
    });
});

// scrollbtn //

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", ()=>{
    scrollBtn.classList.toggle("active", window.scrollY>500);
})

scrollBtn.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll", revealss);

function revealss () {
    var revealsi = document.querySelectorAll(".reveal");
    for(var i=0; i < revealsi.length; i++){
        var windowHeight = window.innerHeight;
        console.log(windowHeight);
        var revealTop = revealsi[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if(revealTop < (windowHeight - revealPoint)){
            revealsi[i].classList.add("active");
        }
    }   revealsi[i].classList.remove("reveal");
}