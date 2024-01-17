            document.addEventListener("DOMContentLoaded", function() {
            // Simulate loading time (you can adjust the duration)
            setTimeout(function() {
                hideLoadingScreen();
            }, 2000); // 2000 milliseconds (2 seconds)
        
            function hideLoadingScreen() {
                var loadingScreen = document.getElementById("loadingScreen");
                var mainWrapper = document.getElementById("mainWrapper");
        
                // Move the loading screen upward to reveal the main content
                loadingScreen.style.transform = "translateY(-100%)";
        
                // Show the main content
                mainWrapper.style.transform = "translateY(0)";
                var mainContent = document.getElementById("mainContent");
                mainContent.style.opacity = "1";
                mainContent.style.transform = "translateY(0)";
            }
        });
            document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time (you can adjust the duration)
    setTimeout(function() {
        hideLoadingScreen();
    }, 2000); // 2000 milliseconds (2 seconds)

    function hideLoadingScreen() {
        var loadingScreen = document.getElementById("loadingScreen");
        var mainContent = document.getElementById("mainContent");

        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }
});

            document.addEventListener('DOMContentLoaded', function () {
                document.body.style.overflowX = 'hidden';
            });

            document.querySelector('.chatbot').addEventListener('click', function () {
                document.querySelector('.chatbot-container').style.display = 'block';
                document.querySelector('.nav').style.opacity = '0.1';
            });

            function closeTextArea() {
                document.querySelector('.chatbot-container').style.display = 'none';
                document.querySelector('.nav').style.opacity = '1';
                document.querySelector('.textArea').style.display = 'none';
                document.querySelector('.textArea1').style.display = 'none';
                let buttons = document.querySelectorAll('button');
                buttons.forEach(function (btn) {
                    btn.disabled = false;
                });
            }
            function ques(button) {
                let buttonOp = button.value;
                document.querySelector('.textArea').innerHTML = buttonOp;

                // Disable all buttons
                let buttons = document.querySelectorAll('button');
                buttons.forEach(function (btn) {
                    btn.disabled = true;
                });
                document.querySelector('.textArea').style.display = 'block';
                if (buttonOp === 'chat with us') {
                    document.querySelector('.textArea1').style.display = 'block';
                }
            }
            const toggleThemeButton = document.querySelector(".toggle-theme1");
const body = document.body;
const element = document.querySelector('.toggle-theme');

// Load saved theme preference
const savedTheme = localStorage.getItem("theme");
body.classList.toggle("dark-mode", savedTheme === "dark");

// Load saved toggle state
let isToggled = localStorage.getItem('isToggled') === 'true' || false;

toggleThemeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    toggleBackgroundColor();
});

function toggleBackgroundColor() {
    if (isToggled) {
        // If the background color is toggled, set it to the normal color
        element.style.backgroundColor = 'initial';
    } else {
        // If the background color is not toggled, set it to the new color
        element.style.backgroundColor = '#333';
    }

    // Toggle the state
    isToggled = !isToggled;
    localStorage.setItem('isToggled', isToggled);
}

// Initial call to set the background color based on the saved state
toggleBackgroundColor();

