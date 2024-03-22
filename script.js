window.addEventListener('scroll',function(){
    var navbar =document.getElementById('navbar');
    if (this.window.scrollY > 0) {
        navbar.classList.add('navscrolled');

    }else{
        navbar.classList.remove('navscrolled');
    }
});