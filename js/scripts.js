document.addEventListener("DOMContentLoaded", function(event) {

    // Slider
    var buttonNext = document.querySelector(".main-slider-prev");
    console.log(buttonNext);
    var buttonPrev = document.querySelector(".main-slider-next");
    console.log(buttonPrev);
    var listElements = document.querySelectorAll(".slider-images li");
    console.log(listElements);
    var imageIndex = 0;
    var picture = listElements[imageIndex];
    console.log(picture);
    picture.classList.add("visible");

    function showNext() {
        picture.classList.remove("visible");
        imageIndex++;
        if (imageIndex == listElements.length-1) {
            imageIndex = 0;
        }
        picture = listElements[imageIndex];
        picture.classList.add("visible");
    }
    buttonNext.addEventListener("click", showNext);

    function showPrev() {
        picture.classList.remove("visible");
        imageIndex--;
        if (imageIndex == -1) {
            imageIndex = listElements.length-1;
        }
        picture = listElements[imageIndex];
        picture.classList.add("visible");
    }
    buttonPrev.addEventListener("click", showPrev);

    // Checkbox:
    var checkbox = document.querySelector(".statement-check");
    console.log(checkbox);
    var check = document.querySelector(".statement-check img");
    console.log(check);

    function ok() {
        check.classList.toggle("show");
    }
    checkbox.addEventListener("click", ok);

    // Obrazki - znikające nazwy krzeseł:
    var chairs = document.querySelectorAll(".chairs");
    console.log(chairs);
    var chairName = document.querySelectorAll(".chairs-inner");
    console.log(chairName);

    for (var i = 0; i < chairs.length; i++) {
        function hoverOverChair() {
            chairName[i].style.display = "none";
        }
    }
    chairs[i].addEventListener("mouseover", hoverOverChair);
});
