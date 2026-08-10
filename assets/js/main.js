filterSelection("all")
function filterSelection(className) {
            var divs = document.getElementsByClassName("box");
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];
                if (div.classList.contains(className)) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
                if (className == "all") {
                    div.style.display = "block";
                }
            }
            var divs = document.getElementsByClassName("btn");
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];
                if (div.classList.contains(className)) {
                    div.classList.add("active");
                } else {
                    div.classList.remove("active")
                }
            }
        }

const close = document.getElementByClassName("close");
const popup = document.getElementByClassName("popup");

  close.addEventListener("click", () => {
    popup.style.display = "none";
  });