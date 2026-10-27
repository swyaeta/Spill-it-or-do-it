
let truthButton = document.querySelector(".truth");
let dareButton = document.querySelector(".dare");
let board = document.querySelector(".board");

let truths = document.querySelectorAll(".truth-questions p");
let dares = document.querySelectorAll(".dare-questions p");

truthButton.addEventListener("click", function() {
    let random = Math.floor(Math.random() * truths.length);
    board.textContent = truths[random].textContent;
});

dareButton.addEventListener("click", function() {
    let random = Math.floor(Math.random() * dares.length);
    board.textContent = dares[random].textContent;
});
