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