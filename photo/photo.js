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
    const toggleIcon = document.querySelector('.toggle-menu'); // Get the toggle icon
    
    menu.classList.toggle('show-menu'); // Toggle the menu visibility
    toggleIcon.classList.toggle('rotate'); // Toggle the rotation on the icon
}

// Add an event listener to the toggle icon
document.querySelector('.toggle-menu').addEventListener('click', toggleMenu);


