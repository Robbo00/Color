
function Show() {
    document.getElementById("buck").style.opacity = "1";
}

function Hide() {
    document.getElementById("buck").style.opacity = "0";
}

document.getElementById("knuck").addEventListener("mouseenter", Show); 
document.getElementById("knuck").addEventListener("mouseleave", Hide); 
