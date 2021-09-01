function navMod() {
    var bodyElement = document.querySelector("body");
    var navElement = document.querySelector("nav");
    if (this.scrollY > 5)  
    {
        navElement.style.background = "rgba(50, 44, 44, 1)";
        navElement.style.border="none"
    }
     else
     {
        navElement.style.backgroundColor = "rgba(50, 44, 44, 0)";
        navElement.style.borderBottom="1px solid rgba(230, 228, 228, 0.5)"
     } 
}
window.addEventListener("scroll", navMod , false);

function menu() {
    var x = document.getElementById("ml");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function al(){
    alert("The selected item will be added to cart!")
  }