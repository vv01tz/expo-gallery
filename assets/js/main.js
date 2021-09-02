const navBar = document.querySelector("#navbar");
const hamBtn = document.querySelector("#nav-btn");

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