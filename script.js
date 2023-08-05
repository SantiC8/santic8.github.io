let menuVisible = false;

//Function that show menu
function showMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function select(){
    // hide menu when option is selected
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Skills anitmation
function skillsAnimation(){
    var skills = document.getElementById("skills");
    var skill_size = window.innerHeight - skills.getBoundingClientRect().top;
    if(skill_size >= 300){
        let skill = document.getElementsByClassName("progress");
        skill[0].classList.add("apex");
        skill[1].classList.add("lwcjsvf");
        skill[2].classList.add("lwcjsvf");
        skill[3].classList.add("lwcjsvf");
        skill[4].classList.add("os");
        skill[5].classList.add("dedication");
        skill[6].classList.add("apex");
        skill[7].classList.add("lwcjsvf");
        skill[8].classList.add("os");
        skill[9].classList.add("os");
    }
}

// scrolling detect to trigger animation
window.onscroll = function(){
    skillsAnimation();
}