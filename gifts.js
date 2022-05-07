

document.querySelector("#vu15").addEventListener("click", u15fn);


function u15fn(){
    event.preventDefault();

    // console.log("clicked me")
    window.location.href="giftsunder15.html";
    // // window.location.href = "applied.html";
}


document.querySelector("#vu30").addEventListener("click", u30fn);


function u30fn(){
    event.preventDefault();

    console.log("clicked me 30")
    window.location.href="giftsunder30.html";
    // // window.location.href = "applied.html";
}

document.querySelector("#vu50").addEventListener("click", u50fn);


function u50fn(){
    event.preventDefault();
    window.location.href="giftsunder50.html";
    // console.log("clicked me 50")
    // window.location.href="giftsunder15";
    // // window.location.href = "applied.html";
}


