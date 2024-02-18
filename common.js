document.querySelector(".hamburger")?.addEventListener('click', () => {
    const classList = document.querySelector(".hamburger")?.classList;
    if (classList.contains("open")){
        classList.remove("open");
        document.querySelector("nav .mobile ul")?.classList.add("hidden");
    }
    else{
        classList.add("open")
        document.querySelector("nav .mobile ul")?.classList.remove("hidden");
    }
})