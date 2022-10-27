// window.addEventListener("wheel", event => {
//     const delta = Math.sign(event.deltaY);
//     console.info(typeof(delta));


//     if (delta === 1) {
//         document.querySelector("#ecosystem > div > div.left").classList.add("slide-right");
//         console.log("shameems")
//     } else {
//         document.querySelector("#ecosystem > div > div.left").classList.remove("slide-right");
//     }
// });

$(window).scroll(function(){

    var scroll = $(window).scrollTop();
    console.log(scroll)

    if (scroll >= 1100) {
        let element = $("#ecosystem > div > div.left");
        element.addClass("slide-right")
    } else if (scroll < 1100) {
        let element = $("#ecosystem > div > div.left");
        element.removeClass("slide-right")

    }
})