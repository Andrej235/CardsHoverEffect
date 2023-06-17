const cards = document.querySelectorAll(".big-card");
const cardsWrapper = document.querySelector(".cards-wrapper")

cardsWrapper.addEventListener("mouseover", e => {
    cards.forEach(card => {
        card.classList.add("hovered");
    });
});

cardsWrapper.addEventListener("mouseleave", e => {
    cards.forEach(card => {
        card.classList.remove("hovered");
    });
});