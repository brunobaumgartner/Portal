function slide1() {
    document.getElementById('slide').src = "image/1.png";
    document.getElementById('txtSlide').innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sit sapiente quas animi incidunt repellat molestias illo, earum fugit assumenda quaerat maxime atque, eius fuga."
    setTimeout("slide2()", 10000)
}

function slide2() {
    document.getElementById('slide').src = "image/2.png";
    document.getElementById('txtSlide').innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    setTimeout("slide3()", 10000)
}

function slide3() {
    document.getElementById('slide').src = "image/3.png";
    document.getElementById('txtSlide').innerText = "Excepturi sit sapiente quas animi incidunt repellat molestias illo, earum fugit assumenda quaerat maxime atque, eius fuga."
    setTimeout("slide1()", 10000)
}