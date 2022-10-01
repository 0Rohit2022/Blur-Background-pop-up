const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container")
const containerEl  = document.querySelector(".container")
const closeiconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", () => {
    
      containerEl.classList.add("active");
      popupContainerEl.classList.remove("active");
     
    
});
closeiconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})