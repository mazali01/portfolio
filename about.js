const tabs = document.getElementsByClassName("tab-links");

for(const tab of tabs){
    tab.addEventListener('click',()=>{
        for(const otherTab of tabs){
            otherTab.classList.remove("active-link");
            document.querySelector(`.tab-contents .${otherTab.id}`).classList.add("hidden");
        }
        tab.classList.add("active-link");
        document.querySelector(`.tab-contents .${tab.id}`).classList.remove("hidden");
    })
}