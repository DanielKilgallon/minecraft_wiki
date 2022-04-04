window.onload = function() {
    document.getElementById("open-sidebar").addEventListener("click", openSidebar);
    document.getElementById("close-sidebar").addEventListener("click", closeSidebar);
    window.onresize = removeMobileSidebarClasses;
}

function openSidebar() {
    let sidebar = document.getElementsByClassName("sidebar-component")[0];
    sidebar.classList.add("sidebar-component-slide-in");
    sidebar.classList.remove("sidebar-component-slide-out");
}

function closeSidebar() {
    let sidebar = document.getElementsByClassName("sidebar-component")[0];
    sidebar.classList.add("sidebar-component-slide-out");
    sidebar.classList.remove("sidebar-component-slide-in");
}

function removeMobileSidebarClasses() {
    let sidebar = document.getElementsByClassName("sidebar-component")[0];
    sidebar.classList.remove("sidebar-component-slide-out");
    sidebar.classList.remove("sidebar-component-slide-in");
}

function openModalWithPicture(image) {
    let modalPicture = document.getElementById("modal-picture")
    modalPicture.src = image.src;
    document.getElementById("modal").addEventListener("click", hideModal);
    displayModal();
}

function displayModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function hideModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.removeEventListener("click", hideModal);
}