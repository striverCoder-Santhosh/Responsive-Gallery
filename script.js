const filter_buttons = document.querySelectorAll(".filterbuttons button");
const filter_cards = document.querySelectorAll(".filtercard .card");
console.log(filter_buttons);
console.log(filter_cards);

const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    filter_cards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name===e.target.dataset.name || e.target.dataset.name==="all"){
            card.classList.remove("hide");
        };
    });
};
filter_buttons.forEach(button => button.addEventListener("click",filterCards));
