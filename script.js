let hamburger = document.querySelector('.hamburger')
let navlinks = document.querySelectorAll('.links');

hamburger.onclick = function(){
    let navbar = document.querySelector('.nav-bar')
    navbar.classList.toggle('active')
}

navlinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navlinks.forEach(function(item){
            item.style.backgroundColor = '#11101b'
            item.style.color = '#fefefe'
        })
        e.target.style.backgroundColor = '#fefefe'
        e.target.style.color = '#11101b'
    });
});