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

    var chairs = document.querySelectorAll(".chairs");
    console.log(chairs);

    for (var i = 0; i < chairs.length-1; i++) {
        function hoverOverChair() {
            this.children[0].style.display = "none";
        }
        chairs[i].addEventListener("mouseover", hoverOverChair);

        function leaveChair() {
            this.children[0].style.display = "inline-block";
        }
        chairs[i].addEventListener("mouseout", leaveChair);
    }
});
