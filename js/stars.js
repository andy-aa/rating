document.querySelectorAll(".rating").forEach((element) => {

    let product_id = element.getAttribute("data-product-id");

    element.addEventListener("click", e => {
        let rat_val = e.target.getAttribute("data-rat-val");
        let storedItem = localStorage.getItem("arrRat");
        let arrRat = storedItem ? JSON.parse(storedItem) : {};

        if (product_id && rat_val) {
            arrRat[product_id] = rat_val
        }

        localStorage.setItem("arrRat", JSON.stringify(arrRat));

        dravStars(element);
    });

    dravStars(element);
});

function dravStars(element) {
    let storedItem = localStorage.getItem("arrRat");
    let arrRat = storedItem ? JSON.parse(storedItem) : {};
    let star_count = arrRat[element.getAttribute("data-product-id")];

    element.querySelectorAll("div").forEach(element => {
        let current_rate = element.getAttribute("data-rat-val");
        if ((current_rate > 0) && (current_rate <= star_count)) {
            element.classList.add("star");
        } else {
            element.classList.remove("star");
        }
    });
}