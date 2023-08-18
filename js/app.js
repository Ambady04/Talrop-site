window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.log(event.deltaY);


    if (event.deltaY >= 1.25 ) {
        document.querySelector("#home > header").style.position = "static";
        document.querySelector("#spotlight > div.wrapper").style.marginTop = "initial"
        
        
    } else if (event.deltaY <= -1.25 ) {
        document.querySelector("#home > header").style.position = "fixed";
        document.querySelector("#spotlight > div.wrapper").style.marginTop = "100px"
        document.querySelector("#home > header").classList.add("down aos-init")
        
    }
});