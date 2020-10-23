const inputs = document.querySelectorAll(".input");

            function focusFunc() {
                let parent = this.parentNode;
                parent.classList.add("focus");
            }

            function blurFunc() {
                let parent = this.parentNode;
                if(this.value == "") {
                    parent.classList.remove("focus");
                }
                
            }

            inputs.forEach(input => {
                input.addEventListener("focus", focusFunc);
                input.addEventListener("blur", blurFunc);
            })


            var Form1 = document.getElementById("Form1");
            var Form2 = document.getElementById("Form2");




            var Next1 = document.getElementById("Next1");
            var Next2 = document.getElementById("Next2");
            var Back1 = document.getElementById("Back1");

            Next1.onclick = function() {
                Form1.style.left = "450px"; 
                Form2.style.left= "10px";
                
            }

            Back1.onclick = function() {
                Form1.style.left = "10px"; 
                Form2.style.left= "450px";
                
            }