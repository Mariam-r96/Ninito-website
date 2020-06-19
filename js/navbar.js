// navbar collapse and expand 

let toggle_Bar = document.querySelector(".fa-bars");
let navbar_container = document.querySelector(".navbar-container");
let navbar_list = document.querySelector(".nav-links");
let expand = false;

toggle_Bar.addEventListener("click", expandNavBar);
 
function expandNavBar(){
    
    if(expand=== false){
        console.log("opening");
        expand=true;
        navbar_container.classList.add("navbar-container-expand");
        navbar_list.style.opacity='1';
        // navbar_container.style.transition = 'max-height .6s ease-out';
       
    }

    else if(expand=== true){
        console.log("closing");
        expand=false;
        navbar_container.classList.remove("navbar-container-expand");
        navbar_list.style.opacity='0';
        // navbar_container.style.transition = 'max-height .6s ease-out';
       
    }
}

// sticky navbar 
    window.onscroll = function() {myFunction()};


    let sticky = navbar_container.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar_container.classList.add("sticky")
    } else {
        navbar_container.classList.remove("sticky");
    }
    }