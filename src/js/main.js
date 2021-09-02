let navBar = document.querySelector("#navbar");
let hamBtn = document.querySelector("#nav-btn");

hamBtn.addEventListener("click", () => {

    if (hamBtn.classList.contains("open"))
    {
        hamBtn.classList.remove("open");
        navBar.removeAttribute("id");
    }
    else{
        hamBtn.classList.add("open");
        navBar.setAttribute("id","show-menu");
    }
})