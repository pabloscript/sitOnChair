document.addEventListener("DOMContentLoaded", function(event) {

    // Wysuwane menu:
    var about = document.querySelector(".page-nav li");
    console.log(about);
    var subList = document.querySelector(".page-nav-sublist");
    console.log(subList);

    function extendMenu() {
        subList.classList.toggle("extend");
    }
    about.addEventListener("mouseover", extendMenu);
    about.addEventListener("mouseout", extendMenu);

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
    // (pewnie da się to zrobić w pętli, ale mi nie wychodziło)
    var clair = document.querySelectorAll(".chairs")[0];
    console.log(clair);
    var margarita = document.querySelectorAll(".chairs")[1];
    console.log(margarita);
    var clairText = clair.children[0];
    console.log(clairText);
    var margaritaText = margarita.children[0];
    console.log(margaritaText);

        // Clair:
    function hoverOverClair() {
        clairText.style.display = "none";
    }
    clair.addEventListener("mouseover", hoverOverClair);

    function leaveClair() {
        clairText.style.display = "inline-block";
    }
    clair.addEventListener("mouseout", leaveClair);

        // Margarita:
    function hoverOverMargarita() {
        margaritaText.style.display = "none";
    }
    margarita.addEventListener("mouseover", hoverOverMargarita);

    function leaveMargarita() {
        margaritaText.style.display = "inline-block";
    }
    margarita.addEventListener("mouseout", leaveMargarita);

});
