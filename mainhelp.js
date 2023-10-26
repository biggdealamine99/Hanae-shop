function goToHanaeshop() {
    window.location.href = "Hanaeshop.html";
}
function goToproduct() {
    window.location.href = "product.html";
}

function goTohelp() {
    window.location.href = "mainhelp.html";
}

function goToprofile() {
    document.getElementById('dis1').style.display = "block"
    document.getElementById('dis2').style.display = "none"
}


function goToorder() {
    document.getElementById('dis1').style.display = "none"
    document.getElementById('dis2').style.display = "block"
}