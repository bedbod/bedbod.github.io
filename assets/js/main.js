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

var x = document.getElementByClassName("video"); 

function pauseVid(x)
            {
            if (x.paused)
              x.play();
            else
              x.pause();
            }
            $(document).ready(function () {
            var x = document.getElementByClassName("video");
            pauseVid(video);
        });