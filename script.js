let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
}
        // JavaScript to set carousel interval
    document.addEventListener('DOMContentLoaded', function() {
            var myCarousel = document.getElementById('carouselExampleInterval');
            var carousel = new bootstrap.Carousel(myCarousel, {
                interval: 1600
            });
        });
// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

