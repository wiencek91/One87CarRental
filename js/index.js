// galeria u góry strony
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

// hamburger menu
window.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".menu_list");
    document.getElementById("menu_trigger").addEventListener("click", function () {
        menu.classList.toggle("menu_open");
    });
    window.matchMedia("(min-width: 1080px)").addListener(function (mediaQueryListEvent) {
        if (mediaQueryListEvent.matches) {
            menu.classList.remove("menu_open");
        }
    })
});

// formularz kontaktowy
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('submit');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var agree = document.getElementById('agree');

    var error = document.querySelector('.error_message');

    btn.addEventListener('click', function (event) {
        if (email.value.indexOf('@') == -1) {
            error.innerText='Email musi posiadać znak @';
            event.preventDefault();
        }
        if (name.value.length <= 3) {
            error.innerText='Twoje imię jest zbyt krótkie';
            event.preventDefault();
        }
        if (message.value.length <= 12) {
            error.innerText='Twoja wiadomość do nas jest zbyt krótka';
            event.preventDefault();
        }
        if (agree.checked !== true) {
            error.innerText='Prosimy o akceptację warunków';
            event.preventDefault();
        }
    })
});
