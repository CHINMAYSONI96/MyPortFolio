var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Web Developer', 'Graphic Designer'],
    typeSpeed: 10,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

var navbar = document.getElementById('navbar');
var menubutton = document.getElementsByClassName("bx-menu")[0];
var mainContent = document.getElementById("complete-Content");

function openMenu()
{
    menubutton.style.display="none";
    navbar.style.top="100%";
    mainContent.style.marginTop="75%"
}

function closeMenu()
{
    navbar.style.top="-450%";
    menubutton.style.display="inline-block";
    mainContent.style.marginTop="0%"
}