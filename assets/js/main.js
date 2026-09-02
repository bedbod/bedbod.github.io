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
            var divs = document.getElementsByClassName("gallerybtn");
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];
                if (div.classList.contains(className)) {
                    div.classList.add("active");
                } else {
                    div.classList.remove("active")
                }
            }
        }

ShowNav()
function ShowNav(className) {
            var divs = document.getElementsByClassName("nav");
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];
                if (div.classList.contains("active")) {
                    div.classList.remove("active")
                } else if (div.classList.contains(className)) {
                    div.classList.add("active")
                } else {
                    div.classList.remove("active")
                }
            }
            var divs = document.getElementsByClassName("navbtn");
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];
                if (div.classList.contains("active")) {
                    div.classList.remove("active")
                } else if (div.classList.contains(className)) {
                    div.classList.add("active")
                } else {
                    div.classList.remove("active")
                }
            }
        }

document.getElementsByClassName("close").addEventListener("onclick", pauseVid);

function pauseVid() {
    var x = document.getElementByClassName("video");
    x.pause();
};
