const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const elemCon = document.querySelector('#elem-container');
const fixedIamge = document.querySelector('#fixed-image');

elemCon.addEventListener('mouseenter', function(e) {
    fixedIamge.style.display = 'block';
})

elemCon.addEventListener('mouseleave', function(e) {
    fixedIamge.style.display = 'none';
})

let elemArr = document.querySelectorAll('.elem')

elemArr.forEach(elem => {
    elem.addEventListener('mouseenter', function() {
        let image = elem.getAttribute('data-image');
        console.log('image link',image)
        fixedIamge.style.backgroundImage = `url(${image})`;
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
  });



let menu = document.querySelector('nav h3')
let fullScreen = document.querySelector("#full-screen")
let logo = document.querySelector("#nav-part1 img")
var flag = 0;// Ensure flag is initialized to 0

menu.addEventListener("click", function() {
    if (flag === 0) {
        console.log('first clicked');
        fullScreen.style.top = 0;
        logo.style.opacity = 0;
        flag = 1;
    } else {
        console.log('second clicked');
        fullScreen.style.top = "-100%";
        logo.style.opacity = 1;
        flag = 0;
    }
});



let loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top='-100%'
},4000)