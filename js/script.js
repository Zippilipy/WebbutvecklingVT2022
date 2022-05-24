/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function sidebarFunction() {
    var x = document.getElementById("sideBar");
    if (x.style.display === "block"){
        x.style.display = "none";
        document.getElementsByClassName("screenShadow")[0].remove()
    } else {
        x.style.display = "block";
        document.getElementsByTagName("body")[0].innerHTML = "<div onclick=\"sidebarFunction()\" class=\"screenShadow\"></div>" + document.getElementsByTagName("body")[0].innerHTML
    }
}