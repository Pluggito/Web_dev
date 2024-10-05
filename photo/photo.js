/*----------------Wrapper Effect--------------*/

document.body.addEventListener("click",(event)=> {
    const clickedElement = event.target,
    imgs = document.querySelectorAll(".img");

    if(!clickedElement.classList.contains("img")) {
        imgs.forEach((img) => img.classList.remove("open"));
        return;
    }

    if(clickedElement.classList.contains("open")) {
        clickedElement.classList.remove("open");
        return;
    }

    imgs.forEach((img) => img.classList.remove("open"));
    clickedElement.classList.add("open");
});


/*--------------------sidemenu for 320px screens----------- */


// Function to toggle the menu visibility

function toggleMenu() {
    const menu = document.getElementById('sidemenu');
    const toggleIcon = document.querySelector('.toggle-menu');
  
    menu.classList.toggle('show-menu');
    toggleIcon.classList.toggle('rotate');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.querySelector('.toggle-menu');
  
    if (toggleIcon) {
      toggleIcon.addEventListener('click', toggleMenu);
    } else {
      console.error('Element with class "toggle-menu" not found.');
    }
  });