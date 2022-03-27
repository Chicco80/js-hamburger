let apriti = document.querySelector(".fas.fa-bars");
// console.log(apriti);

function mine(){
    let menu = document.querySelector(".hamburger-menu");
    menu.classList.add("active");
    
}

apriti.addEventListener("click", mine);



let chiudi = document.querySelector(".close");

function mine2(){
    let menu = document.querySelector(".hamburger-menu");
    menu.classList.remove("active");
    // console.log(menu);
}

chiudi.addEventListener("clicK", mine2);