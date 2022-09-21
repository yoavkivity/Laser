let toolbar  = document.querySelector(".toolbar");

document.querySelector('#menu-btn').onclick = () => {
    toolbar.classList.add("active");
}

document.querySelector("#close-toolbar").onclick = () =>{
    toolbar.classList.remove("active")
}

window.onscroll = () => {
    toolbar.classList.remove("active");
}
