function toggleSidenavMenu() {
    const sidenav = document.querySelector(".sidenav-wrapper");

    if(sidenav.classList.contains("opened")) {
        sidenav.classList.remove("opened");
    }else {
        sidenav.classList.add("opened");
    }
}

const openSideNavBtn = document.querySelector(".open-menu-btn");

openSideNavBtn.addEventListener("click", toggleSidenavMenu);